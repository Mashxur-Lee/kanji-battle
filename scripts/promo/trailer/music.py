"""An original theme for the Kanji Wizards trailer: koto-like plucks, a soft electric piano, a warm pad, light drums.
96 BPM, D major / B minor, one chord a bar (2.5 s) so the pictures can cut on the bar lines.
python3 music.py full|short out.wav"""
import sys
import numpy as np
from scipy.signal import fftconvolve, butter, sosfilt

SR = 48000
BAR = int(SR * 2.5)          # 4 beats at 96 BPM
E8 = BAR // 8                # an eighth note
rng = np.random.default_rng(7)
hz = lambda m: 440.0 * 2 ** ((m - 69) / 12)

def env_exp(n, decay):
    return np.exp(-np.arange(n) / (decay * SR))

def pluck(m, dur=2.2, bright=1.0):
    """a plucked string: harmonics that die away faster the higher they are, a little scoop at the start"""
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    bend = 1 + 0.012 * np.exp(-t / 0.035)                      # the koto's pitch settles from just above
    ph = 2 * np.pi * np.cumsum(f * bend) / SR
    y = np.zeros(n)
    for k in range(1, 13):
        if f * k > 9000: break
        amp = (1.0 / k) * (0.6 + 0.4 * np.cos(k * 1.1)) * bright ** (k - 1)
        y += amp * np.sin(k * ph * (1 + 0.0004 * k * k)) * np.exp(-t * (1.1 + 0.55 * k) * (f / 330) ** 0.35)
    y += 0.25 * rng.standard_normal(n) * np.exp(-t / 0.004)   # the pick
    y *= np.minimum(1, t / 0.002)
    return y * 0.6

def epiano(m, dur=1.6):
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    idx = 2.2 * np.exp(-t / 0.25) + 0.3
    y = np.sin(2 * np.pi * f * t + idx * np.sin(2 * np.pi * f * t)) * np.exp(-t / 0.7)
    y += 0.18 * np.sin(2 * np.pi * f * 14 * t) * np.exp(-t / 0.03)
    return y * np.minimum(1, t / 0.004) * 0.24

def bell(m, dur=2.5):
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    y = sum(a * np.sin(2 * np.pi * f * r * t) * np.exp(-t / d) for r, a, d in [(1, 1, 0.9), (2.76, 0.45, 0.35), (5.4, 0.22, 0.16), (8.9, 0.1, 0.08)])
    return y * np.minimum(1, t / 0.003) * 0.16

def pad(notes, dur):
    """a warm pad: three slightly detuned voices a note, soft in and out; returns stereo"""
    n = int(dur * SR); t = np.arange(n) / SR
    out = np.zeros((n, 2))
    for m in notes:
        f = hz(m)
        for det, pan in [(-0.006, 0.2), (0.0, 0.5), (0.007, 0.8)]:
            y = np.zeros(n)
            for k in range(1, 7):
                y += (1.0 / k ** 1.6) * np.sin(2 * np.pi * f * (1 + det) * k * t + k * pan * 3)
            out[:, 0] += y * (1 - pan); out[:, 1] += y * pan
    a = int(0.5 * SR); r = int(0.7 * SR)
    e = np.ones(n); e[:a] = np.linspace(0, 1, a) ** 1.5; e[-r:] *= np.linspace(1, 0, r) ** 1.5
    return out * e[:, None] * 0.048

def bass(m, dur):
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    y = np.sin(2 * np.pi * f * t) + 0.35 * np.sin(4 * np.pi * f * t) * np.exp(-t / 0.4) + 0.12 * np.sin(6 * np.pi * f * t) * np.exp(-t / 0.2)
    e = np.minimum(1, t / 0.012) * np.exp(-t / 1.4); r = int(0.05 * SR); e[-r:] *= np.linspace(1, 0, r)
    return y * e * 0.38

def kick():
    n = int(0.32 * SR); t = np.arange(n) / SR
    f = 46 + 90 * np.exp(-t / 0.035)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.11) * 0.88

def taiko(amp=1.0):
    n = int(0.9 * SR); t = np.arange(n) / SR
    f = 62 + 50 * np.exp(-t / 0.05)
    y = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.28)
    y += 0.3 * sosfilt(butter(2, [150, 900], 'bandpass', fs=SR, output='sos'), rng.standard_normal(n)) * np.exp(-t / 0.03)
    return y * 0.75 * amp

def rim():
    n = int(0.12 * SR); t = np.arange(n) / SR
    y = sosfilt(butter(2, [900, 4200], 'bandpass', fs=SR, output='sos'), rng.standard_normal(n)) * np.exp(-t / 0.022)
    return (y + 0.5 * np.sin(2 * np.pi * 420 * t) * np.exp(-t / 0.015)) * 0.27

def shaker(amp):
    n = int(0.09 * SR); t = np.arange(n) / SR
    return sosfilt(butter(2, 5500, 'highpass', fs=SR, output='sos'), rng.standard_normal(n)) * np.exp(-t / 0.02) * np.minimum(1, t / 0.004) * 0.09 * amp

