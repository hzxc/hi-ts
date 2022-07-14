import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
// import { PingPongServiceClient } from './gen/api/node/pingpong/v1/pingpong.client';
import { HelloServiceClient } from './gen/node/api/hello/v1/hello.client';
import { StatusServiceClient } from './gen/node/api/healthcheck/v1/healthcheck.client';
import { IntroRequest, IntroResponse } from './gen/node/api/hello/v1/hello';
const trans = new GrpcWebFetchTransport({
  // baseUrl: 'https://tmpl-go-vercel.vercel.app',
  baseUrl: 'http://localhost:3000',
  // format: 'text',
});

const client = new HelloServiceClient(trans);

client.intro({ name: 'foo' }, {}).then(
  (resp) => {
    console.log(resp);
    console.log(resp.status.code);
  },
  (err) => {
    console.log('err', err?.code);
  }
);
// hello
//   .then(
//     (response) => {
//       console.log(response.headers);
//     },
//     (rej) => {}
//   )
//   .catch((e) => {
//     console.log('catch', e);
//   });
// console.log(hello.status);

// hello.response
//   .then((resp) => {
//     console.log('index1 resp', resp.intro);
//   })
//   .catch((err) => {
//     console.log('index1 catch', err);
//   });
