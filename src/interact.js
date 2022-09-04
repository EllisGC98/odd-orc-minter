import { ethers } from 'ethers';
import OddOrcs from './OddOrcs.json';

const oddOrcsAddress = "0x6Eb31d885281D2c980b795EcB387aD015F307d7A";


const contract = new ethers.Contract(oddOrcsAddress, OddOrcs.abi,);


export const getTotalMinted = async () => {
    const totalMinted = await contract.methods.totalSupply().call()
    return totalMinted;
}

export const getMaxSupply = async () => {
    const maxSupply = await contract.methods.maxSupply().call()
    return maxSupply
}