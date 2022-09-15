#!/bin/bash

set -e

docker build -t posix-mq-repro:latest .
docker run --rm posix-mq-repro:latest
