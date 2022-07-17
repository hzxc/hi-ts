import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcError } from '@protobuf-ts/runtime-rpc';
// import { PingPongServiceClient } from './gen/api/node/pingpong/v1/pingpong.client';
import { HelloServiceClient, StatusServiceClient } from './client';
import { ProjectServiceClient } from './gen/ts/api/project/v1/project.client';
const trans = new GrpcWebFetchTransport({
  // baseUrl: 'https://tmpl-go-vercel.vercel.app',
  baseUrl: 'http://localhost:3000',
  // format: 'text',
});

const cli = new ProjectServiceClient(trans);
