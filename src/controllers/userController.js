const express=require("express")
const userService=require("../services/userService");
const routes=express.Router();

const controller={    
    getUsers:(async (req,res)=>{
        try{
            const users=await  userService.getUsers();
            res.status(200).json(users);
        }catch (err){
            res.status(500).json({error:err.message});
        }
    }),
    getUserById:async(req,res)=>{
        const user=await userService.getUserById(req.params["id"]);
        res.status(200).json(user);
    },
    postUser:async(req,res)=>{
        const userSave=await userService.postUser(req.body)
        res.status(200).json(userSave)
    },
    editUser:async(req,res)=>{
        res.status(200).send( await userService.putUser(req.body,req.params["id"]))
    },
    deleteUser:async(req,res)=>{
        res.status(200).json({"deleted":await userService.deleteUserById(req.params["id"])})
    }


};
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Returns a list of users
 */
routes.get("/user",controller.getUsers);
/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: object
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Returns the user data
 */
routes.get("/user/:id",controller.getUserById);
routes.post("/user",controller.postUser);
routes.put("/user/:id",controller.editUser);
routes.delete("/user/:id",controller.deleteUser);
module.exports=routes;