import '../../styles/App.css';
import { Box, Grid, Typography } from '@mui/material';
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

const cards = [
  { id: 1, image: cSharpIcon, imageAltText: 'C Sharp', text: 'C#' },
  { id: 2, image: dotNetIcon, imageAltText: 'ASP.NET Core', text: 'ASP.NET Core' },
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
  return (
    <Box sx={{ p: 8 }}>
      <Typography variant='h2' color='white' gutterBottom sx={{ fontWeight: 'bold' }}>
        SKILLS
      </Typography>
      <Grid container alignItems='stretch' spacing={{ xs: 2, md: 3 }}>
        {cards.map((card) => (
          <SkillCard key={card.id} image={card.image} imageAltText={card.imageAltText} text={card.text} />
        ))}
      </Grid>
    </Box>
  );
}
