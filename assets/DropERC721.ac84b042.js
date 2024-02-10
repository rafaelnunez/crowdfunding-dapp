const e=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ApprovalCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"ApprovalQueryForNonexistentToken",type:"error"},{inputs:[],name:"ApprovalToCurrentOwner",type:"error"},{inputs:[],name:"ApproveToCaller",type:"error"},{inputs:[],name:"BalanceQueryForZeroAddress",type:"error"},{inputs:[],name:"MintToZeroAddress",type:"error"},{inputs:[],name:"MintZeroQuantity",type:"error"},{inputs:[],name:"OwnerQueryForNonexistentToken",type:"error"},{inputs:[],name:"TransferCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"TransferFromIncorrectOwner",type:"error"},{inputs:[],name:"TransferToNonERC721ReceiverImplementer",type:"error"},{inputs:[],name:"TransferToZeroAddress",type:"error"},{inputs:[],name:"URIQueryForNonexistentToken",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_fromTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_toTokenId",type:"uint256"}],name:"BatchMetadataUpdate",type:"event"},{anonymous:!1,inputs:[{components:[{internalType:"uint256",name:"startTimestamp",type:"uint256"},{internalType:"uint256",name:"maxClaimableSupply",type:"uint256"},{internalType:"uint256",name:"supplyClaimed",type:"uint256"},{internalType:"uint256",name:"quantityLimitPerWallet",type:"uint256"},{internalType:"bytes32",name:"merkleRoot",type:"bytes32"},{internalType:"uint256",name:"pricePerToken",type:"uint256"},{internalType:"address",name:"currency",type:"address"},{internalType:"string",name:"metadata",type:"string"}],indexed:!1,internalType:"struct IClaimCondition.ClaimCondition[]",name:"claimConditions",type:"tuple[]"},{indexed:!1,internalType:"bool",name:"resetEligibility",type:"bool"}],name:"ClaimConditionsUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"prevURI",type:"string"},{indexed:!1,internalType:"string",name:"newURI",type:"string"}],name:"ContractURIUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newRoyaltyRecipient",type:"address"},{indexed:!1,internalType:"uint256",name:"newRoyaltyBps",type:"uint256"}],name:"DefaultRoyalty",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"platformFeeRecipient",type:"address"},{indexed:!1,internalType:"uint256",name:"flatFee",type:"uint256"}],name:"FlatPlatformFeeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"maxTotalSupply",type:"uint256"}],name:"MaxTotalSupplyUpdated",type:"event"},{anonymous:!1,inputs:[],name:"MetadataFrozen",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"prevOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnerUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"platformFeeRecipient",type:"address"},{indexed:!1,internalType:"uint256",name:"platformFeeBps",type:"uint256"}],name:"PlatformFeeInfoUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"enum IPlatformFee.PlatformFeeType",name:"feeType",type:"uint8"}],name:"PlatformFeeTypeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"recipient",type:"address"}],name:"PrimarySaleRecipientUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!0,internalType:"address",name:"royaltyRecipient",type:"address"},{indexed:!1,internalType:"uint256",name:"royaltyBps",type:"uint256"}],name:"RoyaltyForToken",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!1,internalType:"string",name:"revealedURI",type:"string"}],name:"TokenURIRevealed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"claimConditionIndex",type:"uint256"},{indexed:!0,internalType:"address",name:"claimer",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"startTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"quantityClaimed",type:"uint256"}],name:"TokensClaimed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"startTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endTokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"baseURI",type:"string"},{indexed:!1,internalType:"bytes",name:"encryptedBaseURI",type:"bytes"}],name:"TokensLazyMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"batchFrozen",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_receiver",type:"address"},{internalType:"uint256",name:"_quantity",type:"uint256"},{internalType:"address",name:"_currency",type:"address"},{internalType:"uint256",name:"_pricePerToken",type:"uint256"},{components:[{internalType:"bytes32[]",name:"proof",type:"bytes32[]"},{internalType:"uint256",name:"quantityLimitPerWallet",type:"uint256"},{internalType:"uint256",name:"pricePerToken",type:"uint256"},{internalType:"address",name:"currency",type:"address"}],internalType:"struct IDrop.AllowlistProof",name:"_allowlistProof",type:"tuple"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"claim",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"claimCondition",outputs:[{internalType:"uint256",name:"currentStartId",type:"uint256"},{internalType:"uint256",name:"count",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"contractType",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"pure",type:"function"},{inputs:[],name:"contractURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"contractVersion",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"bytes",name:"data",type:"bytes"},{internalType:"bytes",name:"key",type:"bytes"}],name:"encryptDecrypt",outputs:[{internalType:"bytes",name:"result",type:"bytes"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"encryptedData",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"freezeBatchBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getActiveClaimConditionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBaseURICount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"getBatchIdAtIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_conditionId",type:"uint256"}],name:"getClaimConditionById",outputs:[{components:[{internalType:"uint256",name:"startTimestamp",type:"uint256"},{internalType:"uint256",name:"maxClaimableSupply",type:"uint256"},{internalType:"uint256",name:"supplyClaimed",type:"uint256"},{internalType:"uint256",name:"quantityLimitPerWallet",type:"uint256"},{internalType:"bytes32",name:"merkleRoot",type:"bytes32"},{internalType:"uint256",name:"pricePerToken",type:"uint256"},{internalType:"address",name:"currency",type:"address"},{internalType:"string",name:"metadata",type:"string"}],internalType:"struct IClaimCondition.ClaimCondition",name:"condition",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDefaultRoyaltyInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[],name:"getFlatPlatformFeeInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPlatformFeeInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPlatformFeeType",outputs:[{internalType:"enum IPlatformFee.PlatformFeeType",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_batchId",type:"uint256"},{internalType:"bytes",name:"_key",type:"bytes"}],name:"getRevealURI",outputs:[{internalType:"string",name:"revealedURI",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"member",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"count",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getRoyaltyInfoForToken",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint16",name:"",type:"uint16"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_conditionId",type:"uint256"},{internalType:"address",name:"_claimer",type:"address"}],name:"getSupplyClaimedByWallet",outputs:[{internalType:"uint256",name:"supplyClaimedByWallet",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRoleWithSwitch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_defaultAdmin",type:"address"},{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"string",name:"_contractURI",type:"string"},{internalType:"address[]",name:"_trustedForwarders",type:"address[]"},{internalType:"address",name:"_saleRecipient",type:"address"},{internalType:"address",name:"_royaltyRecipient",type:"address"},{internalType:"uint128",name:"_royaltyBps",type:"uint128"},{internalType:"uint128",name:"_platformFeeBps",type:"uint128"},{internalType:"address",name:"_platformFeeRecipient",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_batchId",type:"uint256"}],name:"isEncryptedBatch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"forwarder",type:"address"}],name:"isTrustedForwarder",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"string",name:"_baseURIForTokens",type:"string"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"lazyMint",outputs:[{internalType:"uint256",name:"batchId",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxTotalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes[]",name:"data",type:"bytes[]"}],name:"multicall",outputs:[{internalType:"bytes[]",name:"results",type:"bytes[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextTokenIdToClaim",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextTokenIdToMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"primarySaleRecipient",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"bytes",name:"_key",type:"bytes"}],name:"reveal",outputs:[{internalType:"string",name:"revealedURI",type:"string"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"salePrice",type:"uint256"}],name:"royaltyInfo",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"royaltyAmount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"startTimestamp",type:"uint256"},{internalType:"uint256",name:"maxClaimableSupply",type:"uint256"},{internalType:"uint256",name:"supplyClaimed",type:"uint256"},{internalType:"uint256",name:"quantityLimitPerWallet",type:"uint256"},{internalType:"bytes32",name:"merkleRoot",type:"bytes32"},{internalType:"uint256",name:"pricePerToken",type:"uint256"},{internalType:"address",name:"currency",type:"address"},{internalType:"string",name:"metadata",type:"string"}],internalType:"struct IClaimCondition.ClaimCondition[]",name:"_conditions",type:"tuple[]"},{internalType:"bool",name:"_resetClaimEligibility",type:"bool"}],name:"setClaimConditions",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"setContractURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_royaltyRecipient",type:"address"},{internalType:"uint256",name:"_royaltyBps",type:"uint256"}],name:"setDefaultRoyaltyInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_platformFeeRecipient",type:"address"},{internalType:"uint256",name:"_flatFee",type:"uint256"}],name:"setFlatPlatformFeeInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxTotalSupply",type:"uint256"}],name:"setMaxTotalSupply",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"setOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_platformFeeRecipient",type:"address"},{internalType:"uint256",name:"_platformFeeBps",type:"uint256"}],name:"setPlatformFeeInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"enum IPlatformFee.PlatformFeeType",name:"_feeType",type:"uint8"}],name:"setPlatformFeeType",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_saleRecipient",type:"address"}],name:"setPrimarySaleRecipient",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"address",name:"_recipient",type:"address"},{internalType:"uint256",name:"_bps",type:"uint256"}],name:"setRoyaltyInfoForToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalMinted",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"string",name:"_uri",type:"string"}],name:"updateBatchBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_conditionId",type:"uint256"},{internalType:"address",name:"_claimer",type:"address"},{internalType:"uint256",name:"_quantity",type:"uint256"},{internalType:"address",name:"_currency",type:"address"},{internalType:"uint256",name:"_pricePerToken",type:"uint256"},{components:[{internalType:"bytes32[]",name:"proof",type:"bytes32[]"},{internalType:"uint256",name:"quantityLimitPerWallet",type:"uint256"},{internalType:"uint256",name:"pricePerToken",type:"uint256"},{internalType:"address",name:"currency",type:"address"}],internalType:"struct IDrop.AllowlistProof",name:"_allowlistProof",type:"tuple"}],name:"verifyClaim",outputs:[{internalType:"bool",name:"isOverride",type:"bool"}],stateMutability:"view",type:"function"}];export{e as default};
