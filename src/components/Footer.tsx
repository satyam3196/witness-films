import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  padding: '40px 0',
  marginTop: '80px',
  [theme.breakpoints.down('md')]: {
    marginTop: '60px',
    padding: '30px 0',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '40px',
    padding: '24px 0',
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    marginBottom: '12px',
  },
}));

const FooterSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  color: '#ccc',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: '12px',
  },
}));

const FooterSectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    marginBottom: '12px',
  },
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  color: '#ccc',
  '&:hover': { 
    color: '#fff' 
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#ccc',
  marginBottom: '8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    marginBottom: '6px',
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: '#ccc',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
          <Grid item xs={12} md={4}>
            <FooterTitle variant="h5">
              WITNESS FILMS
            </FooterTitle>
            <FooterSubtitle variant="body1">
              Transforming Musical Visions into Visual Stories
            </FooterSubtitle>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FooterSectionTitle variant="h6">
              Quick Links
            </FooterSectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link to="/about" style={{ color: '#ccc', textDecoration: 'none' }}>
                <FooterLink variant="body2">
                  About
                </FooterLink>
              </Link>
              <Link to="/portfolio" style={{ color: '#ccc', textDecoration: 'none' }}>
                <FooterLink variant="body2">
                  Portfolio
                </FooterLink>
              </Link>
              <Link to="/team" style={{ color: '#ccc', textDecoration: 'none' }}>
                <FooterLink variant="body2">
                  Team
                </FooterLink>
              </Link>
              <Link to="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>
                <FooterLink variant="body2">
                  Contact
                </FooterLink>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FooterSectionTitle variant="h6">
              Contact Info
            </FooterSectionTitle>
            <FooterText variant="body2">
              Email: info@witness-films.com
            </FooterText>
            <FooterText variant="body2">
              Phone: +91-9627627886
            </FooterText>
            <FooterText variant="body2">
              Location: Offgrid Studios, Jakhan, Dehradun, India
            </FooterText>
          </Grid>
        </Grid>
        <Box sx={{ 
          borderTop: '1px solid #333', 
          mt: { xs: 3, sm: 4 }, 
          pt: { xs: 2, sm: 3 }, 
          textAlign: 'center' 
        }}>
          <CopyrightText variant="body2">
            © 2021 Witness-Films. All rights reserved.
          </CopyrightText>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 