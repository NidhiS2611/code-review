const aiservice = require('../services/ai.services')

module.exports.getreview = async(req,res)=>{
    try{
        const code = req.body.code  
        if(!code){
            return res.status(400).send("Code is required");
        }
        const result = await aiservice.getresponse(code)
        
        res.status(200).send( result)
        
    }
    catch(err){
        console.error("Error generating response:", err);
        res.status(500).send("Internal Server Error");
    }


}
