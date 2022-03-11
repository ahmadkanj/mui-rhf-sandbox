import * as zod from 'zod';

import { NamespaceKey } from '@translations';

import { useSignupFormRefinements } from './useSignupFormRefinements';

export type FormModel = {
  userName?: string;
  firstName: string;
  lastName: string;
  password: string;
  idRole: number;
  idSkills: number[];
};

export const useSignupFormSchema = () => {
  const { skillsAvailabilityForRole, skillsCount } = useSignupFormRefinements();

  const roleRequired: NamespaceKey<'forms'> = 'roleRequired';
  const firstNameRequired: NamespaceKey<'forms'> = 'firstNameRequired';
  const lastNameRequired: NamespaceKey<'forms'> = 'lastNameRequired';
  const passwordRequired: NamespaceKey<'forms'> = 'passwordRequired';

  const schema: zod.ZodSchema<FormModel> = zod
    .object({
      userName: zod.string().optional(),
      firstName: zod.string().min(1, firstNameRequired),
      lastName: zod.string().min(1, lastNameRequired),
      password: zod.string().min(1, passwordRequired),
      idRole: zod
        .number({
          required_error: roleRequired,
        })
        .gte(0, roleRequired),
      idSkills: zod
        .preprocess((v) => parseInt(zod.string().parse(v), 10), zod.number())
        .array(),
    })
    .superRefine(skillsAvailabilityForRole)
    .superRefine(skillsCount);

  return schema;
};