def swell(dur=2.4):
    """a soft breath of noise rising into the next section"""
    n = int(dur * SR); t = np.arange(n) / SR
    y = sosfilt(butter(2, [1800, 9000], 'bandpass', fs=SR, output='sos'), rng.standard_normal(n))
    return y * (t / dur) ** 3 * 0.07

# chords: (bass note, pad notes)
CH = {
    'D':  (38, [57, 62, 66, 69, 76]),   # Dmaj9-ish
    'Bm': (35, [54, 59, 62, 66, 69]),
    'G':  (43, [55, 59, 62, 66, 71]),
    'A':  (45, [57, 61, 64, 69, 71]),
    'F#m': (42, [54, 57, 61, 64, 69]),
    'Em': (40, [55, 59, 62, 64, 67]),
}
_ = None
# melodies: one bar = 8 eighths (midi notes)
MEL = {
    'A1': [78, _, _, 76, 74, _, 71, _], 'A1b': [69, _, _, 71, 74, _, _, _],
    'A2': [76, _, _, 74, 71, _, 69, _], 'A2b': [66, _, 69, _, 71, _, _, _],
    'A3': [74, _, _, 71, 69, _, 67, _], 'A3b': [71, _, 74, _, 76, _, _, _],
    'A4': [76, _, 78, _, 81, _, _, 78], 'A4b': [76, _, _, _, _, _, 74, 76],
    'B1': [71, _, 74, _, 78, _, _, 76], 'B1b': [74, _, 71, _, 74, _, _, _],
    'B2': [67, _, 71, _, 74, _, _, 71], 'B2b': [69, _, 67, _, 71, _, _, _],
    'B3': [69, _, 74, _, 78, _, _, 81], 'B3b': [78, _, 76, _, 74, _, _, _],
    'B4': [76, _, _, 73, 76, _, 81, _], 'B4b': [78, _, 76, _, 76, _, _, _],
    'I1': [78, _, _, _, 74, _, 76, _], 'I2': [71, _, _, _, 69, _, 66, _],
    'END': [74, _, 78, _, 81, _, 86, _],
}
# a bar: (chord, layers, melody for each half bar, extra)
# layers: p pad, b bass, k kick, r rim, s shaker, e e-piano arpeggio, t taiko, f fast arpeggio, m koto melody, g bells doubling, w swell into the next bar
def song(kind):
    A = [('D', 'A1', 'A1b'), ('Bm', 'A2', 'A2b'), ('G', 'A3', 'A3b'), ('A', 'A4', 'A4b')]
    B = [('Bm', 'B1', 'B1b'), ('G', 'B2', 'B2b'), ('D', 'B3', 'B3b'), ('A', 'B4', 'B4b')]
    bars = []
    add = lambda prog, layers, n=None, last='': bars.extend((c, layers + (last if i == len(prog[:n]) - 1 else ''), a, b) for i, (c, a, b) in enumerate(prog[:n]))
    if kind == 'full':
        bars += [('D', 'pe', 'I1', None), ('Bm', 'pew', 'I2', None)]          # title
        add(A, 'pbksem', last='w')                                              # duel
        add(B, 'pbktsemr', last='w')                                            # boss
        add(A, 'pbksfmr', 2, last='')                                           # rapid
        add([A[2], A[3]], 'pbksem', last='w')                                   # the five modes
        add([A[0], A[1], A[2]], 'pbemg', last='w')                              # customize (lighter)
        add([B[0], B[1], B[2]], 'pbsemr', last='')                              # study
        add([A[3]], 'pbksem', last='')                                          # kana
        add([A[0], A[1]], 'pbksemr', last='w')                                  # daily
        add(B, 'pbktsemgr', last='w')                                           # progress
        add(A, 'pbksemgr', last='')                                             # friends, dictionary
        add([B[3]], 'pbktsemgr', last='w')                                      # menu
        bars += [('D', 'pbeg', 'END', None), ('D', 'p', None, None)]            # end card
    else:
        bars += [('D', 'pew', 'I1', None)]
        add(A, 'pbksemr', last='w')
        add(B, 'pbktsemgr', last='w')
        add([A[0], A[1]], 'pbksemgr', last='w')
        bars += [('D', 'pbeg', 'END', None), ('D', 'p', None, None)]
    return bars

