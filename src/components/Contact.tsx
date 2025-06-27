import {
  Container,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            We invite qualified interior design studios to submit their proposals.
        </Typography>
        <Typography>Ameer Hamza Hasan</Typography>
        <Typography>Villa 411, Green Community, Motor City, Dubai, UAE</Typography>
        <Link href="tel:+971505517991" sx={{ display: 'block' }}>+971 50 551 7991</Link>
        <Box sx={{ pt: 4 }}>
            <Button variant="contained" color="primary" href="mailto:your-email@example.com">
                Submit Proposal
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 