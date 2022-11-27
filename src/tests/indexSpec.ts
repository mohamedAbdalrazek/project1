//here is our tests for the api;

//testing if the server can be initialized without problems

import sharp from 'sharp';
import request from 'supertest';
import app from '../index';

describe('Server', () => {
  it('Server initialized correctly', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });

  it('api is working ', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });
});
//Image resizing tests

describe('image resizing', () => {
  it('image resizing for an existing file  ', (done) => {
    request(app)
      .get('/image?filename=b&height=200&width=200')
      .expect(302)
      .end((error) => (error ? done.fail(error) : done()));
  });
  it('image resizing for non-existing file ', (done) => {
    request(app)
      .get('/image?filename=j&height=200&width=200')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });

  // its testing image processing function
  it('image resizing for a valid query ', function () {
    expect(async () => {
      await sharp(`images/${'a'}.jpg`)
        .resize(200, 100)
        .toFile(`public/resimg/Resized${100}_${200}${'a'}.jpg`);
    }).not.toThrow();
  });
});
