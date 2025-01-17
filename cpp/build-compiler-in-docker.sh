#!/bin/bash

# Run build-compiler.sh in docker and copy the files to the correct location in the project.

set -e

# Command line argument to override docker image. Default is `clang-wasm`.
image=${1:-clang-wasm:latest}

# Run script inside docker.
docker run --rm -w /app/ -v $(pwd):/app/ $image bash -c "./build-compiler.sh"

# Copy results to where they're needed.
mkdir -p ../public/wasm

cp build/bin/clang.mjs ../components/WasmCompiler/wasm/clang.mjs
cp build/bin/clang.wasm ../public/wasm/clang.wasm

cp build/bin/wasm-ld.mjs ../components/WasmCompiler/wasm/wasm-ld.mjs
cp build/bin/lld.wasm ../public/wasm/lld.wasm

cp build/bin/onlyincludes.data ../public/wasm/onlyincludes.data
cp build/bin/onlylibs.data ../public/wasm/onlylibs.data

cp build/bin/constants.js ../components/WasmCompiler/wasm/constants.js

cp build/bin/toy/*.js ../components/Toy/wasm/
cp build/bin/toy/*.wasm ../public/wasm/
