import mongoose, { Schema} from "mongoose";

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
        },
        password:{
            type: String,
            required: true,
        },
        role:{
            enum:[admin, organiser, agent, tourist],
            default: tourist
        },
        deactivateAccount:{
            default: false
        }

    
    },{timestamps: true})

export const User = mongoose.model("User", userSchema)