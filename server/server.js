const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/test-post', (req, res) => {
    console.log('Received data:', req.body);
    res.status(200).json({ message: 'Data received', data: req.body });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});