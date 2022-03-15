import "../../styles/App.css";
import { AppBar, Card, CardContent, Grid, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel from "./TabPanel";
import SkillCard from "./SkillCard";
import cSharpIcon from "../../assets/skills/csharp.png";
import dotNetIcon from "../../assets/skills/dotnet.png";
import jsIcon from "../../assets/skills/javascript.png";
import tsIcon from "../../assets/skills/typescript.png";
import reactIcon from "../../assets/skills/react.png";
import muiIcon from "../../assets/skills/materialui.png";
import suiIcon from "../../assets/skills/semanticui.png";
import javaIcon from "../../assets/skills/java.png";
import jfxIcon from "../../assets/skills/javafx.png";
import pythonIcon from "../../assets/skills/python.png";

const cards = [
  { id: 1, image: cSharpIcon, text: "C#" },
  { id: 2, image: dotNetIcon, text: "ASP.NET" },
  { id: 3, image: jsIcon, text: "JavaScript" },
  { id: 4, image: tsIcon, text: "TypeScript" },
  { id: 5, image: reactIcon, text: "React" },
  { id: 6, image: muiIcon, text: "Material UI" },
  { id: 7, image: suiIcon, text: "Semantic UI" },
  { id: 8, image: javaIcon, text: "Java" },
  { id: 9, image: jfxIcon, text: "JavaFX" },
  { id: 10, image: pythonIcon, text: "Python" },
];

export default function About() {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          Skills
        </Typography>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="inherit">
            <Tab label="Skills" />
            <Tab label="Hobbies" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {cards.map((card) => (
              <SkillCard key={card.id} image={card.image} text={card.text} />
            ))}
          </Grid>
          
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </CardContent>
    </Card>
  );
}
