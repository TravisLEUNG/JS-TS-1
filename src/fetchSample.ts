export const getSample = (url: string) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log('data', data))
        .catch((error) => console.error('error', error));
};

export const postPutDeleteSample = (
    url: string,
    data: any,
    method: 'POST' | 'PUT' | 'DELETE'
) => {
    // if PUT or DELETE, the url need to append '/:id'
    const newURL = method === 'POST' ? url : url.replace(':id', data.id);
    fetch(newURL, {
        method: method, // POST, PUT, DELETE
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('data:', data);
        })
        .catch((error) => {
            console.error('error:', error);
        });
};