def render(kind):
    bars = song(kind)
    n = len(bars) * BAR + SR * 3
    dry = np.zeros((n, 2)); wet = np.zeros((n, 2))
    def put(buf, y, at, pan=0.5, gain=1.0):
        at = int(at)
        if at >= n: return
        y = y[: n - at]
        if y.ndim == 1: buf[at:at + len(y), 0] += y * gain * np.cos(pan * np.pi / 2) * 1.2; buf[at:at + len(y), 1] += y * gain * np.sin(pan * np.pi / 2) * 1.2
        else: buf[at:at + len(y)] += y * gain
    K, R, T = kick(), rim(), taiko()
    for i, (ch, L, m1, m2) in enumerate(bars):
        t0 = i * BAR
        root, notes = CH[ch]
        if 'p' in L: p = pad(notes, 2.5 + 0.6); put(dry, p, t0, gain=0.9); put(wet, p, t0, gain=0.6)
        if 'b' in L:
            put(dry, bass(root, 1.2), t0); put(dry, bass(root, 0.5), t0 + 5 * E8, gain=0.8); put(dry, bass(root + 7, 0.55), t0 + 6 * E8, gain=0.7)
        if 'k' in L:
            for s in (0, 4): put(dry, K, t0 + s * E8)
            put(dry, K, t0 + 7 * E8, gain=0.55)
        if 'r' in L:
            for s in (2, 6): put(dry, R, t0 + s * E8, pan=0.6); put(wet, R, t0 + s * E8, gain=0.3)
        if 's' in L:
            for s in range(8): put(dry, shaker(1.0 if s % 2 else 0.55), t0 + s * E8, pan=0.3 if s % 2 else 0.7)
        if 't' in L:
            for s, g in ((0, 1.0), (3, 0.6), (6, 0.8)): put(dry, T, t0 + s * E8, gain=g * 0.8); put(wet, T, t0 + s * E8, gain=g * 0.25)
        if 'e' in L:
            arp = [notes[1], notes[2], notes[3], notes[2], notes[4], notes[3], notes[2], notes[3]]
            for s, m in enumerate(arp):
                y = epiano(m + 12 if 'f' not in L else m, 1.2); put(dry, y, t0 + s * E8, pan=0.35 + 0.3 * (s % 2), gain=0.75 if s % 2 else 1.0); put(wet, y, t0 + s * E8, gain=0.35)
        if 'f' in L:
            seq = [notes[2], notes[3], notes[4], notes[3]] * 4
            for s, m in enumerate(seq):
                y = pluck(m + 12, 0.5, 0.8); put(dry, y, t0 + s * (E8 // 2), pan=0.25 + 0.5 * ((s * 5) % 7) / 7, gain=0.32); put(wet, y, t0 + s * (E8 // 2), gain=0.12)
        for half, key in ((0, m1), (1, m2)):
            line = MEL.get(key) if key else None
            if not line: continue
            if half == 0 and m2 is None: steps = list(enumerate(line))                  # one line over the whole bar
            else: steps = [(s // 2 + half * 4, m) for s, m in enumerate(line) if s % 2 == 0] if False else None
            if steps is None:
                # two lines a bar: each is 8 sixteenth-pairs -> play as eighths over half a bar would rush it; play line 1 over the bar's first half
                steps = [(half * 4 + s * 0.5, m) for s, m in enumerate(line)]
            for s, m in steps:
                if m is None: continue
                y = pluck(m, 2.4); put(dry, y, t0 + s * E8, pan=0.45, gain=0.58 if 'm' in L or key in ('I1', 'I2', 'END') else 0.0)
                put(wet, y, t0 + s * E8, gain=0.34 if 'm' in L or key in ('I1', 'I2', 'END') else 0.0)
                if 'g' in L: b = bell(m + 12); put(dry, b, t0 + s * E8, pan=0.6, gain=0.55); put(wet, b, t0 + s * E8, gain=0.5)
        if 'w' in L: put(dry, swell(), t0 + BAR - int(2.4 * SR), gain=1.0); put(wet, swell(), t0 + BAR - int(2.4 * SR), gain=0.6)
    # the room
    ir_n = int(2.6 * SR); t = np.arange(ir_n) / SR
    ir = np.stack([rng.standard_normal(ir_n), rng.standard_normal(ir_n)], 1) * np.exp(-t / 0.55)[:, None]
    ir = sosfilt(butter(2, [250, 6500], 'bandpass', fs=SR, output='sos'), ir, axis=0); ir[: int(0.012 * SR)] *= 0.2
    ir /= np.sqrt((ir ** 2).sum(0)).mean()
    rev = np.stack([fftconvolve(wet[:, c], ir[:, c])[:n] for c in (0, 1)], 1)
    mix = dry + 0.42 * rev
    mix = sosfilt(butter(2, 28, 'highpass', fs=SR, output='sos'), mix, axis=0)
    air = sosfilt(butter(1, 3500, 'highpass', fs=SR, output='sos'), mix, axis=0)
    mix = mix + 0.55 * air                                   # a little air on top
    mix = np.tanh(mix * 1.1) / 1.1
    mix /= np.abs(mix).max() / 0.89
    end = len(bars) * BAR + int(1.2 * SR)
    mix = mix[:end]; f = int(1.6 * SR); mix[-f:] *= np.linspace(1, 0, f)[:, None] ** 1.5
    return mix

if __name__ == '__main__':
    import wave
    kind, out = sys.argv[1], sys.argv[2]
    m = render(kind)
    with wave.open(out, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((np.clip(m, -1, 1) * 32767).astype('<i2').tobytes())
    print(kind, len(m) / SR, 's', len(song(kind)), 'bars')
