import { Router } from "express"
import { register } from "../controllers/userController"

const userRoutes = Router()

userRoutes.post("/register", register)

export default userRoutes
