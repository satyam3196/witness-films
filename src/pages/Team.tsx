import React, { useEffect } from 'react';
import { Container, Typography, Grid, Box, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const TeamSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  minHeight: 'calc(100vh - 200px)',
  [theme.breakpoints.down('md')]: {
    padding: '80px 0',
    minHeight: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const TeamCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '0 auto',
  transition: 'transform 0.3s ease',
  borderRadius: '12px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    maxWidth: 350,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    marginBottom: '24px',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '8rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginBottom: '6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '4rem',
  },
}));

const TeamGrid = styled(Grid)(({ theme }) => ({
  maxWidth: '2000px',                        //important
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '600px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const MemberName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const MemberRole = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

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
    name: "Yuvraj Rawat",
    role: "Director & Editor",
    imageUrl: "/images/yuvraj.jpg"
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
  },
  {
    name: "Shubham Kumar",
    role: "Production Head",
    imageUrl: "/images/shubhamk.jpg"
  }
];

const Team: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <TeamSection>
        <Container>
          <PageTitle variant="h2" align="center">
            Our Team
          </PageTitle>
          <TeamGrid container spacing={{ xs: 3, sm: 4, md: 3, lg: 4 }} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
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
                      sx={{ 
                        objectFit: 'cover',
                        height: { xs: 300, sm: 350 }
                      }}
                    />
                    <CardContent sx={{ 
                      p: { xs: 2, sm: 3 }, 
                      textAlign: 'center'
                    }}>
                      <MemberName variant="h5" gutterBottom>
                        {member.name}
                      </MemberName>
                      <MemberRole variant="h6" color="text.secondary">
                        {member.role}
                      </MemberRole>
                    </CardContent>
                  </TeamCard>
                </motion.div>
              </Grid>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>
      <Footer />
    </Box>
  );
};

export default Team; 