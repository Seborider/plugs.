import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
};

export const SmallLight = (): JSX.Element => (
  <Typography size="s" color="light">
    small
  </Typography>
);

export const SmallDark = (): JSX.Element => (
  <Typography size="s" color="dark">
    small
  </Typography>
);
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
export const MediumRed = (): JSX.Element => (
  <Typography size="m" color="red">
    medium
  </Typography>
);
export const MediumGreen = (): JSX.Element => (
  <Typography size="m" color="green">
    medium
  </Typography>
);
export const Large = (): JSX.Element => <Typography size="l">Large</Typography>;
