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
  { image: cSharpIcon, imageAltText: 'C Sharp', text: 'C#' },
  { image: dotNetIcon, imageAltText: 'ASP.NET Core', text: 'ASP.NET Core' },
  { image: jsIcon, imageAltText: 'JavaScript', text: 'JavaScript' },
  { image: tsIcon, imageAltText: 'TypeScript', text: 'TypeScript' },
  { image: reactIcon, imageAltText: 'React', text: 'React' },
  { image: muiIcon, imageAltText: 'Material UI', text: 'Material UI' },
  { image: suiIcon, imageAltText: 'Semantic UI', text: 'Semantic UI' },
  { image: pythonIcon, imageAltText: 'Python', text: 'Python' },
  { image: javaIcon, imageAltText: 'Java', text: 'Java' },
  { image: jfxIcon, imageAltText: 'JavaFX', text: 'JavaFX' },
  { image: pgsqlIcon, imageAltText: 'PostgreSQL', text: 'PostgreSQL' },
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
        pb: { xs: 20, md: 32 },
        background:
          'linear-gradient(5deg, hsl(194, 70%, 12%) -80%, rgba(15, 18, 26, 1) 80%)',
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
          variant='h2'
          color='secondary'
          align='center'
          sx={{ pb: 1, fontWeight: 'bold' }}
        >
          SKILLS
        </Typography>
        <Typography
          variant='subtitle1'
          color='secondary'
          align='center'
          sx={{ pb: { xs: 6, md: 10 } }}
        >
          <Box>
            These are the skills I have developed while dedicating myself to
            becoming a full-stack developer:
          </Box>
        </Typography>
        <Grid container alignItems='stretch' spacing={{ xs: 2, md: 3 }}>
          {cards.map((card) => (
            <Grid item xs={6} sm={4} md={4} key={card.text}>
              <SkillCard
                image={card.image}
                imageAltText={card.imageAltText}
                text={card.text}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
