#!/bin/bash
#
# Copyright (c) 2020 Markus Neifer
# Licensed under the MIT License. See LICENSE file for license information.
#

docker build \
  -f Dockerfile \
  -t mneifercons-hello-nestjs \
  .
