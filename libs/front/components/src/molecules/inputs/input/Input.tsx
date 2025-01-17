import { TextField } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

import { t } from '@translations';

export interface InputProps<T> extends UseControllerProps<T> {
  label: string;
  loading?: boolean;
}

export function Input<T>(props: InputProps<T>): JSX.Element {
  const {
    field: { ref, value, onChange, ...otherFieldProps },
    fieldState,
  } = useController(props);

  return (
    <TextField
      label={props.label}
      variant="outlined"
      size="small"
      fullWidth
      error={fieldState.invalid}
      helperText={t(fieldState.error?.message)}
      onChange={(e) => {
        onChange(e.target.value === '' ? undefined : e.target.value);
      }}
      value={value || ''}
      // inputProps={{ 'aria-label': props.label }}
      // InputProps={{
      //   endAdornment: props.loading && (
      //     <InputAdornment position="end">
      //       <CircularProgress size={18} />
      //     </InputAdornment>
      //   ),
      // }}
      {...otherFieldProps}
      inputRef={ref}
    />
  );
}
