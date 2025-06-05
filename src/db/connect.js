import mongoose from 'mongoose';
import "dotenv/config.js";

const connect = () => mongoose.connect(process.env.DATABASE_URL);

export default connect;