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
        >
            <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 