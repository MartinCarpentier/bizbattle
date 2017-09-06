#!/bin/bash

echo $(pwd)

docker run --rm -it \
    -u $(id -u):$(id -g) \
    -v $(pwd):/app \
    -w /app \
    -p 4200:4200 \
    node:alpine $@
