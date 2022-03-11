import { ZodIssueOptionalMessage } from 'zod';

import { formsKeys } from '@translations';

type ErrorMapCtx = {
  defaultError: string;
  data: unknown;
};

type ErrorMapResult = {
  message: string;
};

export const customErrorMap = (
  issue: ZodIssueOptionalMessage,
  ctx: ErrorMapCtx
): ErrorMapResult => {
  if (issue.message && formsKeys.includes(issue.message)) {
    return {
      message: issue.message,
    };
  }

  if (ctx.defaultError && formsKeys.includes(ctx.defaultError)) {
    return {
      message: ctx.defaultError,
    };
  }

  if (issue.code && formsKeys.includes(issue.code)) {
    return {
      message: issue.code,
    };
  }

  return { message: 'genericFormError' };
};
