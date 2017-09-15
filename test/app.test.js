const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const fixtures = require('./fixtures')

describe('test CRUD_gRecipe- ', () => {
  before ( (done) => {
    knex.migrate.latest()
      .then( () => {
        return knex.seed.run();
      }).then(() => done())
  });

  it('Lists all records', (done) => {
    request(app)
      .get('/api/siteusers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(fixtures.siteusers);
        console.log(response.body);
        done();
      });
  });

  it('show one record by user_id', (done) => {
    request(app)
      .get('/api/siteusers/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(fixtures.siteusers[0]);
        done();
      })
  });

  it('Creates a record', (done) => {
    request(app)
    .post('/api/siteusers')
    .send(fixtures.siteuseradd)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      fixtures.siteuseradd.user_id = response.body.user_id;
      expect(response.body).to.deep.equal(fixtures.siteuseradd);
      done();
    })
  });

  it('Updates a record', (done) => {
    fixtures.siteuserachange.user_id = 1
    request(app)
    .put('/api/siteusers/1')
    .send(fixtures.siteuserachange)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      expect(response.body).to.deep.equal(fixtures.siteuserachange);
      done();
    })
  });

  it('Deletes a record', (done) => {
    request(app)
    .delete('/api/siteusers/2')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('object');
      expect(response.body).to.deep.equal({
      delete: true
      });
      done();
    })
  });
});
