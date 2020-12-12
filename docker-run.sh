#!/bin/bash
#
# Copyright (c) 2020 Markus Neifer
# Licensed under the MIT License. See LICENSE file for license information.
#

docker run \
  --name hello-nestjs \
  -it \
  -p 8080:3000 \
  -v "$PWD":/home/app \
  -w /home/app \
  mneifercons-hello-nestjs

