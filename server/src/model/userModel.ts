import { model, Schema } from "mongoose"

export interface UserType {
    username: string
    email: string
    password: string
    isProfilePictureExist: boolean
    profilePicture: string
}

const userSchema = new Schema<UserType>({
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
