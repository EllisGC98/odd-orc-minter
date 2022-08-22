// SPDX-License-Identifier: Unlicensed

/**


       , ·. ,.-·~·.,   ‘        ;'*¨'`·- .,  ‘                ;'*¨'`·- .,  ‘                               
      /  ·'´,.-·-.,   `,'‚        \`:·-,. ,   '` ·.  '          \`:·-,. ,   '` ·.  '                         
     /  .'´\:::::::'\   '\ °       '\:/   ;\:'`:·,  '`·, '        '\:/   ;\:'`:·,  '`·, '                      
  ,·'  ,'::::\:;:-·-:';  ';\‚        ;   ;'::\;::::';   ;\         ;   ;'::\;::::';   ;\                      
 ;.   ';:::;´       ,'  ,':'\‚       ;  ,':::;  `·:;;  ,':'\'       ;  ,':::;  `·:;;  ,':'\'                    
  ';   ;::;       ,'´ .'´\::';‚     ;   ;:::;    ,·' ,·':::;      ;   ;:::;    ,·' ,·':::;                    
  ';   ':;:   ,.·´,.·´::::\;'°     ;  ;:::;'  ,.'´,·´:::::;      ;  ;:::;'  ,.'´,·´:::::;                    
   \·,   `*´,.·'´::::::;·´       ':,·:;::-·´,.·´\:::::;´'      ':,·:;::-·´,.·´\:::::;´'                     
    \\:¯::\:::::::;:·´           \::;. -·´:::::;\;·´          \::;. -·´:::::;\;·´                        
     `\:::::\;::·'´  °             \;'\::::::::;·´'              \;'\::::::::;·´'                           
         ¯                           `\;::-·´                     `\;::-·´                               
          ‘                                                                                               
       , ·. ,.-·~·.,   ‘         ,. -  .,                           ,. - .,                      ,. -,    
      /  ·'´,.-·-.,   `,'‚       ,' ,. -  .,  `' ·,               ,·'´ ,. - ,   ';\            ,.·'´,    ,'\   
     /  .'´\:::::::'\   '\ °     '; '·~;:::::'`,   ';\        ,·´  .'´\:::::;'   ;:'\ '     ,·'´ .·´'´-·'´::::\' 
  ,·'  ,'::::\:;:-·-:';  ';\‚      ;   ,':\::;:´  .·´::\'     /  ,'´::::'\;:-/   ,' ::;  '  ;    ';:::\::\::;:'  
 ;.   ';:::;´       ,'  ,':'\‚     ;  ·'-·'´,.-·'´:::::::';  ,'   ;':::::;'´ ';   /\::;' '    \·.    `·;:'-·'´     
  ';   ;::;       ,'´ .'´\::';‚  ;´    ':,´:::::::::::·´'   ;   ;:::::;   '\*'´\::\'  °     \:`·.   '`·,  '     
  ';   ':;:   ,.·´,.·´::::\;'°   ';  ,    `·:;:-·'´        ';   ';::::';    '\::'\/.'          `·:'`·,   \'      
   \·,   `*´,.·'´::::::;·´      ; ,':\'`:·.,  ` ·.,        \    '·:;:'_ ,. -·'´.·´\‘         ,.'-:;'  ,·\     
    \\:¯::\:::::::;:·´         \·-;::\:::::'`:·-.,';       '\:` ·  .,.  -·:´::::::\'   ,·'´     ,.·´:::'\    
     `\:::::\;::·'´  °           \::\:;'` ·:;:::::\::\'       \:::::::\:::::::;:·'´'     \`*'´\::::::::;·'‘   
         ¯                       '·-·'       `' · -':::''        `· :;::\;::-·´           \::::\:;:·´        
          ‘                                                                               '`*'´‘            

                         
*/

// Author: EllisGC_;

pragma solidity ^0.8.16;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract OddOrcs is ERC721A, Ownable {

    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    string public hiddenMetadataURI;


    address[] public orclistedAddresses;

    uint256 public price = 0.015 ether;
    uint256 public constant maxSupply = 7777;
    uint256 public maxMintAmount = 5;
    uint256 public nftPerAddressLimit = 5;

    bool public paused = true;
    bool public orcsRevealed = false;
    bool public onlyOrcList = true;

    constructor( 
        string memory _name,
        string memory _symbol,
        string memory _hiddenMetadataURI
    ) ERC721A(_name, _symbol) {
        setHiddenMetadataURI(_hiddenMetadataURI);
    }

    function _startTokenId() internal view override virtual returns (uint256) {
            return 1;
    }

    modifier mintCompliance(uint256 quantity) {
        require(quantity > 0, "Must mint more than 0 tokens");
        require(totalSupply() + quantity <= maxSupply, "Not enough tokens left");
        _;
    }

    modifier mintPriceCompliance(uint256 quantity) {
        require(msg.value >= (price * quantity), "Not enough ether has been sent to gain entry to middle earth");
        _;
    }


    function mint(uint256 quantity) external payable mintCompliance(quantity) mintPriceCompliance(quantity) {
        require(!paused, "The Orc council has paused the contract");
        require(quantity + _numberMinted(msg.sender) <= maxMintAmount, "Exceeded the limit of Orcs");

        if (msg.sender != owner()) {
            if (onlyOrcList == true) {
                require(isOrclisted(msg.sender), "User is not on the Orc List");
                uint256 ownerTokenCount = balanceOf(msg.sender);
                require(ownerTokenCount < nftPerAddressLimit);
            }
        } 
           _safeMint(msg.sender, quantity);
    }

    function isOrclisted(address _user) public view returns (bool) {
        for(uint256 i = 0; i < orclistedAddresses.length; i++ ) {
            if(orclistedAddresses[i] == _user) {
                return true;
            }
        }
        return false;
    }


    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require( _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if(orcsRevealed == false) {
            return hiddenMetadataURI;
        }

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
                ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
                : "";
    }

     // Only Orc Commander
    function orcsReveal() public onlyOwner() {
        orcsRevealed = true;
    }

    function setAddressLimit(uint256 _limit) public onlyOwner {
        nftPerAddressLimit = _limit;
    }

    function setPrice(uint256 _newPrice) public onlyOwner {
        price = _newPrice;
    }

    function setMaxMintAmount(uint256 _newMaxMintAmount) public onlyOwner {
        maxMintAmount = _newMaxMintAmount;
    }


    function setHiddenMetadataURI(string memory _hiddenMetadataURI) public onlyOwner {
        hiddenMetadataURI = _hiddenMetadataURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    
    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function setOnlyOrclisted(bool _state) public onlyOwner {
        onlyOrcList = _state;
    }

    function orclistUsers(address[] calldata _users) public onlyOwner {
        orclistedAddresses = _users;
    }

    // Withdraw to the owners wallet
    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
            require(success);
    }
}