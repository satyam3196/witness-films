import React, { useState } from 'react';
import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const ContactSection = styled(Box)({
  padding: '100px 0',
});

const ContactInfo = styled(Box)({
  marginBottom: '40px',
});

const ContactForm = styled('form')({
  '& .MuiTextField-root': {
    marginBottom: '20px',
  },
});

const LocationMap = styled('iframe')({
  width: '100%',
  height: '400px',
  border: 0,
  borderRadius: '4px',
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContactSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Contact Us
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <ContactInfo>
                <Typography variant="h5" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph>
                  We'd love to hear from you. Whether you're looking to create a music video, collaborate on a project, or just want to say hello, we're here to help.
                </Typography>
                <Box sx={{ my: 4 }}>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> info@witnessfilms.com
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Phone:</strong> +91 9627627886
                  </Typography>
                  <Typography variant="body1">
                    <strong>Address:</strong><br />
                    Dehradun, India
                  </Typography>
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
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
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
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </ContactForm>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', minHeight: '400px' }}>
                <LocationMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110200.95537673521!2d77.9391927563886!3d30.325432070591396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647856687721!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Witness Films Location"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
    </motion.div>
  );
};

export default Contact; 