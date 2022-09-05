import { Box, TextInput, Group, Button, PasswordInput } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import schema, { LoginSchema } from "./loginValidationSchema"

interface RegisterRedirectState {
    newRegister: boolean
    username: string
}

function LoginForm() {
    const location = useLocation().state as RegisterRedirectState
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

    const submitLoginForm = (data: LoginSchema) => {
        console.log(data)
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
