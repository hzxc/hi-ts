import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcError } from '@protobuf-ts/runtime-rpc';
// import { PingPongServiceClient } from './gen/api/node/pingpong/v1/pingpong.client';
import { HelloServiceClient, StatusServiceClient } from './client';
const trans = new GrpcWebFetchTransport({
  // baseUrl: 'https://tmpl-go-vercel.vercel.app',
  baseUrl: 'http://localhost:3000',
  // format: 'text',
});

const hc = new HelloServiceClient(trans);
const sc = new StatusServiceClient(trans);

hc.intro({ name: 'foo' }, {}).then(
  (resp) => {
    console.log('response:', JSON.stringify(resp.response));
    console.log('status code:', resp.status.code);
  },
  (err) => {
    console.log('error code:', err?.code);
    console.log('error message', err?.message);
  }
);

hc.me({ name: 'foo' }, {}).then(
  (resp) => {
    console.log('response:', resp.response);
    console.log('status code:', resp.status.code);
  },
  (err) => {
    console.log('error code:', err?.code);
    console.log('error message', err?.message);
  }
);

// const me = hc.call
// me.({}).then(

// )

// sc.status({ name: 'foo' }, {}).then(
//   (resp) => {
//     console.log('status', typeof resp.response);
//     console.log('status', resp.response);
//     console.log('status', resp.status.code);
//   },
//   (err) => {
//     console.log('status err', err?.code);
//     console.log(typeof err);
//     console.log(err);
//   }
// );
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
