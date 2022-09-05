import { object, string, boolean, ref, InferType } from "yup"

const schema = object({
    username: string().min(4, "Username must have at least 4 characters"),
    email: string().required("Email is required").email("Invalid Email"),
    password: string().min(4, "Password must have at least 4 characters"),
    confirmPassword: string().oneOf([ref("password"), null], "Password must match"),
    termsOfService: boolean().oneOf([true], "This is required"),
})

export type RegisterSchema = InferType<typeof schema>

export default schema
