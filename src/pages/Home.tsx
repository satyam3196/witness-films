import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer';

const CollageSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '2px',
  backgroundColor: '#000',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    height: '80vh',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    height: '70vh',
    gap: '1px',
  },
}));

const CollageImageContainer = styled(motion.div)({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  cursor: 'pointer',
});

const CollageImage = styled(motion.img)(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.8s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const ImageGradient = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
  pointerEvents: 'none',
  transition: 'opacity 0.8s ease',
  '&:hover': {
    opacity: 0.7,
  },
});

const CenterLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: '20px',
  gridColumn: '4 / 6',
  gridRow: '2 / 4',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    gridColumn: '3 / 5',
    gridRow: '2 / 4',
    padding: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    gridColumn: '2 / 4',
    gridRow: '3 / 5',
    padding: '10px',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '400px',
  objectFit: 'contain',
  filter: 'brightness(1.1)',
  [theme.breakpoints.down('md')]: {
    maxWidth: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '250px',
  },
}));

const LogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '0.3rem',
  letterSpacing: '2px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    letterSpacing: '1px',
  },
}));

const LogoSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.7rem',
  opacity: 0.8,
  letterSpacing: '1px',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.5rem',
  },
}));

const PortfolioGrid = styled(Grid)(({ theme }) => ({
  padding: '40px 0',
  [theme.breakpoints.down('md')]: {
    padding: '30px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '20px 0',
  },
}));

const ProjectCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '400px',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '250px',
    marginBottom: '16px',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '20px',
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}));

const ColabCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '300px',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '200px',
    marginBottom: '16px',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const ColabImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const ColabOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '15px',
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem',
  },
}));

const SectionDivider = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '4px',
  backgroundColor: '#000',
  margin: '0 auto',
  marginBottom: '3rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.5rem',
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  marginTop: '8rem',
  marginBottom: '4rem',
  [theme.breakpoints.down('md')]: {
    marginTop: '6rem',
    marginBottom: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '4rem',
    marginBottom: '2rem',
  },
}));

const projects = [
  { id: 1, title: 'Don\'t Reckon', category: 'Music Video', image: '/images/dont_reckon.jpg' },
  { id: 2, title: 'Top Boys', category: 'Music Video', image: '/images/top_boys.jpg' },
  { id: 3, title: 'Mr. Rambo', image: '/images/rambo.jpg' },
  { id: 4, title: 'Battak', image: '/images/battak.jpg' },
  { id: 5, title: 'Ben 10', image: '/images/ben-10.jpg' },
  { id: 8, title: 'Dard e dil', image: '/images/dard-e-dil.jpg' },
  //{ id: 7, title: 'Heavy', image: '/images/heavy.jpg' },
  // Add more projects here
];

const colabs = [
  { id: 1, title: 'Sony Music India', image: '/images/sony_music.jpg' },
  { id: 2, title: 'Universal Music Group', image: '/images/universal_music.jpg' },
  { id: 3, title: 'Warner Music India', image: '/images/warner_music.jpg' },
  { id: 4, title: 'Mass Appeal', image: '/images/mass_appeal.jpg' },
  //{ id: 4, title: 'T-Series', image: '/images/t-series.png' },
];

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Shuffle function
  const shuffleArray = (array: number[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Generate array of photo numbers (1-32, you can add up to 32)
  const [collagePhotos, setCollagePhotos] = React.useState(() => 
    shuffleArray(Array.from({ length: 32 }, (_, i) => i + 1))
  );
  
  // Get grid size and center positions based on screen size
  const getGridConfig = () => {
    if (window.innerWidth <= 600) { // sm breakpoint
      return {
        totalPositions: 24, // 4x6 grid
        centerPositions: new Set([10, 11, 14, 15]), // Center 2x2 in 4x6 grid
        centerPosition: 10
      };
    } else if (window.innerWidth <= 900) { // md breakpoint
      return {
        totalPositions: 30, // 6x5 grid
        centerPositions: new Set([14, 15, 20, 21]), // Center 2x2 in 6x5 grid
        centerPosition: 14
      };
    } else {
      return {
        totalPositions: 32, // 8x4 grid
        centerPositions: new Set([12, 13, 20, 21]), // Center 2x2 in 8x4 grid
        centerPosition: 12
      };
    }
  };

  const [gridConfig, setGridConfig] = React.useState(getGridConfig());

  // Shuffle photos every 8 seconds
  React.useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setCollagePhotos(prev => shuffleArray(prev));
    }, 8000); // Change every 8 seconds

    return () => clearInterval(shuffleInterval);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setGridConfig(getGridConfig());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Filter out center positions for photos
  let photoIndex = 0;
  const getPhotoForPosition = (position: number) => {
    if (gridConfig.centerPositions.has(position)) {
      return null; // This position is for the logo
    }
    return collagePhotos[photoIndex++];
  };

  return (
    <Box>
            <CollageSection>
        {Array.from({ length: gridConfig.totalPositions }, (_, index) => {
          const position = index + 1;
          const photoNumber = getPhotoForPosition(position);
          
          if (photoNumber === null) {
            // This is part of the center logo area, but we'll handle it differently
            if (position === gridConfig.centerPosition) { // Show logo only once in the center (first center position)
              return (
                <CenterLogo key="logo">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  >
                    <LogoImage 
                      src="/logo192.png" 
                      alt="Witness Films Logo"
                    />
                  </motion.div>
                </CenterLogo>
              );
            }
            return null; // Other center positions are empty
          }

          return (
            <motion.div
              key={`photo-${photoNumber}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 1.2, 
                delay: Math.random() * 0.6 // Slower, more spread out delays
              }}
              layout // This enables smooth position transitions
            >
              <CollageImageContainer
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <CollageImage
                  src={`/collage/${photoNumber}.jpg`}
                  alt={`Collage photo ${photoNumber}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ImageGradient />
              </CollageImageContainer>
            </motion.div>
          );
        })}
      </CollageSection>

      <Container>
        <MainContent>
          <Box sx={{ textAlign: 'center' }}>
            <SectionTitle variant="h3">
              Featured Projects
            </SectionTitle>
            <SectionDivider />
          </Box>
          <PortfolioGrid container spacing={{ xs: 2, sm: 3, md: 3 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
                  <ProjectCard
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectOverlay>
                      <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        {project.title}
                      </Typography>
                    </ProjectOverlay>
                  </ProjectCard>
                </Link>
              </Grid>
            ))}
          </PortfolioGrid>

          {/* Featured Colabs Section */}
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <SectionTitle variant="h3">
              Featured Colabs
            </SectionTitle>
            <SectionDivider />
          </Box>
          <PortfolioGrid container spacing={{ xs: 2, sm: 3, md: 3 }}>
            {colabs.map((colab) => (
              <Grid item xs={12} sm={6} md={3} key={colab.id}>
                <ColabCard
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * colab.id }}
                >
                  <ColabImage src={colab.image} alt={colab.title} />
                  <ColabOverlay>
                    <Typography 
                      variant="h6" 
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' } }}
                    >
                      {colab.title}
                    </Typography>
                  </ColabOverlay>
                </ColabCard>
              </Grid>
            ))}
          </PortfolioGrid>
        </MainContent>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home; 