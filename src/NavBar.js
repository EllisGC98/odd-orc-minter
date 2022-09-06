import React from "react";
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import Twitter from "./assets/Twitter.png";
import Opensea from "./assets/Opensea.png";
import Discord from "./assets/Discord.png";
import { toMetaMaskMint } from "./helpers/utils";
import { mainMintDecision } from "./helpers/utils";

/*const shortenAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
  } */


  

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    

    async function connectAccounts() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        
    } else {
       mainMintDecision();

    }
}

    
    const truncate = (fullStr, strLen, separator) => {
		if (fullStr.length <= strLen) return fullStr;

		separator = separator || '...';

		var sepLen = separator.length,
			charsToShow = strLen - sepLen,
			frontChars = Math.ceil(charsToShow / 2),
			backChars = Math.floor(charsToShow / 2);

		return (
			fullStr.substr(0, frontChars) +
			separator +
			fullStr.substr(fullStr.length - backChars)
		);
	}

    console.log(truncate(accounts, 5, '...'))


    return (
        <Flex justify="space-between" align="center" padding="30px">
          {/* Left Side - Social Media */}
          <Flex justify="space-between" width="10%" padding="0 25px">
            <Link
              href="https://twitter.com/OddOrcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twitter} boxSize="42px" margin="0 15px" />
            </Link>
            <Link
              href="https://opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Opensea} boxSize="42px" margin="0 15px" />
            </Link>
            <Link
              href="http://discord.gg/OddOrcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Discord} boxSize="42px" margin="0 15px" />
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
