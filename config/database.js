const mongoose=require('mongoose');

const connectDatabase= ()=>{
    mongoose.connect(`mongodb+srv://arpanjain:${process.env.MONGO_PASS}@cluster0.zezkw.mongodb.net/${process.env.Collection}?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    }).then(con=>{
        console.log(`mongoDB Connected`)
    })
}

module.exports=connectDatabase