import { useTranslation } from 'next-i18next';
import { ControllerFieldState } from 'react-hook-form';

import { NamespaceKey } from '@translations';

export const useTranslatedInputError = (fieldState: ControllerFieldState) => {
  const { t } = useTranslation('forms');

  return fieldState.error?.message
    ? t(fieldState.error?.message as NamespaceKey<'forms'>)
    : undefined;
};
