import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/server';

describe('Iron Man Endpoint', () => {
  it('should return "Iron Man" when accessing /ironMan', async () => {
    const response = await request(app).get('/ironMan');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Iron Man');
  });
});