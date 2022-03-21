const app = require("./index");

const connect = require("./configs/db");

app.listen(5000, async()=>{
    try {
        await connect();
        console.log("i am lissine on port5000")
    } catch (error) {
        console.log('error:', error)
        
    }
})