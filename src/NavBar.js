import React from "react";
import { Box, Button, Flex, Text } from '@chakra-ui/react';
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
