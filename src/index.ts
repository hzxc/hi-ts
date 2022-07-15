import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { UnaryCall } from '@protobuf-ts/runtime-rpc';
import { HelloService } from './gen/ts/api/hello/v1/hello';
const trans = new GrpcWebFetchTransport({
  // baseUrl: 'https://tmpl-go-vercel.vercel.app',
  baseUrl: 'http://localhost:3000',
  // format: 'text',
});

const method = HelloService.methods[0];
const options = trans.mergeOptions(HelloService.options);

const unary = trans.unary(method, { name: 'foo' }, options);
// console.log(unary.requestHeaders);

// let {response} = await unary.request
// console.log("got a small hat! " + response)

// unary.status
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// unary.then(
//   (value) => {
//     console.log(value);
//   },
//   (rej) => {
//     console.log(rej);
//     console.log('status', unary.status);
//   }
// );

// console.log('unary.headers', unary.headers);
// unary.status
//   .then((resp) => {
//     console.log('index', resp);
//   })
//   .catch((reason) => {
//     console.log('index', reason);
//   });
