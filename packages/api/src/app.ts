import express from 'express';
import cors from 'cors';
import apiRoutes from './routes';

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// API Routes
app.use('/api', apiRoutes); // Prefix all API routes with /api

// Simple root route
app.get('/', (req, res) => {
  res.send('Welcome to the Security Guard Management System API!');
});

// Error handling middleware (basic example)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;