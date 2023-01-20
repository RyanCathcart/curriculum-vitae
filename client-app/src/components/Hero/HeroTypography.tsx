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
      align='left'
      color={color}
      noWrap={true}
      sx={{
        fontSize: {
          xs: '1.4rem',
          sm: '2rem',
          md: '3.75rem',
        },
      }}
    >
      {children}
    </Typography>
  );
}
