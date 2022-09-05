import { Box, NavLink } from "@mantine/core"
import { IconHome, IconUserCheck, IconUserPlus } from "@tabler/icons"
import { Link, useLocation } from "react-router-dom"

function AppNavbar() {
    const location = useLocation()
    return (
        <Box>
            <NavLink
                label="Home"
                icon={<IconHome size={20} />}
                component={Link}
                to="/"
                active={location.pathname === "/"}
            />
            <NavLink
                label="Register"
                icon={<IconUserPlus size={20} />}
                component={Link}
                to="/register"
                active={location.pathname === "/register"}
            />
            <NavLink
                label="Login"
                icon={<IconUserCheck size={20} />}
                component={Link}
                to="/login"
                active={location.pathname === "/login"}
            />
        </Box>
    )
}

export default AppNavbar
