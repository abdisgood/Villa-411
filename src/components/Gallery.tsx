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
            <ImageListItem key={item.filename}>
              <img
                src={`/images/inspiration/${item.filename}?w=248&fit=crop&auto=format`}
                srcSet={`/images/inspiration/${item.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.comment}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box sx={{ pt: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/inspiration"
          >
            View Full Gallery
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery; 