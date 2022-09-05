import RegisterForm from "../components/Register/RegisterForm"
import { Title, Container, Center, Text, Anchor } from "@mantine/core"
import { Link } from "react-router-dom"

function Register() {
    return (
        <Container style={{ width: "100%", height: "100%", flexDirection: "column"}}>
                <Title py="xl" order={3}>
                    Register
                </Title>
                <RegisterForm />
                <Text mt="xl">
                    Already have an account?{" "}
                    <Anchor component={Link} to="/login">
                        Login
                    </Anchor>
                </Text>
        </Container>
    )
}

export default Register
