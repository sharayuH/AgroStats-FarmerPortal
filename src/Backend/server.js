const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/demoDB';
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> {
console.log("Mongodb connected! ")
});