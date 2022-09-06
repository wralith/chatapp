import { Box, Button, Center, Group, Image, ThemeIcon, Title } from "@mantine/core"
import { IconSelect } from "@tabler/icons"
import axios from "axios"
import { useState } from "react"
import { showNotification } from "@mantine/notifications"

import Avatar1 from "../../assets/Avatars/1.svg"
import Avatar2 from "../../assets/Avatars/2.svg"
import Avatar3 from "../../assets/Avatars/3.svg"
import Avatar4 from "../../assets/Avatars/4.svg"
import { avatarRoute } from "../../utils/APIRoutes"
import { useNavigate } from "react-router-dom"

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4]

function SelectProfilePicture() {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(5)
    const user = JSON.parse(localStorage.getItem("user") || "") // ??? TS

    const submitProfilePicture = async () => {
        try {
            if (user && user != "") {
                const { data } = await axios.post(avatarRoute(user._id), {
                    imageId: selected.toString(),
                })
                console.log(data)
                user.isProfilePictureExist = true
                user.profilePicture = data.profilePicture
                localStorage.setItem("user", JSON.stringify(user))
            }

            showNotification({
                title: "Avatar Changed",
                message: "You successfully changed your avatar",
            })
            navigate("/")
        } catch (err) {
            showNotification({
                title: "Something Went Wrong",
                message: "Something went wrong, please try again",
                color: "red",
            })
        }
    }

    return (
        <Box>
            <Center my="xl" style={{ flexDirection: "column" }}>
                <Title order={2} mb="xl">
                    Choose Profile Picture
                </Title>
                <Group mb={60} style={{ justifyContent: "center" }}>
                    {avatars.map((avatar, index) => (
                        <Center my={20} key={index} onClick={() => setSelected(index)}>
                            <Image p="xl" height={120} src={avatar} alt={`avatar-${index}`} />
                            {selected === index ? (
                                <ThemeIcon
                                    style={{
                                        position: "absolute",
                                        transform: "translate(3rem, 3rem)",
                                        boxShadow: "0 0 10px blue",
                                    }}
                                    size={30}
                                    color="gray">
                                    <IconSelect />
                                </ThemeIcon>
                            ) : null}
                        </Center>
                    ))}
                </Group>

                <Button onClick={submitProfilePicture}>Select Avatar</Button>
            </Center>
        </Box>
    )
}

export default SelectProfilePicture
