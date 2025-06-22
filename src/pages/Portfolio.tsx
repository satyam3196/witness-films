import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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

const PortfolioSection = styled(Box)({
  padding: '100px 0',
  minHeight: 'calc(100vh - 200px)',
});

const projects = [
  { id: 1, title: 'Don\'t Reckon', category: 'Music Video', image: '/images/dont_reckon.jpg' },
  { id: 2, title: 'Top Boys', category: 'Music Video', image: '/images/top_boys.jpg' },
  { id: 3, title: 'Mr. Rambo', category: 'Music Video', image: '/images/rambo.jpg' },
  { id: 4, title: 'Battak', category: 'Music Video', image: '/images/battak.jpg' },
  { id: 5, title: 'Ben 10', category: 'Music Video', image: '/images/ben-10.jpg' },
  { id: 6, title: 'Shiv Kailasho Ke Vasi', category: 'Music Video', image: '/images/shiv-kailasho.jpg' },
  { id: 7, title: 'Heavy', category: 'Music Video', image: '/images/heavy.jpg' },
  { id: 8, title: 'One Time', category: 'Music Video', image: '/images/one-time.jpg' }, 
  { id: 9, title: 'Dard e dil', category: 'Music Video', image: '/images/dard-e-dil.jpg' },
  { id: 10, title: 'Gud naal', category: 'Music Video', image: '/images/gud-naal.jpg' },
  { id: 11, title: 'G class', category: 'Music Video', image: '/images/g-class.jpg' },
  { id: 12, title: 'Diwali', category: 'Music Video', image: '/images/diwali.jpg' },
  { id: 13, title: 'All in', category: 'Music Video', image: '/images/all-in.jpg' },
  { id: 14, title: 'Samajh rahi hai', category: 'Music Video', image: '/images/samajh-rahi-hai.jpg' },
  { id: 15, title: 'Fy24', category: 'Music Video', image: '/images/fy24.jpg' },
  { id: 16, title: 'Bairiya', category: 'Music Video', image: '/images/bairiya.jpg' },
  { id: 17, title: 'Mehndi', category: 'Music Video', image: '/images/mehendi.jpg' },
  { id: 18, title: 'Hukum ka ikka', category: 'Music Video', image: '/images/hukum-ka-ikka.jpg' },
  { id: 19, title: 'Kobe', category: 'Music Video', image: '/images/kobe.jpg' },
  { id: 20, title: 'Ambitions', category: 'Music Video', image: '/images/ambitions.jpg' },
  { id: 21, title: 'Road rash', category: 'Music Video', image: '/images/road-rash.jpg' },
  { id: 22, title: 'Tu hi hai', category: 'Music Video', image: '/images/tu-hi-hai.jpg' },
  { id: 23, title: 'Toke', category: 'Music Video', image: '/images/toke.jpg' },
  
];

const Portfolio = () => {
  return (
    <Box>
      <PortfolioSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Our Work
          </Typography>

          <Grid container spacing={3}>
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
                      <Typography variant="body2">{project.category}</Typography>
                    </ProjectOverlay>
                  </ProjectCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PortfolioSection>
      <Footer />
    </Box>
  );
};

export default Portfolio; 