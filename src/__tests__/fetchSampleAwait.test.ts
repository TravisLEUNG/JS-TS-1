import { getSample, postPutDeleteSample } from '../fetchSampleAwait';

describe('sampleFunctions', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('getSample', () => {
        it('should call fetch with the given url', async () => {
            const mockResponse = { data: 'sample data' };
            const mockJsonPromise = Promise.resolve(mockResponse);
            const mockFetchPromise = Promise.resolve({
                json: () => mockJsonPromise,
            });
            global.fetch = jest.fn().mockImplementation((url: string) => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ data: 'sample data' }),
                }) as Promise<Response>;
            });

            await getSample('https://example.com');

            expect(global.fetch).toHaveBeenCalledWith('https://example.com');
        });
    });

    describe('postPutDeleteSample', () => {
        it('should call fetch with the given url and data for POST method', async () => {
            const mockResponse = { data: 'sample data' };
            const mockJsonPromise = Promise.resolve(mockResponse);
            const mockFetchPromise = Promise.resolve({
                json: () => mockJsonPromise,
            });
            global.fetch = jest.fn().mockImplementation((url: string) => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ data: 'sample data' }),
                }) as Promise<Response>;
            });

            const data = { name: 'John Doe' };
            await postPutDeleteSample('https://example.com', data, 'POST');

            expect(global.fetch).toHaveBeenCalledWith('https://example.com', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
        });

        it('should call fetch with the given url and data for PUT method', async () => {
            const mockResponse = { data: 'sample data' };
            const mockJsonPromise = Promise.resolve(mockResponse);
            const mockFetchPromise = Promise.resolve({
                json: () => mockJsonPromise,
            });
            global.fetch = jest.fn().mockImplementation((url: string) => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ data: 'sample data' }),
                }) as Promise<Response>;
            });

            const data = { id: 1, name: 'John Doe' };
            await postPutDeleteSample('https://example.com/:id', data, 'PUT');

            expect(global.fetch).toHaveBeenCalledWith('https://example.com/1', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
        });

        it('should call fetch with the given url and data for DELETE method', async () => {
            const mockResponse = { data: 'sample data' };
            const mockJsonPromise = Promise.resolve(mockResponse);
            const mockFetchPromise = Promise.resolve({
                json: () => mockJsonPromise,
            });
            global.fetch = jest.fn().mockImplementation((url: string) => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ data: 'sample data' }),
                }) as Promise<Response>;
            });

            const data = { id: 1 };
            await postPutDeleteSample(
                'https://example.com/:id',
                data,
                'DELETE'
            );

            expect(global.fetch).toHaveBeenCalledWith('https://example.com/1', {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
        });
    });
});
