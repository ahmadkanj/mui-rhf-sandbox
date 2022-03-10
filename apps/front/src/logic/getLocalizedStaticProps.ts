import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18NextConfig from '../../next-i18next.config';

export const getLocalizedStaticProps = async (
  locale = 'en',
  namespaces: Array<string> = []
) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common', ...namespaces],
      nextI18NextConfig
    )),
  },
});
