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
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            animation: 'fadeInUp 0.6s ease-out',
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
          Get in Touch
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            animation: 'fadeInUp 0.6s ease-out 0.1s',
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
            We invite qualified interior design studios to submit their proposals.
        </Typography>
        <Typography
          sx={{
            animation: 'fadeInUp 0.6s ease-out 0.2s',
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
          Ameer Hamza Hasan
        </Typography>
        <Typography
          sx={{
            animation: 'fadeInUp 0.6s ease-out 0.3s',
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
          Villa 411, Green Community, Motor City, Dubai, UAE
        </Typography>
        <Link 
          href="tel:+971505517991" 
          sx={{ 
            display: 'block',
            animation: 'fadeInUp 0.6s ease-out 0.4s',
            animationFillMode: 'backwards',
            fontSize: '1.1rem',
            color: 'primary.main',
            textDecoration: 'none',
            transition: 'all 0.3s ease-in-out',
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
              color: 'primary.dark',
              transform: 'scale(1.1)',
              textDecoration: 'underline',
            }
          }}
        >
          +971 50 551 7991
        </Link>
        <Box sx={{ pt: 4 }}>
            <Button 
              variant="contained" 
              color="primary" 
              href="mailto:your-email@example.com"
              sx={{
                px: 5,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                animation: 'fadeInUp 0.6s ease-out 0.5s',
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
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 0,
                  height: 0,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'width 0.6s ease-out, height 0.6s ease-out',
                },
                '&:hover::before': {
                  width: '300px',
                  height: '300px',
                }
              }}
            >
                Submit Proposal
            </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 