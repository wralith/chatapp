import { Box, Checkbox, TextInput, Group, Button, PasswordInput, Text } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import { showNotification } from "@mantine/notifications"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import schema, { RegisterSchema } from "./registerValidationSchema"
import { registerRoute } from "../../utils/APIRoutes"

function RegisterForm() {
    const navigate = useNavigate()
    const form = useForm({
        initialValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            termsOfService: false,
        },

        validate: yupResolver(schema),
    })

    const submitRegisterForm = async (input: RegisterSchema) => {
        const payload = {
            username: input.username,
            email: input.email,
            password: input.password,
        }
        try {
            const { data } = await axios.post(registerRoute, payload)
            showNotification({
                title: "Redirected to Login Page",
                message:
                    "You succesfully logged in, you can login by entering your Username and Password now",
            })
            navigate("/login", { state: { newRegister: true, username: input.username } })
        } catch (err) {
            showNotification({
                title: "User Registration",
                message: "Something went wrong, please check your inputs",
                color: "red",
            })
        }
    }

    return (
        <Box mx="auto">
            <form onSubmit={form.onSubmit(values => submitRegisterForm(values))}>
                <TextInput withAsterisk label="Username" {...form.getInputProps("username")} />
                <TextInput withAsterisk label="Email" {...form.getInputProps("email")} />
                <PasswordInput withAsterisk label="Password" {...form.getInputProps("password")} />
                <PasswordInput
                    withAsterisk
                    label="Password Confirmation"
                    {...form.getInputProps("confirmPassword")}
                />

                <Checkbox
                    mt="md"
                    label="I accept the terms of the agreement"
                    {...form.getInputProps("termsOfService", { type: "checkbox" })}
                />
                {!form.values.termsOfService && form.isTouched() && (
                    <Text color="red" mt="sm" size="sm">
                        This is required!
                    </Text>
                )}

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default RegisterForm
