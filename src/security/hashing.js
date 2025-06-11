import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const generateHash = password => bcrypt.hash(password, SALT_ROUNDS);
const compareHash = (password, hash) => bcrypt.compare(password, hash);

export { SALT_ROUNDS, generateHash, compareHash }