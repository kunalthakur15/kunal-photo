const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Google Drive API setup
const drive = google.drive('v3');
const FOLDER_ID = '1A9F6ZJIyZMHzj7Aswtmx6GJuBrFLm5Ma';

// Route to get folder contents
app.get('/api/folder-contents', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name, mimeType)',
      key: process.env.GOOGLE_API_KEY
    });

    const files = response.data.files.map(file => ({
      id: file.id,
      name: file.name,
      src: `https://drive.google.com/uc?export=view&id=${file.id}`,
      alt: `Photography by Kunal - ${file.name}`
    }));

    res.json(files);
  } catch (error) {
    console.error('Error fetching folder contents:', error);
    res.status(500).json({ error: 'Failed to fetch folder contents' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 