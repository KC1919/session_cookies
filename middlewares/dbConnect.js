const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });

        console.log("Connected to Database");
        
    } catch (error) {
        console.log("Internal server error");
        console.error(error);
        process.exit(1);
    }
}

module.exports=connectDB;