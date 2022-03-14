import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18NextConfig from '../../next-i18next.config';
import { getLocalizedStaticProps } from './getLocalizedStaticProps';

jest.mock('next-i18next/serverSideTranslations');

describe('getLocalizedStaticProps function', () => {
  it('should load en lang and common namespace by default', async () => {
    await getLocalizedStaticProps();

    expect(serverSideTranslations).toHaveBeenCalledWith(
      'en',
      ['common'],
      nextI18NextConfig
    );
  });

  it('should load common namespace by default', async () => {
    await getLocalizedStaticProps('en');

    expect(serverSideTranslations).toHaveBeenCalledWith(
      'en',
      ['common'],
      nextI18NextConfig
    );
  });

  it('should load common and signupPage namespace by default', async () => {
    await getLocalizedStaticProps('en', ['signupPage']);

    expect(serverSideTranslations).toHaveBeenCalledWith(
      'en',
      ['common', 'signupPage'],
      nextI18NextConfig
    );
  });
});
