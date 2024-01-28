import mongoose, { Schema} from "mongoose";
import validator from "validator";

const userSchema = new Schema (
    {
        username:{
            type: String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        email:{
            type: String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("not valid email")
                }
            }
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
        },
        cpassword:{
            type: String,
            required: true,
            minlength: 6,
        },
        role:{
            enum:[admin, organiser, agent, tourist],
            default: tourist,
        },
        deactivateAccount:{
            default: false,
        },
        tokens: [
            {
                toekn: {
                    type: String,
                    required: true,
                }
            }
        ]

    
    },{timestamps: true})

export const User = mongoose.model("User", userSchema)