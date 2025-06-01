import mongoose from 'mongoose';

const connect = () => mongoose.connect('mongodb+srv://gkazantzis96:XDxoHibVpV3gHHZP@gymrat.eqzdl0n.mongodb.net/?retryWrites=true&w=majority&appName=gymrat');

export default connect;