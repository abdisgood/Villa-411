import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8JgTy9ZdBsfQ5ljsr8PHD2ALLiejRcvs",
  authDomain: "villa-401-motor-city.firebaseapp.com",
  projectId: "villa-401-motor-city",
  storageBucket: "villa-401-motor-city.firebasestorage.app",
  messagingSenderId: "1034152092018",
  appId: "1:1034152092018:web:1ee8f9b6b4b4e34829bdeb",
  measurementId: "G-6B24WWWC3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadImage(filePath, storagePath) {
  try {
    const fileBuffer = await fs.readFile(filePath);
    const storageRef = ref(storage, storagePath);
    
    const metadata = {
      contentType: 'image/jpeg', // Adjust based on file type
    };
    
    const snapshot = await uploadBytes(storageRef, fileBuffer, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log(`✓ Uploaded ${path.basename(filePath)} to ${storagePath}`);
    return { path: storagePath, url: downloadURL };
  } catch (error) {
    console.error(`✗ Failed to upload ${filePath}:`, error.message);
    return null;
  }
}

async function migrateImages() {
  console.log('Starting image migration to Firebase Storage...\n');
  
  const directories = [
    {
      source: path.join(__dirname, '../public/images/inspiration'),
      target: 'images/inspiration',
      description: 'Inspiration Gallery Images'
    },
    {
      source: path.join(__dirname, '../public/images/residentProfiles'),
      target: 'images/residents',
      description: 'Resident Profile Images'
    }
  ];
  
  const results = [];
  
  for (const dir of directories) {
    console.log(`\nMigrating ${dir.description}...`);
    
    try {
      const files = await fs.readdir(dir.source);
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );
      
      console.log(`Found ${imageFiles.length} images in ${dir.source}`);
      
      for (const file of imageFiles) {
        const sourcePath = path.join(dir.source, file);
        const targetPath = `${dir.target}/${file}`;
        
        const result = await uploadImage(sourcePath, targetPath);
        if (result) {
          results.push({
            filename: file,
            localPath: sourcePath,
            firebasePath: result.path,
            url: result.url
          });
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dir.source}:`, error.message);
    }
  }
  
  // Save migration results
  const resultsPath = path.join(__dirname, 'migration-results.json');
  await fs.writeFile(resultsPath, JSON.stringify(results, null, 2));
  
  console.log(`\n✅ Migration complete!`);
  console.log(`Total images migrated: ${results.length}`);
  console.log(`Results saved to: ${resultsPath}`);
}

// Run migration
migrateImages().catch(console.error);