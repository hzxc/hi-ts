import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
// import { PingPongServiceClient } from './gen/api/node/pingpong/v1/pingpong.client';
import { HelloServiceClient } from './gen/node/api/hello/v1/hello.client';

const client = new HelloServiceClient(
  new GrpcWebFetchTransport({
    baseUrl: 'https://tmpl-go-vercel.vercel.app',
    format: 'text',
  })
);
const call = client.intro({ name: 'foo' }, {});
call.response.then((resp) => {
  console.log(resp.intro);
});
