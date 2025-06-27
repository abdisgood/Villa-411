import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  Alert,
  Stack,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@mui/material';
import { Upload as UploadIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { uploadFileWithProgress, deleteFile } from '../utils/storage';

interface UploadedImage {
  url: string;
  path: string;
  name: string;
}

const ImageUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setError(null);
    setUploading(true);
    setUploadProgress(0);

    try {
      for (const file of Array.from(files)) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
          throw new Error(`${file.name} is not an image file`);
        }

        // Create a unique filename
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.name}`;
        const path = `images/gallery/${filename}`;

        // Upload with progress tracking
        const downloadURL = await uploadFileWithProgress(
          file,
          path,
          (progress) => setUploadProgress(progress)
        );

        // Add to uploaded images
        setUploadedImages(prev => [...prev, {
          url: downloadURL,
          path: path,
          name: file.name
        }]);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setError(error instanceof Error ? error.message : 'Failed to upload image');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDelete = async (image: UploadedImage) => {
    try {
      await deleteFile(image.path);
      setUploadedImages(prev => prev.filter(img => img.path !== image.path));
    } catch (error) {
      console.error('Delete error:', error);
      setError('Failed to delete image');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Image Uploader (Firebase Storage)
      </Typography>

      <Stack spacing={3}>
        <Box>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            multiple
            onChange={handleFileUpload}
            disabled={uploading}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<UploadIcon />}
              disabled={uploading}
            >
              Upload Images
            </Button>
          </label>
        </Box>

        {uploading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={uploadProgress} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Uploading... {Math.round(uploadProgress)}%
            </Typography>
          </Box>
        )}

        {error && (
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        {uploadedImages.length > 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Uploaded Images
            </Typography>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
              {uploadedImages.map((image, index) => (
                <Card key={index} sx={{ width: 200 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image.url}
                    alt={image.name}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {image.name}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(image)}
                      sx={{ mt: 1 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default ImageUploader;