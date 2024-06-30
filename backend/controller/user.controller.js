import User from "../model/user.model.js";
export const signup = async(request,res) =>{
    
    try{
        const { fullname, email, password} = request.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists!"});
        }
        const createdUser = new User({
            fullname : fullname,
            email: email,
            password: password
        });
        await createdUser.save();
        res.status(201).json({ message: "User created successfully",user:{
            fullname: createdUser.fullname,
            email: createdUser.email
        }});
  

    }
    catch(error)
    {
        console.log(error);
       
        res.status(500).json({message:"Internal server error"});
    }
};

export const login = async(request,res)=>{
    try{
        const { email, password} = request.body;
        const user = await User.findOne({email});
        const isMatch = await User.findOne({password});
        if(!user || !isMatch)
            {
                return res.status(400).json({message:"Invalid username or password"});

            }
            else{
                return res.status(200).json({message:"Logged in successfully",user:{
                   
                    fullname: user.fullname,
                    email: user.email
                }});
            }

    }
    catch(error)
    {
     console.log("Error: "+error.message);
     return res.status(500).json({message:"Internal server error"});
    }
}