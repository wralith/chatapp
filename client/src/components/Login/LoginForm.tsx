import { Box, TextInput, Group, Button, PasswordInput } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import schema, { LoginSchema } from "./loginValidationSchema"

function LoginForm() {
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
        },

        validate: yupResolver(schema),
    })

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
