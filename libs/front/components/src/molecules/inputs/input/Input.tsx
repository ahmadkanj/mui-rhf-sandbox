import { TextField } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

import { useTranslatedInputError } from '../logic/useTranslatedInputError';

export interface InputProps<T> extends UseControllerProps<T> {
  label: string;
  loading?: boolean;
}

export function Input<T>(props: InputProps<T>): JSX.Element {
  const {
    field: { ref, value, onChange, ...otherFieldProps },
    fieldState,
  } = useController(props);

  const errorMessage = useTranslatedInputError(fieldState);

  return (
    <TextField
      label={props.label}
      variant="outlined"
      size="small"
      fullWidth
      error={fieldState.invalid}
      helperText={errorMessage}
      onChange={(e) => {
        onChange(e.target.value === '' ? undefined : e.target.value);
      }}
      value={value || ''}
      {...otherFieldProps}
      inputRef={ref}
    />
  );
}
