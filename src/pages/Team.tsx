import React from 'react';
import { Container, Typography, Grid, Box, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const TeamSection = styled(Box)({
  padding: '100px 0',
  minHeight: 'calc(100vh - 200px)',
});

const TeamCard = styled(Card)({
  maxWidth: 350,
  margin: '0 auto',
  transition: 'transform 0.3s ease',
  borderRadius: '12px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
});

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Divyansh Joshi",
    role: "Founder & Director",
    imageUrl: "/images/dj.jpg"
  },
  {
    name: "Rishabh Pandey",
    role: "Executive Producer",
    imageUrl: "/images/pandu.jpg"
  },
  {
    name: "Tushar Gupta",
    role: "Director of Photography",
    imageUrl: "/images/tushar.jpg"
  },
  {
    name: "Shubham Sharma",
    role: "Creative Director",
    imageUrl: "/images/shubham.jpg"
  }
];

const Team: React.FC = () => {
  return (
    <Box>
      <TeamSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 8 }}>
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center" maxWidth="800px" sx={{ margin: '0 auto' }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamCard>
                    <CardMedia
                      component="img"
                      height="350"
                      image={member.imageUrl}
                      alt={member.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {member.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {member.role}
                      </Typography>
                    </CardContent>
                  </TeamCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TeamSection>
      <Footer />
    </Box>
  );
};

export default Team; 