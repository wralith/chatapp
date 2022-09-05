import { Box, Checkbox, TextInput, Group, Button, PasswordInput, Text } from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import schema, { RegisterSchema } from "./registerValidationSchema"

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

    const submitRegisterForm = (data: RegisterSchema) => {
        console.log(data)
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
                {!form.values.termsOfService && form.isTouched() && <Text color="red" mt="sm" size="sm">This is required!</Text>}

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default RegisterForm
