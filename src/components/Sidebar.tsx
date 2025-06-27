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
        <IconButton onClick={onClose}>
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
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleLinkClick(item.to, item.anchor)}
                sx={{ py: 1 }}
              >
                <ListItemText
                  primaryTypographyProps={{ variant: "h6", sx: { fontWeight: 400 } }}
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