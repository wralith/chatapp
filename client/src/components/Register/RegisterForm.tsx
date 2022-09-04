import { Box, Checkbox, TextInput, Group, Button, PasswordInput } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import schema from "./registerValidationSchema"

function RegisterForm() {
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

    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit(values => console.log(values))}>
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

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default RegisterForm
