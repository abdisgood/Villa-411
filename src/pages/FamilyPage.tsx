import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  useTheme,
} from "@mui/material";

// Define the family members with their detailed profiles
const familyMembers = [
  {
    name: "Ameer Hamza Hasan",
    role: "Family Patriarch | Retired Executive | Values Heritage & Simplicity",
    mainImage: "/images/residentProfiles/AmeerHamzaHasan.png",
    personality: {
      title: "Personality & Preferences",
      points: [
        "Appreciates timeless, functional spaces over opulence.",
        "Enjoys reading and reflection—quiet corners or window-facing lounge spaces are ideal.",
        "A strong preference for natural materials, especially wood, stone, and earthy finishes that convey legacy and restraint.",
        "Likely to prefer a warm, grounded color palette.",
        "Interested in cultural artifacts or calligraphy to be integrated subtly into the decor."
      ]
    },
    designConsiderations: {
      title: "Design Considerations",
      points: [
        "A study/library space or reading nook in natural light.",
        "Ergonomic seating, clear circulation pathways.",
        "A direct view or access to the garden is likely to be valued for morning routines."
      ]
    }
  },
  {
    name: "Mahnaz Hasan",
    role: "Family Matriarch | Life Coach | Homekeeper & Host",
    mainImage: "/images/residentProfiles/MahnazHasan.png",
    personality: {
      title: "Personality & Preferences",
      points: [
        "Warm, nurturing, and deeply involved in the household's emotional and functional rhythm.",
        "Manages daily household affairs, including food preparation and hospitality.",
        "Passionate about mindful living, wellness, and spiritual balance."
      ]
    },
    designConsiderations: {
      title: "Design Considerations",
      points: [
        "A kitchen space that combines beauty with intuitive workflow—ideal for both cooking and casual interaction.",
        "A multi-use room for life coaching, reading, and quiet reflection, ideally with soft acoustics and cozy lighting.",
        "Spaces that are warm, layered, and emotionally intelligent—incorporating calming tones, natural light, and a hint of traditional textures.",
        "Prayer space and wellness corner with storage for spiritual items and cushions."
      ]
    }
  },
  {
    name: "Khadija Hasan",
    role: "Daughter | CEO of Krispr Agriculture LLC | Global Thinker",
    mainImage: "/images/residentProfiles/KhadijaHasan.png",
    personality: {
      title: "Personality & Preferences",
      points: [
        "Dynamic and driven, with an entrepreneurial spirit focused on sustainability and future-forward living.",
        "Leads a company in vertical farming and agri-tech, with a deep appreciation for clean, minimal, and sustainable design.",
        "Favors serene yet modern interiors that evoke mental clarity and innovation."
      ]
    },
    designConsiderations: {
      title: "Design Considerations",
      points: [
        "A modern bedroom suite that's serene, minimal, and tech-integrated.",
        "Work-from-home corner or flexible thinking space with a standing desk option.",
        "Strong preference for clean lines, matte textures, and modular layouts.",
        "Subtle biophilic design elements (indoor planters, natural textures) may resonate well."
      ]
    }
  }
];

// All available images in the residentProfiles folder
const familyGalleryImages = [
  "/images/residentProfiles/AmeerHamzaHasan.png",
  "/images/residentProfiles/IMG-20230313-WA0005.jpg",
  "/images/residentProfiles/IMG-20230424-WA0037.jpg",
  "/images/residentProfiles/IMG-20230425-WA0000.jpg",
  "/images/residentProfiles/IMG-20230426-WA0000.jpg",
  "/images/residentProfiles/IMG-20230430-WA0001.jpg",
  "/images/residentProfiles/IMG20221120172237.jpg",
  "/images/residentProfiles/IMG20231122163628.jpg",
  "/images/residentProfiles/KhadijaHasan.png",
  "/images/residentProfiles/MahnazHasan.png",
];

const FamilyPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, backgroundColor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          The Hasan Family
        </Typography>

        {/* Family Design Ethos */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 6,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Family Design Ethos
          </Typography>
          <Typography variant="body1" paragraph>
            Together, the family reflects a rich blend of tradition, purpose, and thoughtful modernism. 
            The design direction should balance:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1">• Heritage with clarity</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1">• Hospitality with privacy</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1">• Serenity with functionality</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" paragraph>
            They will benefit from:
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>
              <Typography variant="body1">
                Layered lighting (to support different moods and tasks)
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Zoning between shared vs. personal spaces
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Soft transitions between indoors and outdoors
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                A neutral base palette with thoughtful accents reflecting their personal journeys
              </Typography>
            </li>
          </ul>
        </Paper>

        {/* Individual Profiles */}
        {familyMembers.map((member, index) => (
          <Box key={member.name} sx={{ mb: 8 }}>
            <Card elevation={3} sx={{ overflow: "hidden" }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={member.mainImage}
                    alt={member.name}
                    sx={{ 
                      objectFit: "cover",
                      minHeight: { xs: 300, md: 400 }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      gutterBottom
                      sx={{ mb: 3 }}
                    >
                      {member.role}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        {member.personality.title}
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {member.personality.points.map((point, idx) => (
                          <li key={idx} style={{ marginBottom: 8 }}>
                            <Typography variant="body1">{point}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        {member.designConsiderations.title}
                      </Typography>
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {member.designConsiderations.points.map((point, idx) => (
                          <li key={idx} style={{ marginBottom: 8 }}>
                            <Typography variant="body1">{point}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Box>
        ))}

        {/* Family Gallery */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Family Gallery
          </Typography>
          <Grid container spacing={2}>
            {familyGalleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`Family photo ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FamilyPage;