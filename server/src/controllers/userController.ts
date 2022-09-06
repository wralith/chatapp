import { NextFunction, Request, Response } from "express"
import User, { UserType } from "../model/userModel"
import Bcrypt from "bcrypt"

// TODO: Add username or email already in use

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body
    try {
        const hashedPassword = await Bcrypt.hash(password, 4)
        await User.create({
            username,
            email,
            password: hashedPassword,
        })
        const payload = await User.findOne({ username })
        if (payload) {
            return res.status(200).json({ username: payload.username, email: payload.email })
        }
        return res.status(500).json({ message: "error while creating user" })
    } catch (err) {
        return res.status(409).json({ message: err })
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: "username is not valid" })
        }

        const isPasswordValid = await Bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ message: "incorrect username or password" })
        }

        if (user && isPasswordValid) {
            // Did not worked somehow
            // const payload: Partial<UserType> =   user
            // delete payload.password
            const payload = {
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePicture: user.profilePicture,
                isProfilePictureExist: user.isProfilePictureExist,
            }
            return res.status(200).json(payload)
        }

        return res.status(500).json({ message: "error while login" })
    } catch (err) {
        return res.status(409).json({ message: err })
    }
}

export const setProfilePicture = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        const pictureId = req.body.imageId
        const userData = await User.findByIdAndUpdate(userId, {
            isProfilePictureExist: true,
            profilePicture: pictureId,
        })

        return res
            .status(200)
            .json({ ...userData, profilePicture: pictureId, isProfilePictureExist: true })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}
