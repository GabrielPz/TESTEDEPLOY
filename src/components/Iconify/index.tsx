import { Icon } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';
import { ForwardedRef, forwardRef } from 'react';

interface IconifyProps extends BoxProps {
  icon?: JSX.Element | string;
  width?: number;
}

const Iconify = forwardRef(function Iconify(
  { icon, width = 20, sx, ...other }: IconifyProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
});

export default Iconify;
