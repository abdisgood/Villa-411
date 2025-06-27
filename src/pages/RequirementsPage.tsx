import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
  Grid,
  Divider,
  Stack,
  Avatar,
  useTheme,
  alpha,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import DiningIcon from "@mui/icons-material/Dining";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WeekendIcon from "@mui/icons-material/Weekend";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeckIcon from "@mui/icons-material/Deck";
import ParkIcon from "@mui/icons-material/Park";
import BrushIcon from "@mui/icons-material/Brush";
import { requirementsData } from "../data/requirementsData";

const iconMap: { [key: string]: any } = {
  "Main Area – Central Family Zone": HomeIcon,
  "Formal Dining Room": DiningIcon,
  "Kitchen": KitchenIcon,
  "Bedrooms": BedIcon,
  "Bathrooms": BathtubIcon,
  "Drawing Room / Majlis": WeekendIcon,
  "Solarium / Winter Lounge": WbSunnyIcon,
  "Home Gym": FitnessCenterIcon,
  "Pergola Lounge": DeckIcon,
  "Outdoor Landscaping": ParkIcon,
  "Mahnaz Hasan's Workshop / Studio": BrushIcon,
};

const RequirementsPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.dark,
              }}
            >
              Interior & Exterior Design Brief
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              align="center"
              sx={{ maxWidth: 800 }}
            >
              Motor City Green Community Villa
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Chip
                label="Prepared for VSHD Design"
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.dark,
                  fontWeight: 500,
                }}
              />
              <Chip
                label="Residents: Ameer Hamza Hasan, Mahnaz Hasan, Khadija Hasan"
                sx={{
                  bgcolor: alpha(theme.palette.secondary.main, 0.1),
                  color: theme.palette.secondary.dark,
                  fontWeight: 500,
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          {requirementsData.map((section, index) => {
            const Icon = iconMap[section.title] || HomeIcon;
            
            return section.isGroup ? (
              <Grid item xs={12} key={section.title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: 'white',
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        width: 56,
                        height: 56,
                        mr: 2,
                      }}
                    >
                      <Icon fontSize="large" />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {section.rooms.map((room) => (
                      <Grid item xs={12} md={6} key={room.name}>
                        <Card
                          sx={{
                            height: '100%',
                            borderRadius: 2,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            boxShadow: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: theme.shadows[4],
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                            >
                              {room.name}
                            </Typography>
                            <Chip
                              label={room.mood}
                              size="small"
                              sx={{
                                mb: 2,
                                bgcolor: alpha(theme.palette.secondary.main, 0.1),
                                color: theme.palette.secondary.dark,
                                fontWeight: 500,
                              }}
                            />
                            <List dense sx={{ pt: 0 }}>
                              {room.features.map((feature) => (
                                <ListItem key={feature} sx={{ px: 0 }}>
                                  <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircleOutlineIcon
                                      fontSize="small"
                                      sx={{ color: theme.palette.success.main }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={feature}
                                    primaryTypographyProps={{
                                      sx: { fontSize: '0.95rem' }
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            ) : (
              <Grid item xs={12} md={6} key={section.title}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: theme.shadows[6],
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          width: 48,
                          height: 48,
                          mr: 2,
                        }}
                      >
                        <Icon />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          component="h2"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {section.title}
                        </Typography>
                        {section.mood && (
                          <Chip
                            label={section.mood}
                            size="small"
                            sx={{
                              bgcolor: alpha(theme.palette.secondary.main, 0.1),
                              color: theme.palette.secondary.dark,
                              fontWeight: 500,
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {section.function && (
                      <>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          paragraph
                          sx={{ mb: 3, lineHeight: 1.8 }}
                        >
                          {section.function}
                        </Typography>
                        <Divider sx={{ mb: 3 }} />
                      </>
                    )}

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.dark }}
                    >
                      Key Features:
                    </Typography>
                    <List dense sx={{ pt: 0 }}>
                      {section.keyFeatures &&
                        section.keyFeatures.map((item) => (
                          <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleOutlineIcon
                                fontSize="small"
                                sx={{ color: theme.palette.success.main }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={item}
                              primaryTypographyProps={{
                                sx: { fontSize: '0.95rem', lineHeight: 1.6 }
                              }}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* Footer Note */}
        <Paper
          elevation={0}
          sx={{
            mt: 6,
            p: 4,
            bgcolor: alpha(theme.palette.primary.main, 0.05),
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" color="text.secondary">
            This document reflects functional expectations, emotional tone, and material direction,
            guided by the identities and preferences of the Hasan family.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default RequirementsPage; 