import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Iron Man endpoint
app.get('/ironMan', (req, res) => {
  res.send('Iron Man');
});

// Optional: start server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;