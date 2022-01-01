import { Build } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

import { AppColor } from '@theme';

import { withThemeColor } from './Brand.styles';

export type BrandProps = {
  color: AppColor;
  centered?: boolean;
  withBottomMargin?: boolean;
  big?: boolean;
};

export const Brand: React.FC<BrandProps> = ({
  color,
  centered = false,
  withBottomMargin = false,
  big = false,
}) => {
  const withMainColor = withThemeColor(color);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent={centered ? 'center' : 'flex-start'}
        alignItems="flex-start"
        sx={{ mb: withBottomMargin ? 2 : 0 }}
      >
        <Grid item>
          <Build sx={withMainColor} />
        </Grid>
        <Grid item>
          <Typography
            variant={big ? 'h6' : 'h4'}
            sx={{
              flexGrow: 1,
              ...withMainColor,
            }}
          >
            Sandbox
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          item
          sx={{
            fontSize: 12,
            ...withThemeColor('darkCyan'),
          }}
        >
          nextjs / react-hook-form / testing-library
        </Grid>
      </Grid>
    </>
  );
};