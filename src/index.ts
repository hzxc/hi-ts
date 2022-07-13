import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
// import { PingPongServiceClient } from './gen/api/node/pingpong/v1/pingpong.client';
import { HelloServiceClient } from './gen/node/api/hello/v1/hello.client';
import { StatusServiceClient } from './gen/node/api/healthcheck/v1/healthcheck.client';
const trans = new GrpcWebFetchTransport({
  // baseUrl: 'https://tmpl-go-vercel.vercel.app',
  baseUrl: 'http://localhost:3000',
  format: 'text',
});

const helloClient = new HelloServiceClient(trans);
const hello = helloClient.intro({ name: 'foo' }, {});

// hello.status
//   .then((resp) => {
//     console.log('code', resp.code);
//     console.log('detail', resp.detail);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

hello.response
  .then(
    (resp) => {
      console.log('resp', resp.intro);
    }
    // (rej) => {
    //   console.log('rej', rej);
    // }
  )
  .catch((err) => {
    console.log('catch', err);
  });

// const healthcheckClient = new StatusServiceClient(trans);
// const status = healthcheckClient.status({}, {});
// status.response
//   .then((resp) => {
//     console.log(resp.version);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
