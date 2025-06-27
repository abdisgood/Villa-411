# Firebase Setup and Deployment Guide

This project is integrated with Firebase for hosting and storage.

## Prerequisites

- Node.js and npm installed
- Firebase CLI installed (already added to the project)
- Access to the Firebase project: `villa-401-motor-city`

## Initial Setup

1. **Login to Firebase**
   ```bash
   npx firebase login
   ```

2. **Initialize Firebase (already done)**
   The project is already configured with:
   - `.firebaserc` - Project configuration
   - `firebase.json` - Hosting configuration
   - `src/config/firebase.ts` - Firebase SDK configuration

## Deployment

### Deploy Everything
```bash
npm run deploy
```

### Deploy Only Hosting
```bash
npm run deploy:hosting
```

### Manual Deployment Steps
```bash
# Build the project
npm run build

# Deploy to Firebase
npx firebase deploy
```

## Firebase Storage Usage

### Upload Images
Use the `ImageUploader` component or the utility functions:

```typescript
import { uploadFile, uploadFileWithProgress } from './utils/storage';

// Simple upload
const url = await uploadFile(file, 'images/gallery/photo.jpg');

// Upload with progress
const url = await uploadFileWithProgress(
  file, 
  'images/gallery/photo.jpg',
  (progress) => console.log(`Upload ${progress}% complete`)
);
```

### List Files
```typescript
import { listFiles } from './utils/storage';

const files = await listFiles('images/gallery');
// Returns: [{ name: 'photo.jpg', url: 'https://...' }, ...]
```

### Delete Files
```typescript
import { deleteFile } from './utils/storage';

await deleteFile('images/gallery/photo.jpg');
```

## Storage Structure

Recommended directory structure in Firebase Storage:
```
/images
  /gallery         - General gallery images
  /inspiration     - Inspiration images
  /residents       - Resident profile photos
/documents         - PDF and other documents
```

## Security Rules

Update Firebase Storage rules in Firebase Console:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read access to all users
    match /{allPaths=**} {
      allow read: if true;
      // Allow write access only to authenticated users (when auth is implemented)
      allow write: if false; // Change this when you add authentication
    }
  }
}
```

## Environment Variables (Optional)

For enhanced security, you can use environment variables:

1. Create a `.env` file (already in .gitignore)
2. Copy from `.env.example` and fill in your values
3. Update `src/config/firebase.ts` to use environment variables:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "your-api-key",
  // ... other config
};
```

## Monitoring

- View deployment: https://villa-401-motor-city.web.app
- Firebase Console: https://console.firebase.google.com/project/villa-401-motor-city
- Hosting Dashboard: https://console.firebase.google.com/project/villa-401-motor-city/hosting

## Troubleshooting

1. **Build errors**: Run `npm run build` locally to check for TypeScript errors
2. **Deployment fails**: Ensure you're logged in with `npx firebase login`
3. **Storage errors**: Check Firebase Storage rules and quotas
4. **404 errors**: The `firebase.json` is configured for single-page apps

## Next Steps

1. Upload existing images to Firebase Storage
2. Update Gallery components to fetch from Firebase Storage
3. Add authentication for secure uploads
4. Set up Firebase Functions for image processing (optional)