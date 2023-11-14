import { Box, Image , Text } from '@chakra-ui/react'
import React from 'react';
import logo from "../images/logo.png";
import setting from "../images/settingsIcon.png";
import notification from "../images/notificationsIcon.png";

const Navbar = () => {
  return (
    <div>
        <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} padding={"10px 10px"}>
          <Box width={"52.84px"} h={"52.84px"}>
            <Image src={logo}></Image>
          </Box>
          <Box>
            <Text
              fontSize={"38px"}
              color={"rgba(126, 34, 206, 1)"}
              fontFamily={"sans-serif"}
              fontWeight={700}
              lineHeight={"47.56px"}
            >
              LAMA.
            </Text>
          </Box>
        </Box>

        <Box display={"flex"} p={"10px"} marginRight={"40px"}>
          <Image
            src={setting}
            width={"38px"}
            h={"38px"}
            marginTop={"60px"}
          ></Image>

          <Image
            src={notification}
            w={"48px"}
            h={"48px"}
            marginTop={"55px"}
          ></Image>
        </Box>
      </Box>
    </div>
  )
}

export default Navbar