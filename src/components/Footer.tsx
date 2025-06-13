import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '40px 0',
  marginTop: '80px',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              WITNESS FILMS
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#ccc' }}>
              Transforming Musical Visions into Visual Stories
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link to="/about" style={{ color: '#ccc', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { color: '#fff' } }}>
                  About
                </Typography>
              </Link>
              <Link to="/portfolio" style={{ color: '#ccc', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { color: '#fff' } }}>
                  Portfolio
                </Typography>
              </Link>
              <Link to="/team" style={{ color: '#ccc', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { color: '#fff' } }}>
                  Team
                </Typography>
              </Link>
              <Link to="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ '&:hover': { color: '#fff' } }}>
                  Contact
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc', mb: 1 }}>
              Email: info@witnessfilms.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc', mb: 1 }}>
              Phone: +91 9627627886
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Location: Witness Films Studio, Jakhan, Dehradun, India
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ 
          borderTop: '1px solid #333', 
          mt: 4, 
          pt: 3, 
          textAlign: 'center' 
        }}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            © 2024 Witness Films. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 