import React, { useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const Section = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  [theme.breakpoints.down('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const AboutContent = styled(Typography)(({ theme }) => ({
  marginBottom: '40px',
  fontSize: '1.2rem',
  lineHeight: 1.8,
  textAlign: 'justify',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '20px',
    textAlign: 'left',
  },
}));

const CollaborationSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: '60px 0',
  [theme.breakpoints.down('md')]: {
    padding: '50px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '40px 0',
  },
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  padding: '24px',
  backgroundColor: 'white',
  borderRadius: '8px',
  height: '100%',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
    marginBottom: '16px',
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
}));

const ColabCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '180px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '150px',
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

const ArtistItem = styled(Typography)(({ theme }) => ({
  padding: '12px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#e9ecef',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
    fontSize: '0.95rem',
  },
}));

const About = () => {
  const collaborations = [
    { id: 1, title: 'Sony Music India', image: '/images/sony_music.jpg' },
    { id: 2, title: 'Universal Music Group', image: '/images/universal_music.jpg' },
    { id: 3, title: 'Warner Music India', image: '/images/warner_music.jpg' },
    { id: 4, title: 'Mass Appeal', image: '/images/mass_appeal.jpg' },
    { id: 5, title: 'Desi Trill', image: '/images/desi_trill.jpg' },
    { id: 6, title: 'Zerodha', image: '/images/zerodha.png' },
  ];

  const artists = [
    'Yung Sammy',
    'Panther',
    'Raga',
    'Aditya Bhardwaj',
    'Flyboy',
    'Jubin',
    'Kushagra Thakur',
    'Vichar',
    'Urban Poet',
  ];

  const services = ['Concept Development', 'Filming', 'Editing', 'Post Production', 'Marketing'];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Container>
          <PageTitle variant="h2">
            About Us
          </PageTitle>
          <AboutContent>
            At Witness-Films, we are passionate storytellers dedicated to transforming musical visions into captivating visual narratives. Based in Dehradun, India, our team of seasoned professionals specializes in crafting high-quality music videos that resonate with audiences and amplify the essence of your artistry.
          </AboutContent>
          <AboutContent>
            With a deep understanding of the dynamic Indian music landscape, we collaborate closely with artists across genres to produce visually stunning and conceptually compelling music videos. Our comprehensive services encompass every stage of production, from conceptualization and storyboarding to filming, editing, and post-production.
          </AboutContent>
        </Container>
      </Section>

      <CollaborationSection>
        <Container>
          <SectionTitle variant="h3">
            Our Services
          </SectionTitle>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <ServiceCard>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                      }}
                    >
                      {service}
                    </Typography>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CollaborationSection>

      <Section>
        <Container>
          <SectionTitle variant="h3">
            Collaborations
          </SectionTitle>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {collaborations.map((colab) => (
              <Grid item xs={12} sm={6} md={4} key={colab.id}>
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
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                    >
                      {colab.title}
                    </Typography>
                  </ColabOverlay>
                </ColabCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle variant="h3">
            Artists We've Worked With
          </SectionTitle>
          <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
            {artists.map((artist) => (
              <Grid item xs={12} sm={6} md={4} key={artist}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArtistItem variant="h6">
                    {artist}
                  </ArtistItem>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Footer />
    </motion.div>
  );
};

export default About; 