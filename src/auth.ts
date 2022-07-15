import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { HelloServiceClient, StatusServiceClient } from './client';
import { AuthServiceClient } from './gen/ts/api/auth/v1/auth.client';
const trans = new GrpcWebFetchTransport({
  baseUrl: 'http://localhost:3000',
  //   format: 'binary',
});

const auth = new AuthServiceClient(trans);

auth.login({ username: 'admin', password: 'password' }, {}).then(
  (resp) => {
    console.log('typeof(resp):', typeof resp);
    console.log('response:', JSON.stringify(resp.response));
    console.log('status code:', resp.status.code);
  },
  (err) => {
    console.log('error code:', err?.code);
    console.log('error message', err?.message);
  }
);
