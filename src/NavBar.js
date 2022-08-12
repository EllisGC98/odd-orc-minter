import React from "react";
import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import Twitter from "./assets/Twitter.png";
import Opensea from "./assets/Opensea.png";
import Discord from "./assets/Discord.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media */}
            <Flex justify="space-between" width="10%" padding="0 25px">
            <Link href="https://twitter.com/OddOrcs" target="_blank" rel="noopener noreferrer">
                <Image src={Twitter} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://opensea.io/" target="_blank" rel="noopener noreferrer">
                <Image src={Opensea} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="http://discord.gg/OddOrcs" target="_blank" rel="noopener noreferrer">
                <Image src={Discord} boxSize="42px" margin="0 15px" />
            </Link>
            </Flex>
        


            {isConnected ? (
                <Box margin="0 15px" fontSize="20px">Connected</Box> 
            ): (
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
                
                >Connect Wallet 
                </Button>
            )}


        </Flex>
    );
};

export default NavBar;
