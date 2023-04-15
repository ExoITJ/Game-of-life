import { createAppStore } from '../../app/store';
import { rest } from 'msw';
import { setupServer } from '../../../node_modules/msw/lib/node';
import { login, logout } from './system-slice';
import { LocalStorageKeys } from '../../common/common-consts/index';

const handlers = [
  rest.get(`/login`, (req, res, ctx) => {
    return res(ctx.json(true), ctx.delay(150));
  }),
  rest.get(`/logout`, (req, res, ctx) => {
    return res(ctx.json(true), ctx.delay(150));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('System slice', () => {
  test('login', async () => {
    const initState = {
      system: {
        version: '1.0.0',
        isAuth: false,
      },
    };
    const store = createAppStore(initState);

    await store.dispatch(login({ name: 'test', password: 'test' }));

    expect(store.getState().system.isAuth).toBeTruthy();
    expect(localStorage.getItem(LocalStorageKeys.Authenticate)).toBe('true');
  });

  test('logout', async () => {
    const initState = {
      system: {
        version: '1.0.0',
        isAuth: true,
      },
    };
    const store = createAppStore(initState);

    await store.dispatch(logout());

    expect(store.getState().system.isAuth).toBeFalsy();
    expect(localStorage.getItem(LocalStorageKeys.Authenticate)).toBeNull();
  });
});
