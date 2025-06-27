import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { text: "Project", to: "/", anchor: "#overview" },
  { text: "Residents", to: "/", anchor: "#residents" },
  { text: "Requirements", to: "/requirements" },
  { text: "Inspiration", to: "/inspiration" },
  { text: "Contact", to: "/", anchor: "#contact" },
];

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (to: string, anchor?: string) => {
    onClose();

    if (window.location.pathname === to && anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(to);
    if (anchor) {
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      transitionDuration={500} // Slower animation
      PaperProps={{
        sx: {
          width: 400, // Standard sidebar width
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" component="div">
          Menu
        </Typography>
        <IconButton 
          onClick={onClose}
          sx={{
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'rotate(180deg)',
              backgroundColor: 'rgba(0,0,0,0.08)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: 2,
        }}
        role="presentation"
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleLinkClick(item.to, item.anchor)}
                sx={{ 
                  py: 1,
                  borderRadius: 2,
                  mb: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  animation: `slideInRight 0.5s ease-out ${index * 0.1}s`,
                  animationFillMode: 'backwards',
                  '@keyframes slideInRight': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(20px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateX(10px)',
                    '& .MuiListItemText-primary': {
                      fontWeight: 600,
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.5s ease-in-out',
                  },
                  '&:hover::before': {
                    left: '100%',
                  }
                }}
              >
                <ListItemText
                  primaryTypographyProps={{ 
                    variant: "h6", 
                    sx: { 
                      fontWeight: 400,
                      transition: 'font-weight 0.3s ease-in-out'
                    } 
                  }}
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar; 