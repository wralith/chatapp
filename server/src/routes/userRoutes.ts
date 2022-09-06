import { Router } from "express"
import { login, register, setProfilePicture } from "../controllers/userController"

const userRoutes = Router()

userRoutes.post("/register", register)
userRoutes.post("/login", login)
userRoutes.post("/:id/set-picture", setProfilePicture)

export default userRoutes
