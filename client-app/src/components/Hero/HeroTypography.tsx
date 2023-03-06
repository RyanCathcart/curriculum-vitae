import { Typography } from '@mui/material';

interface HeroTypographyProps {
  children?: any;
  color?: string;
}

export default function HeroTypography(props: HeroTypographyProps) {
  const { children, color } = props;

  return (
    <Typography
      variant='h1'
      display='inline'
      align='center'
      color={color}
      noWrap={true}
    >
      {children}
    </Typography>
  );
}
