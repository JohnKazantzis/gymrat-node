import app from './server.js';
import connect from './db/connect.js';

try {
    const connection = await connect();
    app.listen(3001, () => {
        console.log('App running on http://localhost:3001');
    })
} catch(e) {
    console.log('Error: ', e);
}