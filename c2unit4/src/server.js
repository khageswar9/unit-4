const app = require("./index");

const connect = require("./configs/db");

app.listen(5000,async ()=>{
    try {
        
    } catch (error) {
        console.log('error:', error)
    }
    console.log("i am listing on port 5000");
})