//import { DevTool } from '@hookform/devtools';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid } from '@mui/material';
import React from 'react';

import { Input, PasswordInput } from '@components/molecules';
import { FullpageBox } from '@components/organisms';

import { useSignupForm } from './hooks/useSignupForm';
import { Roles, Skills } from './organisms';

export const Signup: React.FC = () => {
  const { onSubmit, control, isLoading } = useSignupForm();

  return (
    <FullpageBox>
      <Box
        sx={{
          width: '100%',
          padding: {
            md: 4,
            xs: 1,
          },
        }}
        component="form"
        onSubmit={onSubmit}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            <Input control={control} name="userName" label="Username" />
          </Grid>
          <Grid item>
            <Input control={control} name="firstName" label="Firstname" />
          </Grid>
          <Grid item>
            <Input control={control} name="lastName" label="Lastname" />
          </Grid>
          <Grid item>
            <PasswordInput control={control} name="password" label="Password" />
          </Grid>
          <Grid item>
            <Roles control={control} />
          </Grid>
          <Grid item>
            <Skills control={control} />
          </Grid>
          <Grid
            item
            sx={{
              marginTop: 3,
              textAlign: 'center',
            }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoading}
            >
              Signup
            </LoadingButton>
          </Grid>
        </Grid>
        {/* <DevTool control={control} /> */}
      </Box>
    </FullpageBox>
  );
};
