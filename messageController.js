Message = require('./messageModel')

exports.index = (req,res) => {
    Message.get((err,messages) => {
        if(err){
            res.json({
                status:"error",
                message: "err"
            })

        }
        else
        {
            res.json({
                status: "success",
                message: "messages retrieved successfuly!",
                data: messages
            })
        }
    })
};

exports.write = (req,res) => {
    var message = new Message();
    message.owner = req.body.owner;
    message.body = req.body.body;
    message.save((err)=>{
        if(err){
            res.json({
                status:"error",
                message: "err"
            })
        }
        else
        {
            res.json({
                status: "success",
                message:"message created successful",
                data: message
            })
        }
    })    
}

exports.delete = (req, res) => {
    Message.remove({
        _id: req.params.message_id
    },  (err, Message) => {
        if (err)
            res.send(err);
        else
        {
            res.json({
                status: "success",
                message: "Message deleted"        
            })
        }
    })
}

exports.edit = (req,res) => {
    // console.log(req.params,"HHEEYY")
    Message.findById(req.params.id, (err,message)=>{
        if(err)
            res.send(err)
        console.log(message,"MESSAGE")
        message.body = req.body.body;
        message.save((err,result)=>{
            if(err)
                res.json(err);
            else
                res.json({
                    message: "Message updated",
                    data: message
                })
        })
    })
}