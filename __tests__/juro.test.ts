import Juro from "../src";

it('fetch should be called with the correct url and header', async () => {
	const mockFetch = jest.fn();
	global.fetch = mockFetch;
	mockFetch.mockResolvedValue({
		headers: new Headers({
			'content-type': 'application/json',
		}),
		ok: true,
		status: 200,
		statusText: 'OK',
		type: 'basic',
		json: jest.fn().mockResolvedValue({
			message: 'ok',
		}),
	});
	const apiKey = 'apiKey';

	const juro = Juro(apiKey);
	const result = await juro.health.healthCheck();

	expect(result).toEqual({
		message: 'ok',
	});
	const [input, init] = mockFetch.mock.calls[0];
	expect(input).toEqual('https://api.juro.com/v3/health');
	expect(init).toMatchObject({
		headers: new Headers({
			'accept': 'application/json',
			'x-api-key': apiKey,
		}),
		method: 'GET',
	});
});
