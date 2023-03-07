import { Box, Typography } from '@mui/material';

interface SkillCardProps {
  image: string;
  imageAltText: string;
  text: string;
  yearLearned: number;
}

export default function SkillItem(props: SkillCardProps) {
  const { image, imageAltText, text, yearLearned } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        padding: { xs: '7px', md: '10px' },
      }}
    >
      <Box
        component='img'
        src={image}
        alt={imageAltText}
        draggable={false}
        sx={{ maxWidth: { xs: '3em', md: '3.7em' } }}
      />
      <Box sx={{ px: 2, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant='body1' color='white'>
          {text}
        </Typography>
        <Typography variant='subtitle2' color='gray'>
          {new Date().getFullYear() - yearLearned} yrs of experience
        </Typography>
      </Box>
    </Box>
  );
}
