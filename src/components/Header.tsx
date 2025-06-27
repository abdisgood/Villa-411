import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <AppBar position="sticky" color="transparent" sx={{ backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontFamily: "'Ballet', cursive", 
            color: '#B8860B', // DarkGoldenRod - an elegant gold
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              color: '#FFD700', // Gold
              transform: 'scale(1.05)',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
            }
          }}
        >
          Villa 411
        </Typography>
        <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(184, 134, 11, 0.1)',
                transform: 'rotate(90deg)',
              }
            }}
        >
            <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 