const uri = 'mongodb+srv://anasabdullah:anas@cluster0.cmkxcsx.mongodb.net/SpareIT?retryWrites=true&w=majority';
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

mongoose.set('strictQuery', false);

const db = async () => {
    mongoose.connect(uri).then(() => {
        console.log('Connected to MongoDB Atlas');
    }).catch((err) => console.log(err))
}

// mongoose.set('strictQuery', false);

// const db = async () => {
//     mongoose.connect(process.env.MONGO_URL).then(
//         () => console.log(`Connection with ${process.env.dbName} secured!`)
//     ).catch(
//         (err) => console.log(err)
//     )
// }



module.exports = db