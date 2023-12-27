// Import modules
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Import the cors middleware

// Create express app
const app = express();
const port = 3030;

// Use cors middleware to enable CORS
app.use(cors());

// Retrieve XML data
app.get('/getXmlData', async (req, res) => {
  try {
    const response = await fetch('https://pioneerhealthcare.my.salesforce-sites.com/apex/XMLfeedPageLinkedin');
    const data = await response.text();
    res.header('Content-Type', 'application/xml'); // Set the Content-Type header to indicate XML
    res.send(data);
  } catch (error) {
    console.error('Error fetching XML data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://167.172.134.104:${port}`);
});
