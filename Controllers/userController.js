const userModel = require('../Models/userModel')

class userController{
    static async getAllUser(req,res){
        const user=await userModel.findAll();
        console.log("user");
        res.json({
            status: 200,
            message:"All User Get Successfully",
            user
        })
    }

    static async getOneUser(req,res){
        const user=await userModel.findOne({
            where:{
                id:req.params.id
            }
        })
        res.json({
            status: 200,
            message:"One User Get Successfully",
            user
        })
    }

    static async createUser(req,res){
        try{
            const user = await userModel.create(req.body);
            if(user){
                res.json({
                    status: 201,
                    message:"User Created Successfully",
                    user
                })
            }else{
                res.json({
                    status: 400,
                    message:"User Not Created",
                })
            }
        }catch(err){
            res.json({
                status:500,
                message:err.message,
            })
        }
    }

    static async updateUser(req,res){
        try{
            console.log("req.body: " , req.body);
            const user = await userModel.update(req.body,{
                where:{
                    id:req.query.id,
                }
            });
            console.log(user.length);
            if(user[0]){
                res.json({
                    status: 200,
                    message:"User Updated Successfully",
                    user
                })
            }else{
                res.json({
                    status: 400,
                    message:"User Not Updated",
                })
            }
        }catch(err){
            res.json({
                status: 500,
                message:err.message
            })
        }
    }

    static async deleteUser(req,res){
        const user = await userModel.destroy({
            where:{
                id:req.query.id,
            }
        });
        res.json({
            status: 200,
            message:"User Deleted Successfully",
            user
        })
    }
}

module.exports=userController;