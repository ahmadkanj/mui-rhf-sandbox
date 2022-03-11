import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Namespace } from 'react-i18next';

import nextI18NextConfig from '../../next-i18next.config';

export const getLocalizedStaticProps = async (
  locale = 'en',
  namespaces: Array<Namespace> = []
) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common', ...(namespaces as Array<string>)],
      nextI18NextConfig
    )),
  },
});
