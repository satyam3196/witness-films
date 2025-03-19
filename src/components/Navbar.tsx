import React, { useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, ButtonProps } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  color: 'black',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  padding: '20px 40px',
});

interface NavButtonProps extends ButtonProps {
  to?: string;
  component?: React.ElementType;
}

const NavButton = styled(Button)<NavButtonProps>(({ theme }) => ({
  marginLeft: '20px',
  color: 'black',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#666',
  },
}));

const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
  textDecoration: 'none',
  color: 'black',
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['About', 'Portfolio', 'Contact'];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item} component={Link} to={`/${item.toLowerCase()}`}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo variant="h6">WITNESS FILMS</Logo>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {menuItems.map((item) => (
              <NavButton
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </NavButton>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 