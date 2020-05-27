#!/bin/bash
#
# Copyright (c) 2020 Markus Neifer
# Licensed under the MIT License. See LICENSE in the project root for license information.
#

docker run \
  --rm \
  -it \
  --name hello-docker-node \
  -v $PWD:/home/app \
  -w /home/app \
  -e "PORT=3000" -p 8080:3000  \
  -u node node:latest \
  /bin/bash

