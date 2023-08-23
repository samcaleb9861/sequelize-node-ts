import express,{Request,Response,NextFunction} from 'express';
import User from '../models/userModel';

const router = express.Router();

//create data
router.post("/create",async(req:Request,res:Response)=>{
    try{
        const newUser = await User.create(req.body);
        res.json(newUser);
    }catch(error){
        res.status(500).json({message:'Error creating the user'});
    }
})

//get all data
router.get("/getAll",async(req:Request,res:Response)=>{
    console.log("inside get")
    try{
        const usersList = await User.findAll();
        console.log("user list",usersList)
        res.json(usersList);
    }catch(error){
        res.status(500).json({message:"Error getting the user"})
    }
})

//update user by id
router.put("/:id",async(req:Request,res:Response)=>{
    console.log("update route");
    const { id } = req.params;
    try{
        const [rowsUpdated,[updatedUser]] = await User.update(req.body,{
            where:{ id },
            returning:true,
        });
        res.json(updatedUser);
        // rowsUpdated captures the number of rows updated, if it is zero the id given is not available in the table
        console.log("rowsUpdated",rowsUpdated);
    }catch(error){
        res.status(500).json({message:"Error updating the user"});
    }
});

//delete user by id
router.delete("/:id",async(req:Request,res:Response)=>{
    const {id} = req.params;
    try{
        const deletedRows = await User.destroy({ where :{ id }});
        res.json({deletedRows});
    }catch(error){
        res.status(500).json({message:"Error deleting the user"});
    }
});

export default router;