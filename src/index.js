import app from './server.js';
import connect from './db/connect.js';
import "dotenv/config.js";

const PORT = process.env.PORT || 3001;

try {
    await connect();
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
    })
} catch(e) {
    console.log(e);
}