import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectSection = styled(Box)({
  padding: '100px 0',
});

const ProjectImage = motion.img;

const ProjectInfo = styled(Box)({
  marginTop: '40px',
});

const BackButton = styled(Button)({
  marginBottom: '20px',
});

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  client?: string;
  date?: string;
  credits?: {
    director?: string;
    production?: string;
    cinematographer?: string;
    editor?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Dard e dil',
    category: 'Music Video',
    image: '/images/dard-e-dil.jpg',
    description: 'A soulful music video capturing the essence of heartbreak and longing.',
    client: 'Sony Music India',
    date: '2023',
    credits: {
      director: 'Divyansh Joshi',
      production: "Rishabh Pandey, Abhimanyu Kochar, Sanjana Arya",
      editor: 'Sumit Maurya'
    }
  },
  // Add more projects here
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <Container>
        <Typography>Project not found</Typography>
      </Container>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ProjectSection>
        <Container>
          
            <BackButton
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/portfolio')}
            >
              Back to Portfolio
            </BackButton>

          <Typography variant="h2" component="h1" gutterBottom>
            {project.title}
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <ProjectImage
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <ProjectInfo>
                <Typography variant="h6" gutterBottom>
                  Project Details
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Category:</strong> {project.category}
                </Typography>
                {project.client && (
                  <Typography variant="body1" paragraph>
                    <strong>Client:</strong> {project.client}
                  </Typography>
                )}
                {project.date && (
                  <Typography variant="body1" paragraph>
                    <strong>Date:</strong> {project.date}
                  </Typography>
                )}
                {project.description && (
                  <Typography variant="body1" paragraph>
                    {project.description}
                  </Typography>
                )}

                {project.credits && (
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      Credits
                    </Typography>
                    {Object.entries(project.credits).map(([role, name]) => (
                      <Typography key={role} variant="body1" paragraph>
                        <strong>{role.charAt(0).toUpperCase() + role.slice(1)}:</strong> {name}
                      </Typography>
                    ))}
                  </Box>
                )}
              </ProjectInfo>
            </Grid>
          </Grid>
        </Container>
      </ProjectSection>
    </motion.div>
  );
};

export default ProjectDetail; 