import { mocked } from 'jest-mock';
import { useTranslation } from 'next-i18next';

type UseTranslationSimplifiedType = (namespace: string) => {
  t: (key: string) => string;
};

export const mockUseTranslation = () => {
  mocked(
    useTranslation as unknown as UseTranslationSimplifiedType
  ).mockImplementation((namespace) => ({
    t: jest
      .fn()
      .mockImplementation((key) =>
        Array.isArray(namespace) ? `${key}` : `${namespace}:${key}`
      ),
  }));
};
