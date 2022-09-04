import { Box, Checkbox, TextInput, Group, Button, PasswordInput } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import schema from "./loginValidationSchema"

function LoginForm() {
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
        },

        validate: yupResolver(schema),
    })

    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit(values => console.log(values))}>
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
