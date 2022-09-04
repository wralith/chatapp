import { Route, Routes } from "react-router-dom"
import Chat from "./views/Chat"
import Login from "./views/Login"
import Register from "./views/Register"
import { MantineProvider } from "@mantine/core"

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </MantineProvider>
    )
}

export default App
