#!/bin/bash

sudo pkill -f frontail; LOG_PORT=9000; docker container ls --no-trunc | tail -n +2 | for i in `awk '{print $1}'`; do LOG_PORT=$((LOG_PORT+1)); sudo frontail -d -p $LOG_PORT /var/lib/docker/containers/$i/$i-json.log; done