import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000',
  color: '#fff',
  position: 'relative',
  padding: '0 20px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    height: '80vh',
    padding: '0 16px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '70vh',
    padding: '0 12px',
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
}));

const PortfolioGrid = styled(Grid)(({ theme }) => ({
  padding: '40px 0',
  [theme.breakpoints.down('md')]: {
    padding: '30px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px 0',
  },
}));

const ProjectCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '400px',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '250px',
    marginBottom: '16px',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '20px',
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}));

const ColabCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '300px',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '200px',
    marginBottom: '16px',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const ColabImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ColabOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '15px',
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem',
  },
}));

const SectionDivider = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '4px',
  backgroundColor: '#000',
  margin: '0 auto',
  marginBottom: '3rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.5rem',
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  marginTop: '8rem',
  marginBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '6rem',
    marginBottom: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '4rem',
    marginBottom: '2rem',
  },
}));

const projects = [
  { id: 1, title: 'Don\'t Reckon', category: 'Music Video', image: '/images/dont_reckon.jpg' },
  { id: 2, title: 'Top Boys', category: 'Music Video', image: '/images/top_boys.jpg' },
  { id: 3, title: 'Mr. Rambo', image: '/images/rambo.jpg' },
  { id: 4, title: 'Battak', image: '/images/battak.jpg' },
  { id: 5, title: 'Ben 10', image: '/images/ben-10.jpg' },
  { id: 6, title: 'Shiv Kailasho Ke Vasi', image: '/images/shiv-kailasho.jpg' },
  //{ id: 7, title: 'Heavy', image: '/images/heavy.jpg' },
  // Add more projects here
];

const colabs = [
  { id: 1, title: 'Sony Music India', image: '/images/sony_music1.jpg' },
  { id: 2, title: 'Warner Music India', image: '/images/warner_music.jpg' },
  { id: 3, title: 'Mass Appeal', image: '/images/mass_appeal.jpg' },
  { id: 4, title: 'T-Series', image: '/images/t-series.png' },
];

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle variant="h1">
              WITNESS-FILMS
            </HeroTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSubtitle variant="h4">
              Transforming Musical Visions into Visual Stories
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Container>
        <MainContent>
          <Box sx={{ textAlign: 'center' }}>
            <SectionTitle variant="h3">
              Featured Projects
            </SectionTitle>
            <SectionDivider />
          </Box>
          <PortfolioGrid container spacing={{ xs: 2, sm: 3, md: 3 }}>
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
                      <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        {project.title}
                      </Typography>
                    </ProjectOverlay>
                  </ProjectCard>
                </Link>
              </Grid>
            ))}
          </PortfolioGrid>

          {/* Featured Colabs Section */}
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <SectionTitle variant="h3">
              Featured Colabs
            </SectionTitle>
            <SectionDivider />
          </Box>
          <PortfolioGrid container spacing={{ xs: 2, sm: 3, md: 3 }}>
            {colabs.map((colab) => (
              <Grid item xs={12} sm={6} md={3} key={colab.id}>
                <ColabCard
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * colab.id }}
                >
                  <ColabImage src={colab.image} alt={colab.title} />
                  <ColabOverlay>
                    <Typography 
                      variant="h6" 
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' } }}
                    >
                      {colab.title}
                    </Typography>
                  </ColabOverlay>
                </ColabCard>
              </Grid>
            ))}
          </PortfolioGrid>
        </MainContent>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home; 