import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Captain America');
});

export default router;