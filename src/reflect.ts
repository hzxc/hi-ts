import { Reflection as Reflect } from '@abraham/reflection';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcOptions, ServiceInfo, UnaryCall } from '@protobuf-ts/runtime-rpc';
import { IntroRequest, IntroResponse } from './gen/ts/api/hello/v1/hello';
import * as ServiceClient from './client';

const trans = new GrpcWebFetchTransport({
  // baseUrl: 'https://tmpl-go-vercel.vercel.app',
  baseUrl: 'http://localhost:3000',
  // format: 'text',
});

const svcName = 'HelloServiceClient';
const methodName = 'intro';

// const client = new ServiceClient[svcName](trans);
// console.log(client['methodName']);
// client[methodName]?.({ name: 'foo' }, {}).then(
//   (resp) => {
//     console.log('hello', resp);
//     console.log('hello', resp.status.code);
//   },
//   (err) => {
//     console.log('hello err', err?.code);
//   }
// );

req('HelloServiceClient', 'intro');

function req(svcName: string, methodName: string) {
  const client: any = new (<any>ServiceClient)[svcName](trans);
  client[methodName]?.({ name: 'foo' }).then(
    (resp: any) => {
      console.log('hello', resp);
      console.log('hello', resp.status.code);
    },
    (err: any) => {
      console.log('hello err', err?.code);
    }
  );
}

// hello.intro({ name: 'foo' }, {}).then(
//   (resp) => {
//     console.log('hello', resp);
//     console.log('hello', resp.status.code);
//   },
//   (err) => {
//     console.log('hello err', err?.code);
//   }
// );

// const hello = new HelloServiceClient(trans);

// class MetaClass {}

// Reflect.defineMetadata('HelloService.intro', hello.intro, MetaClass);

// const intro = Reflect.getMetadata<(input: object) => any>('HelloService.intro', MetaClass);
// // intro?.({ name: 'foo' });
// console.log(intro);
