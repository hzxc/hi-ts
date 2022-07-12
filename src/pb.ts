import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { PingPongServiceClient } from './gen/node/pingpong/v1/pingpong.client';

const client = new PingPongServiceClient(
  new GrpcWebFetchTransport({
    baseUrl: 'https://tmpl-go-vercel.vercel.app',
    format: 'text',
  })
);
const call = client.pingPong({ ping: 'ping' }, {});
call.response.then((resp) => {
  console.log(resp.pong);
});
