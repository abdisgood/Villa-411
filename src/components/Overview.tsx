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
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{
            animation: 'fadeInUp 0.8s ease-out',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          An Invitation to Redefine a Home
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          paragraph
          sx={{
            animation: 'fadeInUp 0.8s ease-out 0.2s',
            animationFillMode: 'backwards',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          We are seeking a visionary design partner to transform a private villa in Dubai into a sophisticated and emotionally resonant home for a multigenerational family. Our goal is to blend timeless elegance with modern functionality, creating a space that honors our heritage while embracing the future.
        </Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          href="/Property Map.pdf" 
          target="_blank"
          sx={{ 
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            borderWidth: 2,
            animation: 'fadeInUp 0.8s ease-out 0.4s',
            animationFillMode: 'backwards',
            transition: 'all 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
            '&:hover': {
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              borderColor: 'primary.dark',
              backgroundColor: 'primary.main',
              color: 'white',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              transition: 'left 0.5s ease-in-out',
            },
            '&:hover::before': {
              left: '100%',
            }
          }}
        >
          View Property Map
        </Button>
      </Container>
    </Box>
  );
};

export default Overview; 