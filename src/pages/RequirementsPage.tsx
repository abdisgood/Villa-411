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
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { requirementsData } from "../data/requirementsData";

const RequirementsPage = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Detailed Design Brief
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {requirementsData.map((section) =>
            section.isGroup ? (
              <Box key={section.title} sx={{ width: '100%'}}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>{section.title}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {section.rooms.map(room => (
                    <Box key={room.name} sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' } }}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6">{room.name}</Typography>
                                <Chip label={room.mood} variant="outlined" sx={{ my: 1 }} />
                                <List dense>
                                {room.features.map(feature => (
                                    <ListItem key={feature}>
                                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                                        <ListItemText primary={feature} />
                                    </ListItem>
                                ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
                </Box>
              </Box>
            ) : (
              <Box key={section.title} sx={{ width: { xs: '100%', md: 'calc(50% - 16px)' } }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {section.title}
                    </Typography>
                    {section.mood && <Chip label={section.mood} variant="outlined" sx={{ mb: 1 }} />}
                    {section.function && <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 2 }}>
                      {section.function}
                    </Typography>}
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>Key Features:</Typography>
                    <List dense>
                      {section.keyFeatures && section.keyFeatures.map((item) => (
                        <ListItem key={item}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleOutlineIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default RequirementsPage; 