import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

interface ImageMetadata {
  filename: string;
  category: string;
  comment: string;
}

const allImageFiles = [
    "20190202_203728.jpg",
    "Screenshot_20221224_090922_Facebook.jpg",
    "Screenshot_20240407_111832_Facebook.jpg",
    "Screenshot_20240829_200733_Facebook.jpg",
    "Screenshot_20241104_185559_Facebook.jpg",
    "Screenshot_20241121_160441_Facebook.jpg",
    "Screenshot_20241121_160453_Facebook.jpg",
    "Screenshot_20241121_160501_Facebook.jpg",
    "Screenshot_20241121_160506_Facebook.jpg",
    "Screenshot_20241121_160511_Facebook.jpg",
    "Screenshot_20241121_160517_Facebook.jpg",
    "Screenshot_20241121_160522_Facebook.jpg",
    "Screenshot_20241121_160531_Facebook.jpg",
    "Screenshot_20241121_160536_Facebook.jpg",
    "Screenshot_20241121_160546_Facebook.jpg",
    "Screenshot_20241121_160551_Facebook.jpg",
    "Screenshot_20241121_160600_Facebook.jpg",
    "Screenshot_20241121_160606_Facebook.jpg",
    "Screenshot_20241121_160616_Facebook.jpg",
    "Screenshot_20241121_160621_Facebook.jpg",
    "Screenshot_20241121_160628_Facebook.jpg",
    "Screenshot_20241121_160633_Facebook.jpg",
    "Screenshot_20241121_160638_Facebook.jpg",
    "Screenshot_20241121_160643_Facebook.jpg",
    "Screenshot_20241121_160649_Facebook.jpg",
    "Screenshot_20241121_160658_Facebook.jpg",
    "Screenshot_20241121_160705_Facebook.jpg",
    "Screenshot_20241121_160714_Facebook.jpg",
    "Screenshot_20241121_160719_Facebook.jpg",
    "Screenshot_20241130_215212_Facebook.jpg",
    "Screenshot_20241211_180403_Facebook.jpg",
    "Screenshot_20241212_090550_Facebook.jpg",
    "Screenshot_20241214_185345_Facebook.jpg",
    "Screenshot_20241218_085949_Facebook.jpg",
    "Screenshot_20241219_155821_Facebook.jpg",
    "Screenshot_20250101_191520_Facebook.jpg",
    "Screenshot_20250106_070206_Facebook.jpg",
    "Screenshot_20250109_211128_Facebook.jpg",
    "Screenshot_20250111_040657_Facebook.jpg",
    "Screenshot_20250111_041242_Facebook.jpg",
    "Screenshot_20250112_200138_Facebook.jpg",
    "Screenshot_20250113_151157_Facebook.jpg",
    "Screenshot_20250113_152116_Facebook.jpg",
    "Screenshot_20250113_202659_Facebook.jpg",
    "Screenshot_20250114_151139_Facebook.jpg",
    "Screenshot_20250114_164719_Facebook.jpg",
    "Screenshot_20250115_173423_Facebook.jpg",
    "Screenshot_20250116_095730_Facebook.jpg",
    "Screenshot_20250116_131631_Facebook.jpg",
    "Screenshot_20250118_101955_Facebook.jpg",
    "Screenshot_20250119_153759_Facebook.jpg",
    "Screenshot_20250120_091651_Facebook.jpg",
    "Screenshot_20250122_200451_Facebook.jpg",
    "Screenshot_20250122_202631_Facebook.jpg",
    "Screenshot_20250123_201004_Facebook.jpg",
    "Screenshot_20250123_201030_Facebook.jpg",
    "Screenshot_20250124_185740_Facebook.jpg",
    "Screenshot_20250126_110302_Facebook.jpg",
    "Screenshot_20250129_162056_Facebook.jpg",
    "Screenshot_20250131_183404_Facebook.jpg",
    "Screenshot_20250131_210721_Facebook.jpg",
    "Screenshot_20250201_022705_Facebook.jpg",
    "Screenshot_20250201_105944_Facebook.jpg",
    "Screenshot_20250201_170007_Facebook.jpg",
    "Screenshot_20250202_083752_Facebook.jpg",
    "Screenshot_20250202_150733_Facebook.jpg",
    "Screenshot_20250203_190828_Facebook.jpg",
    "Screenshot_20250204_145735_Facebook.jpg",
    "Screenshot_20250205_143331_Facebook.jpg",
    "Screenshot_20250205_222653_Facebook.jpg",
    "Screenshot_20250206_162137_Facebook.jpg",
    "Screenshot_20250208_102834_Facebook.jpg",
    "Screenshot_20250208_102919_Facebook.jpg",
    "Screenshot_20250208_170505_Facebook.jpg",
    "Screenshot_20250209_152031_Facebook.jpg",
    "Screenshot_20250209_155252_Facebook.jpg",
    "Screenshot_20250212_091648_Facebook.jpg",
    "Screenshot_20250213_181407_Facebook.jpg",
    "Screenshot_20250221_200514_Facebook.jpg",
    "Screenshot_20250222_182207_Facebook.jpg",
    "Screenshot_20250223_182936_Facebook.jpg",
    "Screenshot_20250223_183110_Facebook.jpg",
    "Screenshot_20250223_213212_Facebook.jpg",
    "Screenshot_20250226_150857_Facebook.jpg",
    "Screenshot_20250226_202942_Facebook.jpg",
    "Screenshot_20250227_212459_Facebook.jpg",
    "Screenshot_20250227_230643_Facebook.jpg",
    "Screenshot_20250228_125149_Facebook.jpg",
    "Screenshot_20250228_135426_Facebook.jpg",
    "Screenshot_20250228_172947_Facebook.jpg",
    "Screenshot_20250228_192140_Facebook.jpg",
    "Screenshot_20250301_091720_Facebook.jpg",
    "Screenshot_20250301_111306_Facebook.jpg",
    "Screenshot_20250302_104556_Facebook.jpg",
    "Screenshot_20250302_105053_Facebook.jpg",
    "Screenshot_20250302_105153_Facebook.jpg",
    "Screenshot_20250621_145846_Facebook.jpg",
    "Screenshot_20250621_215441_Facebook.jpg",
    "Screenshot_20250626_145317_Facebook.jpg"
  ];

const GalleryPage = () => {
  const [metadata, setMetadata] = useState<Record<string, ImageMetadata>>({});

  useEffect(() => {
    fetch("/images/inspiration/image_metadata.json")
      .then((response) => response.json())
      .then((data: ImageMetadata[]) => {
        const metadataMap = data.reduce((acc, item) => {
          acc[item.filename] = item;
          return acc;
        }, {} as Record<string, ImageMetadata>);
        setMetadata(metadataMap);
      })
      .catch((error) => console.error("Error fetching image metadata:", error));
  }, []);

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth={false}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Inspiration Gallery
        </Typography>
        <ImageList variant="masonry" cols={4} gap={16}>
          {allImageFiles.map((filename) => {
            const item = metadata[filename];
            return (
              <ImageListItem key={filename}>
                <img
                  src={`/images/inspiration/${filename}?w=248&fit=crop&auto=format`}
                  srcSet={`/images/inspiration/${filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item?.comment || filename}
                  loading="lazy"
                />
                {item && (
                  <ImageListItemBar
                    title={item.category}
                    subtitle={<span>{item.comment}</span>}
                    position="below"
                  />
                )}
              </ImageListItem>
            );
          })}
        </ImageList>
      </Container>
    </Box>
  );
};

export default GalleryPage; 