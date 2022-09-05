import { Title, Container, Center } from "@mantine/core"
import LoginForm from "../components/Login/LoginForm"

function Login() {
    return (
        <Container style={{ width: "100%", height: "100%", flexDirection: "column" }}>
            <Title py="xl" order={3}>
                Login
            </Title>
            <LoginForm />
        </Container>
    )
}

export default Login
