import { describe, it, expect } from 'vitest';
import request from 'supertest';
import server from '../../index.js';

describe('Captain America Route', () => {
  it('should return "Captain America" when accessing /captainAmerica', async () => {
    const response = await request(server)
      .get('/captainAmerica')
      .expect(200);
    
    expect(response.text).toBe('Captain America');
  });
});

// Cleanup to prevent Vitest from hanging
process.on('exit', () => {
  server.close();
});