import { object, string } from "yup"

const schema = object({
    username: string().min(4, "Username must have at least 4 characters"),
    password: string().min(4, "Password must have at least 4 characters"),
})

export default schema
