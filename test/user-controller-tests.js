const chai = require('chai'),
  chaiHttp = require('chai-http'),
  expect = chai.expect;

const host = 'http://127.0.0.1:5000';
chai.use(chaiHttp);

describe('User controller tests', () => {
  describe('Get verb tests', () => {
    it('should return a list of items because db always has some data', done => {
      chai
        .request(host)
        .get('/api/user')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          expect(res).to.be.json;
          expect(res.body[0].id).to.equal('1');
          expect(res.body[0].links.details).to.contain('/api/user/1');
          expect(res.body[0].updatedAt).to.be.undefined;
          done(); // <= Call done to signal callback end
        });
    });
    it('should return first user using id', done => {
      const userid = '1';
      chai
        .request(host)
        .get(`/api/user/${userid}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          expect(res).to.be.json;
          expect(res.body[0].updatedAt).to.not.be.null;
        });
      done();
    });
  });
});
