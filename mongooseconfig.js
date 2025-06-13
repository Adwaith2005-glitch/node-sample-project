var mongoose=require('mongoose');
function connectToDatabase(){
    mongoose.connect('mongodb+srv://adwaithkarthika:SloWnEtWork409295@cluster0.cnd5dhl.mongodb.net/form')
        .then(()=>{
            console.log("connected to database");
        })
    }

module.exports=connectToDatabase;