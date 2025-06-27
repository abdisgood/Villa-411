import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

const requirements = {
  "Interior Design & Architecture": [
    "Textured Ceilings and Walls",
    "Non-Shiny Floors",
    "Mood Elements",
    "Pastel Colour Palette",
    "Classic/Ethnic Furniture Compatibility",
  ],
  "Space Planning & Extensions": [
    "More natural and artificial light in Kitchen & Bathrooms",
    "Modern, functional layouts with ample storage",
    "Space management for two bedrooms",
    "Inviting and flexible common areas",
    "Extensions: Gym, solarium, bay windows, pergolas/shades",
  ],
  "Landscape & Exterior": [
    "Strong visual and functional connection between interiors and garden/patio",
    "Lush, low-maintenance landscaping with water features",
    "Exterior Upgrades: Façade improvements, outdoor lounge areas",
  ],
};

const RFPDetails = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'secondary.main' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Key Requirements
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            pt: 4
          }}
        >
          {Object.entries(requirements).map(([category, items], categoryIndex) => (
            <Box 
              sx={{ 
                width: { xs: "100%", md: "33.33%" }, 
                p: 2,
                borderRadius: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }
              }} 
              key={category}
            >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    align="center"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    {category}
                  </Typography>
                  <List dense>
                    {items.map((item, index) => (
                      <ListItem 
                        key={index}
                        sx={{
                          borderRadius: 1,
                          mb: 0.5,
                          transition: 'all 0.3s ease-in-out',
                          animation: `fadeInUp 0.5s ease-out ${(categoryIndex * 0.1) + (index * 0.1)}s`,
                          animationFillMode: 'backwards',
                          '@keyframes fadeInUp': {
                            from: {
                              opacity: 0,
                              transform: 'translateY(10px)',
                            },
                            to: {
                              opacity: 1,
                              transform: 'translateY(0)',
                            },
                          },
                          '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            transform: 'translateX(5px)',
                            '& .MuiListItemIcon-root': {
                              color: 'primary.main',
                              transform: 'scale(1.2)',
                            }
                          }
                        }}
                      >
                        <ListItemIcon sx={{ 
                          minWidth: '32px',
                          transition: 'all 0.3s ease-in-out',
                        }}>
                          <CheckCircleOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
            </Box>
          ))}
        </Box>
        <Box sx={{ pt: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/requirements"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
              }
            }}
          >
            View Detailed Brief
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RFPDetails; 