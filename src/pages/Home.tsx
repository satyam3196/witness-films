import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000',
  color: '#fff',
  position: 'relative',
});

const PortfolioGrid = styled(Grid)({
  padding: '40px 0',
});

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
  { id: 1, title: 'Dard e dil', image: '/images/dard-e-dil.jpg' },
  { id: 2, title: 'Battak', image: '/images/battak.jpg' },
  { id: 3, title: 'Ben 10', image: '/images/ben-10.jpg' },
  { id: 4, title: 'Heavy', image: '/images/heavy.jpg' },
  // Add more projects here
];

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <Container>
          <Typography variant="h1" component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WITNESS FILMS
          </Typography>
          <Typography variant="h4" component={motion.h4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Musical Visions into Visual Stories
          </Typography>
        </Container>
      </HeroSection>

      <Container>
        <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
            Featured Projects
          </Typography>
          <Box sx={{ width: '60px', height: '4px', backgroundColor: '#000', margin: '0 auto', mb: 3 }} />
        </Box>
        <PortfolioGrid container spacing={3}>
          {projects.map((project) => (
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
                  </ProjectOverlay>
                </ProjectCard>
              </Link>
            </Grid>
          ))}
        </PortfolioGrid>
        {/* <Box sx={{ textAlign: 'center', mt: 4, mb: 8 }}>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#000',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              View All Projects in Our Portfolio →
            </Typography>
          </Link>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Home; 