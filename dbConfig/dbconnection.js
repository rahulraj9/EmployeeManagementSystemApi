const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/Empdb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log("fullfill");
}).catch((e) => {
    console.log("noconnection");
})