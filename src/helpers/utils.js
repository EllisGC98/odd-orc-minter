import mobileCheck from "../helpers/mobileCheck";
import getLinker from "../helpers/deepLink";

export const mainMintDecision = async () => {
    const deepLink = "https://metamask.app.link/dapp/capable-sable-2ebb54.netlify.app/";
    const downloadMetamaskUrl = "https://metamask.io/download.html";

    if (window.ethereum) {
      window.location.replace("https://capable-sable-2ebb54.netlify.app/");
    } else if (mobileCheck()) {
      const linker = getLinker(downloadMetamaskUrl);
      linker.openURL(deepLink);
    } else {
      window.open(downloadMetamaskUrl);
    }
  };

  export const toMetaMaskMint = () => {
    const deepLink = "https://metamask.app.link/dapp/capable-sable-2ebb54.netlify.app/";
    const downloadMetamaskUrl = "https://metamask.io/download.html";
    if (mobileCheck()) {
      const linker = getLinker(downloadMetamaskUrl);
      linker.openURL(deepLink);
    } else {
      window.open(downloadMetamaskUrl);
    }
  }