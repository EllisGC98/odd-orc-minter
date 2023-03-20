import React from "react";
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import Twitter from "./assets/Twitter_icon.png";
import Opensea from "./assets/Opensea_Icon.png";
import Discord from "./assets/Discord_Icon.png";
import { toMetaMaskMint } from "./helpers/utils";



const shortenAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
  } 

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    

    async function connectAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const shortenedAddress = shortenAddress(accounts[0]);
            setAccounts([shortenedAddress]);
    } else {
      toMetaMaskMint();
    }
}


    return (
        <Flex justify="space-between" align="center" padding="30px">
          {/* Left Side - Social Media */}
          <Flex className="social-buttons" justify="space-between" width="10%" padding="0 40px"
          css={{ 
            "@media screen (min-width: 450px) and (max-width: 767px)": {
             
            },
          }} >
            <Link
              href="https://twitter.com/OddOrcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twitter} boxSize="35px" margin="0 25px" transition="transform 0.3s ease-in-out"
              _hover={{transform: "scale(1.3)",}} 
              css={{ 
                "@media screen and (max-width: 767px)": {
              
                },
              }}/>
            </Link>
            <Link
              href="https://opensea.io/collection/odd-orcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Opensea} boxSize="35px" margin="0 25px" transition="transform 0.3s ease-in-out"
              _hover={{transform: "scale(1.3)",}}  
              css={{ 
                "@media screen and (max-width: 767px)": {
                 
                },
              }}/>
            </Link>
            <Link
              href="http://discord.gg/OddOrcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Discord} boxSize="35px" margin="0 25px" transition="transform 0.3s ease-in-out"
              _hover={{transform: "scale(1.3)",}}
              css={{ 
                "@media screen and (max-width: 767px)": {
               
                },
              }}/>
            </Link>
          </Flex>
  
          {isConnected ? (
            <Box margin="0 15px" fontSize="20px">
              <Text title={accounts}>{accounts}</Text>
            </Box>
          ) : (
            <div className="connect-btn">
              <Button
                backgroundColor="#959982"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="black"
                fontSize="20px"
                cursor="pointer"
                fontFamily="inherit"
                padding="10px"
                margin="0 15px"
                onClick={connectAccounts}
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </Flex>
      );
  };

export default NavBar;
