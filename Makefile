# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/gen/node"

.PHONY:proto
proto:
	protoc \
	--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
	--js_out="import_style=commonjs,binary:${OUT_DIR}" \
	--ts_out="${OUT_DIR}" \
	./protos/hello.proto

.PHONY:proto-node
proto-node:
	protoc \
	--go_out=plugins=grpc:./server \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=service=true:./src \
    --js_out=import_style=commonjs,binary:./src \
	./protos/hello.proto