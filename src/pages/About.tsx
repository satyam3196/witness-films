import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const Section = styled(Box)({
  padding: '100px 0',
});

const AboutContent = styled(Typography)({
  marginBottom: '40px',
  fontSize: '1.2rem',
  lineHeight: 1.8,
  textAlign: 'justify'
});

const CollaborationSection = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '60px 0',
});

const CollaborationLogo = styled('img')({
  maxWidth: '150px',
  height: 'auto',
  margin: '20px',
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
  },
});

const About = () => {
  const collaborations = [
    'Sony Music India',
    'Desi Trill',
    'Warner Music',
    'T-Series',
    'Zerodha'
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Section>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            About Us
          </Typography>
          <AboutContent>
            At Witness Films, we are passionate storytellers dedicated to transforming musical visions into captivating visual narratives. Based in Dehradun, India, our team of seasoned professionals specializes in crafting high-quality music videos that resonate with audiences and amplify the essence of your artistry.
          </AboutContent>
          <AboutContent>
            With a deep understanding of the dynamic Indian music landscape, we collaborate closely with artists across genres to produce visually stunning and conceptually compelling music videos. Our comprehensive services encompass every stage of production, from conceptualization and storyboarding to filming, editing, and post-production.
          </AboutContent>
        </Container>
      </Section>

      <CollaborationSection>
        <Container>
          <Typography variant="h3" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {['Concept Development', 'Filming', 'Editing', 'Post Production', 'Marketing'].map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service}>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  p={3}
                  bgcolor="white"
                  borderRadius={2}
                >
                  <Typography variant="h5" gutterBottom>
                    {service}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CollaborationSection>

      <Section>
        <Container>
          <Typography variant="h3" gutterBottom>
            Collaborations
          </Typography>
          <Grid container justifyContent="center" spacing={4}>
            {collaborations.map((company) => (
              <Grid item key={company}>
                <Typography 
                  variant="h6" 
                  component={motion.div} 
                  whileHover={{ scale: 1.1 }}
                  sx={{ mx: 2 }}
                >
                  {company}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant="h3" gutterBottom>
            Artists We've Worked With
          </Typography>
          <Grid container spacing={3}>
            {artists.map((artist) => (
              <Grid item xs={12} sm={6} md={4} key={artist}>
                <Typography variant="h6" component={motion.div} whileHover={{ scale: 1.1 }}>
                  {artist}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </motion.div>
  );
};

export default About; 