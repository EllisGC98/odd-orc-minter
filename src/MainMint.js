import { useEffect, useState } from 'react';
import React from "react";
import { ethers, BigNumber } from 'ethers';
import Marquee from 'react-fast-marquee';
import Mud1 from './/assets/M1.png';
import Mud2 from './/assets/M2.png';
import Mud3 from './/assets/M3.png';
import Mud4 from './/assets/M4.png';
import Mud5 from './/assets/M5.png';
import Mud6 from './/assets/M6.png';
import Mud7 from './/assets/M7.png';
import Mud8 from './/assets/M8.png';
import Mud9 from './/assets/M9.png';
import Snit1 from './/assets/S1.png';
import Snit2 from './/assets/S2.png';
import Snit4 from './/assets/S4.png';
import Snit5 from './/assets/S5.png';
import Snit6 from './/assets/S6.png';
import Snit7 from './/assets/S7.png';
import Snit8 from './/assets/S8.png';
import Snit9 from './/assets/S9.png';
import Snit10 from './/assets/S10.png';
import Snit11 from './/assets/S11.png';
import Rat1 from './/assets/R1.png';
import Rat2 from './/assets/R2.png';
import Rat3 from './/assets/R3.png';
import Rat4 from './/assets/R4.png';
import Rat5 from './/assets/R5.png';
import Rat6 from './/assets/R6.png';
import Rat7 from './/assets/R7.png';
import Rat9 from './/assets/R9.png';
import Rat10 from './/assets/R10.png';
import bgboard from "./assets/bgboard.png";
import bgtext from "./assets/bgtext.png";
import bgfooter from "./assets/bgfooter.png";
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import OddOrcs from './OddOrcs.json';
import { toMetaMaskMint } from "./helpers/utils";


const oddOrcsAddress = "0x6Eb31d885281D2c980b795EcB387aD015F307d7A";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [totalMinted, setTotalMinted] = useState(0);
    const [maxSupply, setMaxSupply] = useState(0);
    const isConnected = Boolean(accounts[0]);


    if(!window.ethereum) {
       // alert('Please Install Metamask');
        toMetaMaskMint();
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const smartContract = new ethers.Contract(
        oddOrcsAddress,
        OddOrcs.abi,
        signer
    );

    console.log(smartContract)



    async function handleMint() {
        if (window.ethereum) {
            try {
                const response = await smartContract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.015 * mintAmount).toString()),
                });
                console.log('response: ', response);
                alert("Mint Successful");
            } catch (err) {
                console.log("error: ", err)
                alert(err.message);

            }
        }
    }


    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    };


    const getTotalMinted = async () => {
        const totalMinted = await smartContract.totalSupply()
        return totalMinted;
    }


    const getMaxSupply = async () => {
        console.log(smartContract)
        const maxSupply = await smartContract.maxSupply()
        return maxSupply
    }






    useEffect(() => {
        const init = async () => {
            const value  = await getTotalMinted()
            const maxSupply  = await getMaxSupply()
            console.log('MAX',  maxSupply.toString())
            console.log('TOTAL',  value.toString())
            setMaxSupply(maxSupply.toString())
            setTotalMinted(value.toString())
         
        }

        init()
    },)
 

    return (
        <div>
          <div className="header-img">
            <img draggable={false} src={bgtext} alt="" />
          </div>
          <Flex
            justify="center"
            align="center"
            height="110vh"
            paddingBottom="300px"
          >
            <Box width="100%">
              <div>
                <div>
                  <Marquee
                    gradientWidth={0}
                    speed={40}
                    height="2rem"
                    width="100%"
                  >
                    <div className="image_wrapper">
                      <img src={Snit11} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud1} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat4} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit2} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud2} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat1} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit6} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud3} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat10} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit5} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud4} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat5} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit4} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud5} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat2} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit8} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud6} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat3} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit7} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud7} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat6} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit10} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud8} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat9} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit1} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Rat7} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Snit9} alt="" />
                    </div>
                    <div className="image_wrapper">
                      <img src={Mud9} alt="" />
                    </div>
                  </Marquee>
                </div>
              </div>
              <span className='supplyCounter'>{totalMinted}</span> <span className='supplyCounter'> / {' '} {maxSupply} </span>
              <Text fontSize="25px">
                A horde of Orc clans 7,777 strong, plaguing the mountains to drive
                their mission far and beyond the blockchain..{" "}
              </Text>
              {isConnected ? (
                <div>
                  <div>
                    <Button
                      backgroundColor="#959982"
                      borderRadius="1px"
                      color="black"
                      cursor="pointer"
                      fontFamily="inherit"
                      padding="15px"
                      marginTop="5px"
                      onClick={handleDecrement}
                    >
                      -
                    </Button>
                    <Input
                      readOnly
                      width="90px"
                      height="45px"
                      textAlign="20px"
                      paddingLeft="40px"
                      marginTop="10px"
                      type="number"
                      value={mintAmount}
                    />
                    <Button
                      backgroundColor="#959982"
                      borderRadius="1px"
                      color="black"
                      cursor="pointer"
                      padding="15px"
                      marginTop="5px"
                      onClick={handleIncrement}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    backgroundColor="#959982"
                    borderRadius="20px"
                    fontFamily="inherit"
                    color="black"
                    cursor="pointer"
                    padding="10px"
                    marginTop="10px"
                    fontSize="20px"
                    onClick={handleMint}
                  >
                    Mint Now
                  </Button>
                </div>
              ) : (
                <p>You must connect wallet to mint.</p>
              )}
              <div className="footerimg">
                <img draggable={false} src={bgfooter} alt="" />
              </div>
              <div className="tree">
                <img draggable={false} src={bgboard} alt="" />
              </div>
            </Box>
          </Flex>
        </div>
      );
  };

export default MainMint;