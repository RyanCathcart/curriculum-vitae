import '../../styles/App.css';
import portrait from '../../assets/cropped-self-ynp.png';
import portraitBackground from '../../assets/portrait-background.jpg';
import { Box } from '@mui/material';

export default function StyledPortrait() {
  const transformSpeed = '250ms';

  return (
    <Box
      className='styled-portrait'
      sx={{
        position: 'relative',
        maxWidth: { xs: '20rem', md: '30rem' },
        marginInline: 'auto',
      }}
    >
      <Box
        className='portrait-container'
        sx={{
          aspectRatio: '1 / 1',
          display: 'grid',
          alignItems: 'end',
          borderRadius: '100vw',
          overflow: 'hidden',
          transform: 'scale(0.9)',
          transition: { md: `transform ${transformSpeed} ease` },
          '&:hover': {
            transform: { md: 'scale(1)' },
          },
          '&:hover .portrait-img': {
            transform: { md: 'scale(1.2) translateY(-1rem)' },
          },
        }}
      >
        <Box
          component='img'
          className='portrait-bg'
          src={portraitBackground}
          alt=''
          draggable={false}
          sx={{
            position: 'absolute',
            inset: 'auto 0 0',
            width: '100%',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            marginInline: 'auto',
            objectFit: 'cover',
          }}
        />
        <Box
          component='img'
          className='portrait-img'
          src={portrait}
          alt='portrait'
          draggable={false}
          sx={{
            position: 'relative',
            left: '1rem',
            maxWidth: '60%',
            transform: { md: 'scale(1.2)' },
            transition: { md: `transform calc(${transformSpeed} * 1.2) ease` },
          }}
        />
      </Box>
    </Box>
  );
}
