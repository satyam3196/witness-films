import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ProjectCard = styled(motion.div)({
  position: 'relative',
  height: '400px',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ProjectOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '20px',
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: '#fff',
});

const projects = [
  { id: 1, title: 'Dard e dil', category: 'Music Video', image: '/images/dard-e-dil.jpg' },
  { id: 2, title: 'Battak', category: 'Music Video', image: '/images/battak.jpg' },
  { id: 3, title: 'Ben 10', category: 'Commercial', image: '/images/ben-10.jpg' },
  { id: 4, title: 'Heavy', category: 'Music Video', image: '/images/heavy.jpg' },
  { id: 5, title: 'Gud naal', category: 'Music Video', image: '/images/gud-naal.jpg' },
  { id: 6, title: 'G class', category: 'Music Video', image: '/images/g-class.jpg' },
  { id: 7, title: 'Diwali', category: 'Commercial', image: '/images/diwali.jpg' },
  { id: 8, title: 'Samajh rahi hai', category: 'Music Video', image: '/images/samajh-rahi-hai.jpg' },
  { id: 9, title: 'Fy24', category: 'Commercial', image: '/images/fy24.jpg' },
  { id: 10, title: 'Bairiya', category: 'Music Video', image: '/images/bairiya.jpg' },
  { id: 11, title: 'Mehendi', category: 'Music Video', image: '/images/mehendi.jpg' },
  { id: 12, title: 'Hukum ka ikka', category: 'Music Video', image: '/images/hukum-ka-ikka.jpg' },
  { id: 13, title: 'Kobe', category: 'Commercial', image: '/images/kobe.jpg' },
  { id: 14, title: 'Ambitions', category: 'Music Video', image: '/images/ambitions.jpg' },
  { id: 15, title: 'Road rash', category: 'Music Video', image: '/images/road-rash.jpg' },
  { id: 16, title: 'Tu hi hai', category: 'Music Video', image: '/images/tu-hi-hai.jpg' },
  { id: 17, title: 'Toke', category: 'Music Video', image: '/images/toke.jpg' },
  { id: 18, title: 'All in', category: 'Commercial', image: '/images/all-in.jpg' },
  { id: 19, title: 'Shiv kailasho', category: 'Music Video', image: '/images/shiv-kailasho.jpg' },
];

const Portfolio = () => {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === category);

  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Work
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            centered
          >
            <Tab label="All" value="all" />
            <Tab label="Music Videos" value="music video" />
            <Tab label="Commercials" value="commercial" />
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                <ProjectCard
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2">{project.category}</Typography>
                  </ProjectOverlay>
                </ProjectCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio; 