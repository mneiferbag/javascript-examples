#!/bin/bash
#
# Copyright (c) 2020 Markus Neifer
# Licensed under the MIT License. See LICENSE in the project root for license information.
#

docker run \
  --rm \
  -it \
  --name mhn-node-tmp \
  -v $PWD:/home/app \
  -w /home/app \
  -p 8080:3000  \
  -u node \
  node:latest \
  /bin/bash

