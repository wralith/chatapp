import { ActionIcon, Center, Group, Space, Title, useMantineColorScheme } from "@mantine/core"
import { IconMoonStars, IconSun, IconMessage } from "@tabler/icons"

function AppHeader() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Group position="apart" style={{ width: "100%" }}>
            <Center ml={5}>
                <IconMessage />
                <Space w="sm" />
                <Title order={3}>ChatApp</Title>
            </Center>
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === "dark" ? <IconSun size={16} /> : <IconMoonStars size={16} />}
            </ActionIcon>
        </Group>
    )
}

export default AppHeader
