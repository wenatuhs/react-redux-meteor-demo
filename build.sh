#!/usr/bin/env bash
source settings

npm i
meteor build --architecture=os.linux.x86_64  ../
