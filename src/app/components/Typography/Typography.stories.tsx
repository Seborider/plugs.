import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
};

export const Small = (): JSX.Element => <Typography size="s">small</Typography>;
export const MediumLight = (): JSX.Element => (
  <Typography size="m" color="light">
    medium
  </Typography>
);
export const MediumDark = (): JSX.Element => (
  <Typography size="m" color="dark">
    medium
  </Typography>
);
export const Large = (): JSX.Element => <Typography size="l">Large</Typography>;
