import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <AppBar position="sticky" color="transparent" sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar sx={{ position: 'relative' }}>
        <Box sx={{ 
          position: 'absolute', 
          left: '50%', 
          transform: 'translateX(-50%)',
          textAlign: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography 
              variant="h2" 
              component="div" 
              sx={{ 
                fontFamily: "'Ballet', cursive", 
                color: '#B8860B', // DarkGoldenRod - an elegant gold
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#DAA520', // Slightly lighter gold on hover
                  transform: 'scale(1.05)'
                }
              }}
            >
              Villa 411
            </Typography>
          </Link>
        </Box>
        <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ ml: 'auto' }}
        >
            <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 