const mongoose =require('mongoose')

async function connect(){
   try{await mongoose.connect(process.env.CONNECTION_URL, 
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true 
    })
console.log('Successful connection')
}

catch(error){
    console.log('Failed connection')
}
}

module.exports = {connect}