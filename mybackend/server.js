const mongoose = require('mongoose');
const app = require('./app');

const url = 'mongodb+srv://kavee:abcd1234@cluster0.h97u6h4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB error:', error);
    }
};

connect();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Node server is listening on port ${PORT}`);
});
