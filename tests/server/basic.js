const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../server');

chai.use(chaiHttp);

describe('Hello World!', () => {
  it('should return hello', () =>
    chai
      .request(server)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('hello!');
      }));
});
