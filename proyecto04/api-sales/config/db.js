const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1/enterprise', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Mongodb is Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
mongoose.set('strictQuery', false);
module.exports = connectDB;
// module.exports = mongoose;
