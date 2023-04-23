import UserModel from "../Models/UserSchema.js";
import bcrypt from "bcrypt"
class UserController {


static userRegistration = async(req,res)=>{
    const { firstName,  email_id, password, confirmPassword } = req.body
    if (!firstName || ! email_id || !password || !confirmPassword) {
        res.json({ error: "fill all the detail" })
    }
    try {
        const preuser = await UserModel.findOne({  email_id:  email_id })
        if (preuser) {
            
            res.json({ status: 404 })
        }
        else {
            if (password === confirmPassword) {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                const FinalUser = new UserModel({
                    firstName: firstName,
                    email_id:  email_id,
                    password: hashPassword,
                    confirmPassword: hashPassword
                })

                let storeData = await FinalUser.save()
                res.json({ status: 201, storeData })
                console.log(storeData)
              
            }
            else {
                res.json({ error: "password does not match" })
            }}}
   
    catch (error) {
        res.status(422).json(error)
        console.log("error")
    }}




    static login = async(req,res)=>{
        const { email_id, password } = req.body;
        if (!email_id || !password) {
            res.json({ error: "fill all the detail" })
        }
        try {
            const userValid = await UserModel.findOne({ email_id: email_id })
            
          
            if (userValid) {
                console.log(userValid.password)
               
              
                const isMatch =  await bcrypt.compare(password, userValid.password)
              
               
                if(userValid.email_id == email_id  && isMatch){
                    res.json({ status : 201})

                }
                else{
                    res.json({ error: "incorrect email or passowrd" })
                }
               
            }
            else {
                res.json({ status  : 404 , error: "you are not register user" })
            }
        }
        catch (error) {
            console.log(error)
        }

    }


}


export default UserController