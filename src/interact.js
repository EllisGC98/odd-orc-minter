import { ethers } from 'ethers';
import OddOrcs from './OddOrcs.json';

const oddOrcsAddress = "0x53b659c3E69D20ecf49B7E6C2632F2B3d918c297";


const contract = new ethers.Contract(oddOrcsAddress, OddOrcs.abi,);


export const getTotalMinted = async () => {
    const totalMinted = await contract.methods.totalSupply().call()
    return totalMinted;
}

export const getMaxSupply = async () => {
    const maxSupply = await contract.methods.maxSupply().call()
    return maxSupply
}