import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../components/Footer';

const ProjectSection = styled(Box)({
  padding: '100px 0',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const BackButton = styled(Button)({
  position: 'fixed',
  top: '20px',
  left: '20px',
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
});

const YouTubeEmbed = styled('iframe')({
  width: '100%',
  maxWidth: '1200px',
  height: '675px', // 16:9 aspect ratio for larger size
  borderRadius: '8px',
  border: 'none',
  '@media (max-width: 768px)': {
    height: '400px',
  },
  '@media (max-width: 480px)': {
    height: '300px',
  },
});

interface Project {
  id: number;
  title: string;
  youtubeUrl: string;
}

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'DON\'T RECKON',
    youtubeUrl: 'https://www.youtube.com/watch?v=MnFbC3hKp9E',
  },
  {
    id: 2,
    title: 'TOP BOYS',
    youtubeUrl: 'https://www.youtube.com/watch?v=TKxKigER2Fs',
  },
  {
    id: 3,
    title: 'MR. RAMBO',
    youtubeUrl: 'https://www.youtube.com/watch?v=C8TqGcWpWok&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_',
  },
  {
    id: 4,
    title: 'BATTAK',
    youtubeUrl: 'https://www.youtube.com/watch?v=ERFhtBHVZas&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=3',
  },
  {
    id: 5,
    title: 'BEN 10',
    youtubeUrl: 'https://www.youtube.com/watch?v=4h5TjHP_ZMs&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=4',
  },
  {
    id: 6,
    title: 'Shiv Kailasho Ke Vasi',
    youtubeUrl: 'https://www.youtube.com/watch?v=qJWysCaxZyo',
  },
  {
    id: 7,
    title: 'HEAVY',
    youtubeUrl: 'https://www.youtube.com/watch?v=1UFQA0_fzeY&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=8',
  },
  {
    id: 8,
    title: 'One Time',
    youtubeUrl: 'https://www.youtube.com/watch?v=zj45clroJwI&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=21',
  },
  {
    id: 9,
    title: 'DARD E DIL',
    youtubeUrl: 'https://www.youtube.com/watch?v=BdQ7PKhbJ2M',
  },    
  {
    id: 10,
    title: 'GUD NAAL',
    youtubeUrl: 'https://www.youtube.com/watch?v=6XGPA8iGC9Y&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=8',
  },  
  {
    id: 11,
    title: 'G CLASS',
    youtubeUrl: 'https://www.youtube.com/watch?v=eCwQ_nS7ZS0&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=9',
  },  
  {
    id: 12,
    title: 'DIWALI',
    youtubeUrl: 'https://www.youtube.com/watch?v=J5LXoaIlVas&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=5',
  },  
  {
    id: 13,
    title: 'ALL IN',
    youtubeUrl: 'https://www.youtube.com/watch?v=qgms2MhC9SQ&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=20',
  },  
  {
    id: 14,
    title: 'SAMAJH RAHI HAI',
    youtubeUrl: 'https://www.youtube.com/watch?v=YgBob6jQ6wg&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=10',
  },  
  {
    id: 15,
    title: 'FY24',
    youtubeUrl: 'https://www.youtube.com/watch?v=I7VWmsdgNAc&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=11',
  },  
  {
    id: 16,
    title: 'BAIRIYA',
    youtubeUrl: 'https://www.youtube.com/watch?v=Mji5cPEaqQA&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=12',
  },  
  {
    id: 17,
    title: 'MEHNDI',
    youtubeUrl: 'https://www.youtube.com/watch?v=30QNzAMrenE&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=13',
  },  
  {
    id: 18,
    title: 'HUKUM KA IKKA',
    youtubeUrl: 'https://www.youtube.com/watch?v=wFoZU6KTYK8&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=14',
  },  
  {
    id: 19,
    title: 'KOBE',
    youtubeUrl: 'https://www.youtube.com/watch?v=Cbi2a_1M01Q&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=15',
  },  
  {
    id: 20,
    title: 'AMBITIONS',
    youtubeUrl: 'https://www.youtube.com/watch?v=8iT6Uo8XOIs&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=16',
  },  
  {
    id: 21,
    title: 'ROAD RASH',
    youtubeUrl: 'https://www.youtube.com/watch?v=NNwZnzrzj6E&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=17',
  },  
  {
    id: 22,
    title: 'TU HI HAI',
    youtubeUrl: 'https://www.youtube.com/watch?v=pN3WvrvQ6UY&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=18',
  },  
  {
    id: 23,
    title: 'TOKE',
    youtubeUrl: 'https://www.youtube.com/watch?v=6DFUSJlntS4&list=PLK8ERQe_PgVIZzKUsSwRgoIGjhwceAbj_&index=19',
  },  
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
      <Box sx={{ textAlign: 'right' }}>
        <BackButton
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/portfolio')}
        >
          Back to Portfolio
        </BackButton>
      </Box>

      <ProjectSection>
        <Container>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{
              textAlign: 'center',
              marginBottom: '40px',
              fontWeight: 'bold',
              letterSpacing: '2px',
            }}
          >
            {project.title}
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <YouTubeEmbed
              src={getYouTubeEmbedUrl(project.youtubeUrl)}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </Container>
      </ProjectSection>
      <Footer />
    </motion.div>
  );
};

export default ProjectDetail; 