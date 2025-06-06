import express from 'express';
import captainAmericaRoutes from './src/routes/captainAmerica.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Mount routes
app.use('/captainAmerica', captainAmericaRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;