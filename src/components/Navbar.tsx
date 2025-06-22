import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Typography, IconButton, Drawer, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const SidePanel = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100vh',
  width: '250px',
  backgroundColor: '#000',
  color: '#fff',
  transform: 'translateX(-200px)',
  transition: 'all 0.3s ease',
  zIndex: 1200,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide on mobile, use Drawer instead
  },
  '&:hover': {
    transform: 'translateX(0)',
    '& .hamburger-icon': {
      opacity: 0,
      position: 'absolute',
    },
    '& .logo-text': {
      opacity: 1,
      visibility: 'visible',
    },
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: '20px',
  left: '20px',
  zIndex: 1300,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none', // Hide on desktop
  },
}));

const LogoContainer = styled(Box)({
  padding: '20px',
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#fff',
  textDecoration: 'none',
  '&.logo-text': {
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.3s ease',
  },
});

const HamburgerButton = styled(IconButton)({
  color: '#fff',
  position: 'absolute',
  left: '200px',
  transition: 'all 0.3s ease',
  '&.hamburger-icon': {
    opacity: 1,
  },
});

const MenuList = styled(List)({
  padding: '20px 0',
});

const StyledListItem = styled(ListItem)({
  padding: '15px 30px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const MenuText = styled(ListItemText)({
  '& .MuiListItemText-primary': {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
  },
});

const MobileDrawerContent = styled(Box)({
  width: 250,
  height: '100%',
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px 0',
});

const MobileCloseButton = styled(IconButton)({
  color: '#fff',
  position: 'absolute',
  top: '10px',
  right: '10px',
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const menuItems = ['HOME','ABOUT', 'PORTFOLIO', 'TEAM', 'CONTACT'];

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const renderMenuItems = () => (
    <MenuList>
      {menuItems.map((item) => (
        <Link 
          key={item} 
          to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
          style={{ textDecoration: 'none' }}
          onClick={isMobile ? handleMobileClose : undefined}
        >
          <StyledListItem>
            <MenuText primary={item} />
          </StyledListItem>
        </Link>
      ))}
    </MenuList>
  );

  return (
    <>
      {/* Desktop Side Panel */}
      <SidePanel>
        <LogoContainer>
          <HamburgerButton
            className="hamburger-icon"
            aria-label="menu"
          >
            <MenuIcon />
          </HamburgerButton>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo variant="h6" className="logo-text">
              WITNESS-FILMS
            </Logo>
          </Link>
        </LogoContainer>
        {renderMenuItems()}
      </SidePanel>

      {/* Mobile Menu Button */}
      <MobileMenuButton
        onClick={handleMobileToggle}
        aria-label="open mobile menu"
      >
        <MenuIcon />
      </MobileMenuButton>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: '#000',
          },
        }}
      >
        <MobileDrawerContent>
          <MobileCloseButton onClick={handleMobileClose}>
            <CloseIcon />
          </MobileCloseButton>
          <LogoContainer sx={{ mt: 4 }}>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={handleMobileClose}>
              <Logo variant="h6">
                WITNESS-FILMS
              </Logo>
            </Link>
          </LogoContainer>
          {renderMenuItems()}
        </MobileDrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar; 