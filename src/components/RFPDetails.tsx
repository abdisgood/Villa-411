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
          {Object.entries(requirements).map(([category, items]) => (
            <Box sx={{ width: { xs: "100%", md: "33.33%" }, p: 2 }} key={category}>
                  <Typography variant="h5" component="h3" gutterBottom align="center">
                    {category}
                  </Typography>
                  <List dense>
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
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
          >
            View Detailed Brief
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RFPDetails; 