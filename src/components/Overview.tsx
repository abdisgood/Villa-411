import {
  Container,
  Typography,
  Box,
  Button
} from "@mui/material";

const Overview = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          An Invitation to Redefine a Home
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          We are seeking a visionary design partner to transform a private villa in Dubai into a sophisticated and emotionally resonant home for a multigenerational family. Our goal is to blend timeless elegance with modern functionality, creating a space that honors our heritage while embracing the future.
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          href="/Property Map.pdf" 
          target="_blank"
          sx={{ mt: 2 }}
        >
          View Property Map
        </Button>
      </Container>
    </Box>
  );
};

export default Overview; 