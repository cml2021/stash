/* eslint-disable no-unused-vars */
const supertest = require('supertest');
const { app } = require('../../app');
const { db } = require('../../models/index');

describe('test the POST /items endpoint', () => {
  const testDb = db;

  beforeAll(async () => {
    await testDb.sequelize.sync({ force: true });
  });

  it('should succeed when sent a valid request', async () => {
    const item = {
      name: 'The Road',
      type: 'Book',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(201);
    expect(response.body.name).toBe(item.name);
    expect(response.body.type).toBe(item.type);
  });

  it('should fail when the name is an empty string', async () => {
    const item = {
      name: '',
      type: 'Book',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(400);
  });

  it('should fail when the name is null', async () => {
    const item = {
      name: null,
      type: 'Book',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(400);
  });

  it('should fail when the name is missing', async () => {
    const item = {
      type: 'Book',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(400);
  });

  it('should fail when the name is > 255 characters', async () => {
    const item = {
      name: 'vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit',
      type: 'Book',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(400);
  });

  it('should fail when the type is missing', async () => {
    const item = {
      name: 'The Road',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(400);
  });

  it('should fail when the type is not recognized', async () => {
    const item = {
      name: 'The Road',
      type: 'Manuscript',
    };

    const response = await supertest(app)
      .post('/items')
      .send(item)
      .expect(400);
  });

  afterAll(async () => {
    await testDb.sequelize.close();
  });
});
