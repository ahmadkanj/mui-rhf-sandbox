require('@testing-library/jest-dom/extend-expect');
const { matchers } = require('@emotion/jest');

jest.mock('next-i18next');
jest.mock('next/router');

const { useTranslation } = require('next-i18next');

const {
  mswServer,
} = require('./../../libs/front/components/src/test/msw/mswServer');

beforeAll(() => {
  useTranslation.mockImplementation((namespace) => ({
    t: jest
      .fn()
      .mockImplementation((key) =>
        Array.isArray(namespace) ? `${key}` : `${namespace}:${key}`
      ),
  }));
  mswServer.listen({ onUnhandledRequest: 'error' });
});
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

expect.extend(matchers);
