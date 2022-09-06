import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, TextInput, Group, Button, PasswordInput } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import axios from "axios"

import { loginRoute } from "../../utils/APIRoutes"

import schema, { LoginSchema } from "./loginValidationSchema"

interface RegisterRedirectState {
    newRegister: boolean
    username: string
}

function LoginForm() {
    const location = useLocation().state as RegisterRedirectState
    const navigate = useNavigate()
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
        },

        validate: yupResolver(schema),
    })

    useEffect(() => {
        if (location) {
            form.setFieldValue("username", location.username)
        }
    }, [location])

    const submitLoginForm = async (input: LoginSchema) => {
        const payload = {
            username: input.username,
            password: input.password,
        }
        try {
            const { data } = await axios.post(loginRoute, payload)
            localStorage.setItem("user", JSON.stringify(data))
            showNotification({
                title: "You successfully logged in",
                message: `Welcome ${input.username}`,
            })
            console.log(data)

            if (!data.isProfilePictureExist) {
                navigate("/user/set-picture")
                return
            }

            navigate("/")
        } catch (err) {
            showNotification({
                title: "User Login",
                message: "Something went wrong, please check your inputs",
                color: "red",
            })
        }
    }

    return (
        <Box mx="auto">
            <form onSubmit={form.onSubmit(values => submitLoginForm(values))}>
                <TextInput withAsterisk label="Username" {...form.getInputProps("username")} />
                <PasswordInput withAsterisk label="Password" {...form.getInputProps("password")} />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default LoginForm
