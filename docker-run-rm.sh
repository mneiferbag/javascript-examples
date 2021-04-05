#!/bin/bash
#
# Copyright (c) 2020-2021 Markus Neifer
# Licensed under the MIT License. See LICENSE file for license information.
#

docker run \
  --rm \
  -it \
  --name mneifercons-node-tmp \
  -v $PWD:/home/app \
  -w /home/app \
  -p 8080:3000  \
  -u node \
  node:latest \
  /bin/bash

