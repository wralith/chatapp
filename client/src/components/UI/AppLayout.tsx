import { useState } from "react"
import { AppShell, Navbar, Header, MediaQuery, Burger, useMantineTheme } from "@mantine/core"
import AppHeader from "./AppHeader"
import AppNavbar from "./AppNavbar"

function AppLayout({ children }: any) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            header={
                <Header height={70} p="md">
                    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened(o => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <AppHeader />
                    </div>
                </Header>
            }
            navbar={
                <Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Navbar.Section grow mt="lg">
                        <AppNavbar />
                    </Navbar.Section>
                    <Navbar.Section>TODO: Footer with user if logged in</Navbar.Section>
                </Navbar>
            }>
            {children}
        </AppShell>
    )
}

export default AppLayout
