import { Typography } from '@mui/material';

interface BioTypographyProps {
  children?: any;
  color?: string;
}

export default function BioTypography(props: BioTypographyProps) {
  const { children, color } = props;

  return (
    <Typography
      variant='body1'
      color={color}
      align='center'
      sx={{
        fontSize: {
          xs: '1rem',
          md: '1.3rem',
        },
      }}
    >
      {children}
    </Typography>
  );
}
