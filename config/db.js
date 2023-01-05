const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://beno:benobeno@cluster0.lemar1z.mongodb.net/test",{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`MongoDB connected`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;