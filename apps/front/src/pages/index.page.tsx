import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { getLocalizedStaticProps } from '../logic/getLocalizedStaticProps';
import { Signup } from '../templates/signup-form/SignupForm';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('pageTitle.signup')}</title>
      </Head>
      <Signup />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => getLocalizedStaticProps(locale, ['forms']);

export default Home;
