import '../../styles/App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import SkillCard from './SkillCard';
import cSharpIcon from '../../assets/skills/csharp.png';
import dotNetIcon from '../../assets/skills/dotnet.png';
import jsIcon from '../../assets/skills/javascript.png';
import tsIcon from '../../assets/skills/typescript.png';
import reactIcon from '../../assets/skills/react.png';
import muiIcon from '../../assets/skills/materialui.png';
import suiIcon from '../../assets/skills/semanticui.png';
import javaIcon from '../../assets/skills/java.png';
import jfxIcon from '../../assets/skills/javafx.png';
import pythonIcon from '../../assets/skills/python.png';
import pgsqlIcon from '../../assets/skills/postgresql.png';
import { useInView } from 'react-intersection-observer';

const cards = [
  { id: 1, image: cSharpIcon, imageAltText: 'C Sharp', text: 'C#' },
  {
    id: 2,
    image: dotNetIcon,
    imageAltText: 'ASP.NET Core',
    text: 'ASP.NET Core',
  },
  { id: 3, image: jsIcon, imageAltText: 'JavaScript', text: 'JavaScript' },
  { id: 4, image: tsIcon, imageAltText: 'TypeScript', text: 'TypeScript' },
  { id: 5, image: reactIcon, imageAltText: 'React', text: 'React' },
  { id: 6, image: muiIcon, imageAltText: 'Material UI', text: 'Material UI' },
  { id: 7, image: suiIcon, imageAltText: 'Semantic UI', text: 'Semantic UI' },
  { id: 8, image: javaIcon, imageAltText: 'Java', text: 'Java' },
  { id: 9, image: jfxIcon, imageAltText: 'JavaFX', text: 'JavaFX' },
  { id: 10, image: pythonIcon, imageAltText: 'Python', text: 'Python' },
  { id: 11, image: pgsqlIcon, imageAltText: 'PostgreSQL', text: 'PostgreSQL' },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  return (
    <Box
      className='Skills'
      sx={{
        pt: 8,
        pb: { xs: 12, md: 32 },
        background:
          'linear-gradient(5deg, rgba(0,38,46,1) -20%, rgba(15,18,26,1) 82%)',
      }}
    >
      <Container
        maxWidth='lg'
        ref={ref}
        sx={{
          opacity: inView ? 1 : 0,
          translate: inView ? '0px' : '100px',
          filter: inView ? 'none' : 'blur(3px)',
          transition: '1s ease-in-out',
        }}
      >
        <Typography
          variant='h3'
          color='white'
          align='center'
          sx={{ pb: 8, fontWeight: 'bold' }}
        >
          SKILLS
        </Typography>
        <Grid container alignItems='stretch' spacing={{ xs: 1, md: 3 }}>
          {cards.map((card) => (
            <SkillCard
              key={card.id}
              image={card.image}
              imageAltText={card.imageAltText}
              text={card.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
