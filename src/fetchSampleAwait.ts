export const getSample = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
    } catch (error) {
        console.error('error', error);
    }
};

export const postPutDeleteSample = async (
    url: string,
    data: any,
    method: 'POST' | 'PUT' | 'DELETE'
) => {
    try {
        const newURL = method === 'POST' ? url : url.replace(':id', data.id);
        const response = await fetch(newURL, {
            method: method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        const responseData = await response.json();
        console.log('data:', responseData);
    } catch (error) {
        console.error('error:', error);
    }
};
