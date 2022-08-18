import mobileCheck from "../helpers/mobileCheck";
import getLinker from "../helpers/deepLink";

export const mainMintDecision = async () => {
    const deepLink = "https://metamask.app.link/dapp/oddorcs.io/mint";
    const downloadMetamaskUrl = "https://metamask.io/download.html";

    if (window.ethereum) {
      window.location.replace("https://www.oddorcs.io/mint");
    } else if (mobileCheck()) {
      const linker = getLinker(downloadMetamaskUrl);
      linker.openURL(deepLink);
    } else {
      window.open(downloadMetamaskUrl);
    }
  };

  export const toMetaMaskMint = () => {
    const deepLink = "http://localhost:3000/";
    const downloadMetamaskUrl = "https://metamask.io/download.html";
    if (mobileCheck()) {
      const linker = getLinker(downloadMetamaskUrl);
      linker.openURL(deepLink);
    } else {
      window.open(downloadMetamaskUrl);
    }
  }