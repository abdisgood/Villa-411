import {
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";

const profiles = [
  {
    name: "Ameer Hamza Hasan",
    role: "Family Patriarch | Retired Executive",
    details: [
      "Appreciates timeless, functional spaces over opulence.",
      "Enjoys reading and reflection.",
      "Prefers natural materials like wood and stone.",
    ],
    image: "/images/residentProfiles/AmeerHamzaHasan.png",
  },
  {
    name: "Mahnaz Hasan",
    role: "Family Matriarch | Life Coach",
    details: [
      "Warm, nurturing, and deeply involved in the household.",
      "Values a beautiful and intuitive kitchen.",
      "Prefers warm, layered, and emotionally intelligent spaces.",
    ],
    image: "/images/residentProfiles/MahnazHasan.png",
  },
  {
    name: "Khadija Hasan",
    role: "Daughter | CEO | Global Thinker",
    details: [
      "Dynamic and driven, focused on sustainability.",
      "Prefers serene, minimal, and tech-integrated design.",
      "Appreciates clean lines and matte textures.",
    ],
    image: "/images/residentProfiles/KhadijaHasan.png",
  },
];

const ResidentProfiles = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          The Hasan Family
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            pt: 4,
          }}
        >
          {profiles.map((profile) => (
            <Box
              sx={{ width: { xs: "100%", md: "33.33%" } }}
              key={profile.name}
            >
              <Card 
                sx={{ 
                  height: "100%", 
                  border: "none",
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  },
                  '&:hover .MuiCardMedia-root': {
                    transform: 'scale(1.1)',
                  },
                  '&:hover .MuiCardContent-root': {
                    backgroundColor: 'rgba(0,0,0,0.02)',
                  }
                }}
              >
                <Box sx={{ overflow: 'hidden', height: 300 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={profile.image}
                    alt={profile.name}
                    sx={{ 
                      objectFit: "cover",
                      transition: 'transform 0.3s ease-in-out',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </Box>
                <CardContent sx={{ transition: 'background-color 0.3s ease-in-out' }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{
                      transition: 'color 0.3s ease-in-out',
                      '.MuiCard-root:hover &': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {profile.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {profile.role}
                  </Typography>
                  <ul style={{ paddingLeft: '20px' }}>
                    {profile.details.map((detail, index) => (
                      <li key={index}>
                        <Typography variant="body2">{detail}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ResidentProfiles; 