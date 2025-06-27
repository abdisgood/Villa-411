import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface ImageMetadata {
  filename: string;
  category: string;
  comment: string;
}

const Gallery = () => {
  const [images, setImages] = useState<ImageMetadata[]>([]);

  useEffect(() => {
    fetch("/images/inspiration/image_metadata.json")
      .then((response) => response.json())
      .then((data) => setImages(data.slice(0, 6))) // Preview 6 images
      .catch((error) => console.error("Error fetching image metadata:", error));
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: "secondary.main" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Inspiration
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item) => (
            <ImageListItem 
              key={item.filename}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                },
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
                '&:hover .overlay': {
                  opacity: 1,
                }
              }}
            >
              <img
                src={`/images/inspiration/${item.filename}?w=248&fit=crop&auto=format`}
                srcSet={`/images/inspiration/${item.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.comment}
                loading="lazy"
                style={{
                  transition: 'transform 0.3s ease-in-out',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  padding: 2,
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.comment}
                </Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
        <Box sx={{ pt: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/inspiration"
            sx={{
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              }
            }}
          >
            View Full Gallery
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery; 