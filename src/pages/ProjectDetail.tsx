import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../components/Footer';

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

const YouTubeEmbed = styled('iframe')({
  width: '100%',
  height: '400px',
  borderRadius: '4px',
  border: 'none',
});

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  client?: string;
  date?: string;
  youtubeUrl?: string;
  credits?: {
    director?: string;
    production?: string;
    cinematographer?: string;
    editor?: string;
  };
}

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Top Boys', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=TKxKigER2Fs',
    // Add other details as needed
  },
  {
    id: 2,
    title: 'Don\'t Reckon', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=MnFbC3hKp9E',
    // Add other details as needed
  },
  {
    id: 3,
    title: 'Mr. Rambo', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=C8TqGcWpWok&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_',
    // Add other details as needed
  },
  {
    id: 4,
    title: 'Battak', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=ERFhtBHVZas&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=3',
    // Add other details as needed
  },
  {
    id: 5,
    title: 'Ben 10', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=4h5TjHP_ZMs&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=4',
    // Add other details as needed
  },
  {
    id: 6,
    title: 'Heavy', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=1UFQA0_fzeY&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=7',
    // Add other details as needed
  },
  {
    id: 7,
    title: 'Dard e dil', // You can update this with the actual title
    category: 'Music Video', // You can update this with the actual category
    image: '/images/project-1.jpg', // You can update this with the actual image
    description: 'Project description here', // You can update this
    youtubeUrl: 'https://www.youtube.com/watch?v=BdQ7PKhbJ2M&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=6',
    // Add other details as needed
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
              {project.youtubeUrl ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <YouTubeEmbed
                    src={getYouTubeEmbedUrl(project.youtubeUrl)}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : (
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
              )}
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
      <Footer />
    </motion.div>
  );
};

export default ProjectDetail; 