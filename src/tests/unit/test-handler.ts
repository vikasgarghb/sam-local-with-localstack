'use strict';

import * as app from '../../app';
import * as chai from 'chai';

const expect = chai.expect;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler();

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("hello world");
    });
});
