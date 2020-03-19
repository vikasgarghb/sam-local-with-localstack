import { lambdaHandler } from "./app";

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await lambdaHandler();

        expect(result).not.toBeUndefined();
        expect(result).toHaveProperty('url');
        expect(result.url).toContain('http://test-bucket');
    });
});
