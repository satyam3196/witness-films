import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, TextField, Button, Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  [theme.breakpoints.down('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  '& .MuiTextField-root': {
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '16px',
    },
  },
}));

const LocationMap = styled('iframe')(({ theme }) => ({
  width: '100%',
  height: '400px',
  border: 0,
  borderRadius: '4px',
  [theme.breakpoints.down('md')]: {
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '300px',
    marginTop: '20px',
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    marginBottom: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link as fallback
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent from Witness-Films website contact form`
      );
      
      const mailtoLink = `mailto:info@witness-films.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setNotification({
        open: true,
        message: 'Email client opened! Please send the email from your email application.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      setNotification({
        open: true,
        message: 'There was an error. Please try again or contact us directly at satyam3196@gmail.com',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContactSection>
        <Container>
          <PageTitle variant="h2" align="center">
            Contact Us
          </PageTitle>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item xs={12} md={6}>
              <ContactInfo>
                <InfoTitle variant="h5" gutterBottom>
                  Get in Touch
                </InfoTitle>
                <InfoText variant="body1" paragraph>
                  We'd love to hear from you. Whether you're looking to create a music video, collaborate on a project, or just want to say hello, we're here to help.
                </InfoText>
                <Box sx={{ my: { xs: 3, md: 4 } }}>
                  <InfoText variant="body1" paragraph>
                    <strong>Email:</strong> info@witness-films.com
                  </InfoText>
                  <InfoText variant="body1" paragraph>
                    <strong>Phone:</strong> +91-9627627886
                  </InfoText>
                  <InfoText variant="body1">
                    <strong>Address:</strong><br />
                    Offgrid Studios, Jakhan, Dehradun, India
                  </InfoText>
                </Box>
              </ContactInfo>

              <ContactForm onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  size="medium"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  size="medium"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  size="medium"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ 
                    mt: 2,
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 3, sm: 4 },
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </ContactForm>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', minHeight: { xs: '300px', md: '400px' } }}>
                <LocationMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8234567891!2d78.0663120!3d30.3634370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIxJzQ4LjQiTiA3OMKwMDQnMDkuNSJF!5e0!3m2!1sen!2sin!4v1647856687721!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Offgrid Studios - Jakhan, Dehradun, India"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
      <Footer />
      
      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default Contact; 