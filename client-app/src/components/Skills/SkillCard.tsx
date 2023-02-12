import { Box, Typography } from '@mui/material';
import { customTheme } from '../../styles/customTheme';

interface SkillCardProps {
  image: string;
  imageAltText: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  const { image, imageAltText, text } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${customTheme.palette.secondary.main}`,
        borderRadius: '10px',
        padding: { xs: '7px', md: '10px' },
        overflow: 'hidden',

        boxShadow: `0 0 7px 0 ${customTheme.palette.secondary.main}`,
      }}
    >
      <Box
        component='img'
        src={image}
        alt={imageAltText}
        draggable={false}
        sx={{ maxWidth: { xs: '3em', md: '6em' } }}
      />
      <Typography
        variant='subtitle2'
        align='center'
        color='white'
        sx={{
          flexGrow: 1,
          fontSize: {
            xs: '0.8rem',
            sm: '1rem',
            md: '1.2rem',
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
