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
  maxWidth: 400,
  margin: '0 auto',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Divyansh Joshi",
    role: "Founder & Director",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugenda. Nulla quis lorem ut libero malesuada feugenda.",
    imageUrl: "/images/divyansh-joshi.jpg" // You'll need to add this image to public/images
  },
  {
    name: "Rishabh Pandey",
    role: "Executive Producer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: "/images/rishabh-pandey.jpg" // You'll need to add this image to public/images
  }
];

const Team: React.FC = () => {
  return (
    <Box>
      <TeamSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <TeamCard>
                    <CardMedia
                      component="img"
                      height="300"
                      image={member.imageUrl}
                      alt={member.name}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        {member.role}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {member.bio}
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