import { ethers } from 'ethers';
import OddOrcs from './OddOrcs.json';

const oddOrcsAddress = "0xdb41F3bb77eC6649301bE558b48AAAD9E752320B";


const contract = new ethers.Contract(oddOrcsAddress, OddOrcs.abi,);


export const getTotalMinted = async () => {
    const totalMinted = await contract.methods.totalSupply().call()
    return totalMinted;
}

export const getMaxSupply = async () => {
    const maxSupply = await contract.methods.maxSupply().call()
    return maxSupply
}