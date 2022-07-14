.PHONY:proto
proto:
	protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=service=true:./src \
    --js_out=import_style=commonjs,binary:./src \
	proto/worker.proto