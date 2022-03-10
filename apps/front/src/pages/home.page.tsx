import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React from 'react';

import { getLocalizedStaticProps } from '../logic/getLocalizedStaticProps';
import { LoggedUserHome } from '../templates/logged-user-home/LoggedUserHome';

const HomePage: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('pageTitle.home')}</title>
      </Head>
      <LoggedUserHome />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => getLocalizedStaticProps(locale);

export default HomePage;
