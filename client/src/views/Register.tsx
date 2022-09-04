import RegisterForm from "../components/Register/RegisterForm"
import { Title, Container, Center } from "@mantine/core"

function Register() {
    return (
        <Container>
            <Center style={{ width: "100%", height: "100%", flexDirection: "column" }}>
                <Title py="xl" order={3}>
                    Register
                </Title>
                <RegisterForm />
            </Center>
        </Container>
    )
}

export default Register
