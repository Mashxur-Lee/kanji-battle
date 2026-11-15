#!/bin/bash
# scripts/ci-shots.sh wait [sha]                     → waits for the Check run of a commit, prints test totals / failures
# scripts/ci-shots.sh shots <scenario.js> [sizes] [lang] → runs a screenshot scenario on the pushed branch, fetches the
#   pictures from the ci-shots branch into $OUT/shots (OUT defaults to /tmp). Needs the gh CLI, logged in.
R=${REPO:-Mashxur-Lee/kanji-battle}
[ -n "$2" ] && [ -f "$2" ] && set -- "$1" "$(realpath "$2")" "${@:3}"
cd "$(dirname "$0")/.."
waitrun() { # $1 = run id
  for i in $(seq 1 90); do st=$(gh run view $1 -R $R --json status,conclusion --jq '.status+" "+.conclusion'); [[ $st == completed* ]] && break; timeout 15 tail -f /dev/null; done
  echo "run $1: $st"
  JID=$(gh api repos/$R/actions/runs/$1/jobs --jq '.jobs[0].id')
  gh api repos/$R/actions/jobs/$JID/logs > ${OUT:-/tmp}/ci-log.txt 2>&1
  grep -E "error TS|# (tests|pass|fail)|^.{29}not ok|Error:|✘|shots-log|: no issues|: .*\|" ${OUT:-/tmp}/ci-log.txt | sed 's/^.\{29\}//' | grep -v "^\s*$" | head -60
}
if [ "$1" = wait ]; then
  sha=${2:-$(git rev-parse HEAD)}
  for i in $(seq 1 40); do id=$(gh run list -R $R --workflow check.yml --commit $sha --event push --json databaseId --jq '.[0].databaseId'); [ -n "$id" ] && break; timeout 6 tail -f /dev/null; done
  waitrun $id
elif [ "$1" = shots ]; then
  sizes=${3:-pc:1366x768,phone:390x844}; lang=${4:-en}
  br=$(git branch --show-current); timeout 15 tail -f /dev/null # (right after a push the dispatch can fail to start)
  gh workflow run check.yml -R $R --ref $br -f scenario="$(base64 -w0 $2)" -f sizes="$sizes" -f lang="$lang" || exit 1
  timeout 8 tail -f /dev/null
  id=$(gh run list -R $R --workflow check.yml --event workflow_dispatch --limit 1 --json databaseId --jq '.[0].databaseId')
  waitrun $id
  rm -rf ${OUT:-/tmp}/shots && mkdir -p ${OUT:-/tmp}/shots
  git fetch -q -f origin +ci-shots:refs/remotes/origin/ci-shots && git archive refs/remotes/origin/ci-shots | tar -x -C ${OUT:-/tmp}/shots && ls ${OUT:-/tmp}/shots
fi
