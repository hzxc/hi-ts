import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
// import { PingPongServiceClient } from './gen/api/node/pingpong/v1/pingpong.client';
import { HelloServiceClient } from './client';
import { RpcOptions, UnaryCall } from '@protobuf-ts/runtime-rpc';
const trans = new GrpcWebFetchTransport({
  baseUrl: 'http://localhost:3000',
  interceptors: [
    {
      // adds auth header to unary requests
      interceptUnary(next, method, input, options: RpcOptions): UnaryCall {
        if (!options.meta) {
          options.meta = {};
        }
        options.meta['Authorization'] = 'your bearer token';
        return next(method, input, options);
      },
    },
  ],
});

const hello = new HelloServiceClient(trans);

hello.intro({ name: 'foo' }, {}).then(
  (resp) => {
    console.log('hello', resp);
    console.log('hello', resp.status.code);
  },
  (err) => {
    console.log('hello err', err?.code);
  }
);
