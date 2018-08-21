#!/bin/bash
. common.sh

set -e
bash -c "export NODE_ENV='prod'; node /applis/liste_courses/server/auto.js migrate"
checkerror "Echec de auto.js migrate"
pm2 start /applis/liste_courses/server/pm2/ecosystem.config.js --env production --no-daemon
checkerror "Echec de pm2 start"
bash -c "$@"