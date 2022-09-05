import mongoose, { model, Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 14,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 40,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 14,
    },
    isProfilePictureExist: {
        type: Boolean,
        default: false,
    },
    profilePicture: {
        type: String,
        default: "",
    },
})
 
export default model("User", userSchema)