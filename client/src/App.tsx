import { Route, Routes } from "react-router-dom"
import Chat from "./views/Chat"
import Login from "./views/Login"
import Register from "./views/Register"
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"
import AppLayout from "./components/UI/AppLayout"
import { useState } from "react"
import { NotificationsProvider } from "@mantine/notifications"

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light")
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
                <NotificationsProvider>
                    <AppLayout>
                        <Routes>
                            <Route path="/" element={<Chat />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Routes>
                    </AppLayout>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
