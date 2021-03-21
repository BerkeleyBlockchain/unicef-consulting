export const userAbi = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_schoolContract",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "InsufficientBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "MyLog",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "avgExchangeRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_cErc20Contract",
				"type": "address"
			}
		],
		"name": "checkHasEnough",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_erc20Contract",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_cErc20Contract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_numTokensToSupply",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_cErc20Contract",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContribution",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_cErc20Contract",
				"type": "address"
			}
		],
		"name": "interestRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "schoolContract",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "schoolContributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20Contract",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_cErc20Contract",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
export const erc20Abi = [
	{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
];
export const cTokenAbi = [
	{"inputs":[{"internalType":"address","name":"underlying_","type":"address"},{"internalType":"contractComptrollerInterface","name":"comptroller_","type":"address"},{"internalType":"contractInterestRateModel","name":"interestRateModel_","type":"address"},{"internalType":"uint256","name":"initialExchangeRateMantissa_","type":"uint256"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"addresspayable","name":"admin_","type":"address"},{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cashPrior","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"interestAccumulated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event","signature":"0x4dec04e750ca11537cabcd8a9eab06494de08da3735bc8871cd41250e190bc04"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event","signature":"0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event","signature":"0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"cTokenCollateral","type":"address"},{"indexed":false,"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event","signature":"0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event","signature":"0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event","signature":"0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contractComptrollerInterface","name":"oldComptroller","type":"address"},{"indexed":false,"internalType":"contractComptrollerInterface","name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event","signature":"0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event","signature":"0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contractInterestRateModel","name":"oldInterestRateModel","type":"address"},{"indexed":false,"internalType":"contractInterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event","signature":"0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event","signature":"0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event","signature":"0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"redeemer","type":"address"},{"indexed":false,"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event","signature":"0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"repayAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accountBorrows","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event","signature":"0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"benefactor","type":"address"},{"indexed":false,"internalType":"uint256","name":"addAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesAdded","type":"event","signature":"0xa91e67c5ea634cd43a12c5a482724b03de01e85ca68702a53d0c2f45cb7c1dc5"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"reduceAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event","signature":"0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe9c714f2"},{"constant":false,"inputs":[{"internalType":"uint256","name":"addAmount","type":"uint256"}],"name":"_addReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3e941010"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x601a0bf1"},{"constant":false,"inputs":[{"internalType":"contractComptrollerInterface","name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4576b5db"},{"constant":false,"inputs":[{"internalType":"address","name":"implementation_","type":"address"},{"internalType":"bool","name":"allowResign","type":"bool"},{"internalType":"bytes","name":"becomeImplementationData","type":"bytes"}],"name":"_setImplementation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x555bcc40"},{"constant":false,"inputs":[{"internalType":"contractInterestRateModel","name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2b3abbd"},{"constant":false,"inputs":[{"internalType":"addresspayable","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb71d1a0c"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xfca7820b"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6c540baf"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa6afed95"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf851a440"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3af9e669"},{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc5ebeaec"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x17bfdfbc"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95dd9193"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xaa5af0fd"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf8f9da28"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"internalType":"contractComptrollerInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5fe3b567"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x313ce567"},{"constant":false,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x0933c1ed"},{"constant":true,"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"delegateToViewImplementation","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4487152f"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xbd6d894d"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x182df0f5"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc37f68e2"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3b1d21a2"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5c60da1b"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"internalType":"contractInterestRateModel","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf3fdb15a"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xfe9c44ae"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"},{"internalType":"contractCTokenInterface","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf5e3c462"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa0712d68"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x26782247"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xdb006a75"},{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x852a12e3"},{"constant":false,"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x0e752702"},{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowBehalf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2608f818"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x173b9904"},{"constant":false,"inputs":[{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb2a02ff1"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xae9d70b0"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x47bd3718"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x73acee98"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8f840ddd"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6f307dc3"}
];
export const schoolAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_schoolName",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "createUserContract",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUserContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20Contract",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_erc20Contract",
          "type": "address"
        }
      ],
      "name": "withdrawBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
export const schoolJSON = {
	"contractName": "School",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "string",
			"name": "_schoolName",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "getName",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"internalType": "string",
			"name": "_name",
			"type": "string"
		  }
		],
		"name": "createUserContract",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [],
		"name": "getUserContract",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": true,
		"inputs": [
		  {
			"internalType": "address",
			"name": "_erc20Contract",
			"type": "address"
		  }
		],
		"name": "getBalance",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"constant": false,
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  },
		  {
			"internalType": "address",
			"name": "_erc20Contract",
			"type": "address"
		  }
		],
		"name": "withdrawBalance",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	],
	"metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_schoolName\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"createUserContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_erc20Contract\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getUserContract\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_erc20Contract\",\"type\":\"address\"}],\"name\":\"withdrawBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/School.sol\":\"School\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/School.sol\":{\"keccak256\":\"0x93d500b60683dd6a84fa3490b64d36525c3feb0a6e8bf65a94e82d053d3f785b\",\"urls\":[\"bzz-raw://2318b1089cef9e01448cb88d8c09c88c2305ef0b64c58fb599b584fc19191802\",\"dweb:/ipfs/QmYTGXVanUW5x5WwMagcdbEVMAq5GCrhzd8pdnwJZZKbsi\"]},\"/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/User.sol\":{\"keccak256\":\"0x4acf7d1c7283d7a40bbb844230ba51d07301180e21fc7c76912a6e88da7f4081\",\"urls\":[\"bzz-raw://1b39cd142d2de1515f533d104f9004c8a500ff787399deaf97947debb86d3e19\",\"dweb:/ipfs/QmPkKDM9MFrtg138aMwW1hZ7p8Bpqjv2dHQQ72gteXGMYv\"]}},\"version\":1}",
	"bytecode": "0x608060405234801561001057600080fd5b50604051620026e3380380620026e38339818101604052602081101561003557600080fd5b810190808051604051939291908464010000000082111561005557600080fd5b8382019150602082018581111561006b57600080fd5b825186600182028301116401000000008211171561008857600080fd5b8083526020830192505050908051906020019080838360005b838110156100bc5780820151818401526020810190506100a1565b50505050905090810190601f1680156100e95780820380516001836020036101000a031916815260200191505b50604052505050806001908051906020019061010692919061014d565b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101f2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018e57805160ff19168380011785556101bc565b828001600101855582156101bc579182015b828111156101bb5782518255916020019190600101906101a0565b5b5090506101c991906101cd565b5090565b6101ef91905b808211156101eb5760008160009055506001016101d3565b5090565b90565b6124e180620002026000396000f3fe6080604052600436106100705760003560e01c8063423928b71161004e578063423928b71461025a57806379e81f39146102b15780638da5cb5b14610320578063f8b2cb4f1461037757610070565b8063063473c51461007257806306fdde031461013a57806317d7de7c146101ca575b005b34801561007e57600080fd5b506101386004803603602081101561009557600080fd5b81019080803590602001906401000000008111156100b257600080fd5b8201836020820111156100c457600080fd5b803590602001918460018302840111640100000000831117156100e657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103dc565b005b34801561014657600080fd5b5061014f610529565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018f578082015181840152602081019050610174565b50505050905090810190601f1680156101bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d657600080fd5b506101df6105c7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561021f578082015181840152602081019050610204565b50505050905090810190601f16801561024c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561026657600080fd5b5061026f610669565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102bd57600080fd5b5061030a600480360360408110156102d457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d0565b6040518082815260200191505060405180910390f35b34801561032c57600080fd5b50610335610991565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561038357600080fd5b506103c66004803603602081101561039a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109b6565b6040518082815260200191505060405180910390f35b30816040516103ea90610a7c565b808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561045957808201518184015260208101905061043e565b50505050905090810190601f1680156104865780820380516001836020036101000a031916815260200191505b509350505050604051809103906000f0801580156104a8573d6000803e3d6000fd5b50600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105bf5780601f10610594576101008083540402835291602001916105bf565b820191906000526020600020905b8154815290600101906020018083116105a257829003601f168201915b505050505081565b606060018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b5050505050905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008082905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561075557600080fd5b505afa158015610769573d6000803e3d6000fd5b505050506040513d602081101561077f57600080fd5b81019080805190602001909291905050509050848111156107eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061248c6021913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561089357600080fd5b505af11580156108a7573d6000803e3d6000fd5b505050506040513d60208110156108bd57600080fd5b8101908080519060200190929190505050508173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561094c57600080fd5b505afa158015610960573d6000803e3d6000fd5b505050506040513d602081101561097657600080fd5b81019080805190602001909291905050509250505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000808290508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610a3957600080fd5b505afa158015610a4d573d6000803e3d6000fd5b505050506040513d6020811015610a6357600080fd5b8101908080519060200190929190505050915050919050565b611a0280610a8a8339019056fe60806040523480156200001157600080fd5b5060405162001a0238038062001a02833981810160405260408110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b5060405250505080600290805190602001906200011a929190620001b4565b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006003819055506000600581905550505062000263565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001f757805160ff191683800117855562000228565b8280016001018555821562000228579182015b82811115620002275782518255916020019190600101906200020a565b5b5090506200023791906200023b565b5090565b6200026091905b808211156200025c57600081600090555060010162000242565b5090565b90565b61178f80620002736000396000f3fe6080604052600436106100c25760003560e01c80639ee9a3cf1161007f578063bca1c85d11610059578063bca1c85d1461048b578063d34d3dac146104e2578063f10fdf5c1461050d578063f8b2cb4f14610538576100c2565b80639ee9a3cf1461035a578063afe3bd8f146103cd578063b460af94146103f8576100c2565b806306fdde03146100c457806317d7de7c146101545780637c2c69c0146101e45780638340f549146102495780638da5cb5b146102d8578063936de2a11461032f575b005b3480156100d057600080fd5b506100d961059d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101195780820151818401526020810190506100fe565b50505050905090810190601f1680156101465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016057600080fd5b5061016961063b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101a957808201518184015260208101905061018e565b50505050905090810190601f1680156101d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f057600080fd5b506102336004803603602081101561020757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106dd565b6040518082815260200191505060405180910390f35b34801561025557600080fd5b506102c26004803603606081101561026c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109de565b6040518082815260200191505060405180910390f35b3480156102e457600080fd5b506102ed610c46565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033b57600080fd5b50610344610c6c565b6040518082815260200191505060405180910390f35b34801561036657600080fd5b506103b36004803603604081101561037d57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c72565b604051808215151515815260200191505060405180910390f35b3480156103d957600080fd5b506103e2610ed7565b6040518082815260200191505060405180910390f35b34801561040457600080fd5b506104716004803603606081101561041b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610edd565b604051808215151515815260200191505060405180910390f35b34801561049757600080fd5b506104a06113be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ee57600080fd5b506104f76113e3565b6040518082815260200191505060405180910390f35b34801561051957600080fd5b506105226113e9565b6040518082815260200191505060405180910390f35b34801561054457600080fd5b506105876004803603602081101561055b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f3565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b505050505081565b606060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b5050505050905090565b60008060035414156106f257600090506109d9565b600082905060008173ffffffffffffffffffffffffffffffffffffffff16633af9e669306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561077857600080fd5b505af115801561078c573d6000803e3d6000fd5b505050506040513d60208110156107a257600080fd5b8101908080519060200190929190505050905060006107d66107c86003546004546114c8565b670de0b6b3a764000061154e565b90507f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8260405180806020018381526020018281038252600a8152602001807f63757242616c616e6365000000000000000000000000000000000000000000008152506020019250505060405180910390a17f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8160405180806020018381526020018281038252600a8152602001807f61766742616c616e6365000000000000000000000000000000000000000000008152506020019250505060405180910390a17f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8183036040518080602001838152602001828103825260178152602001807f63757242616c616e6365202d2061766742616c616e63650000000000000000008152506020019250505060405180910390a1808210156109af577f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad600060405180806020018381526020018281038252600d8152602001807f696e7465726573742072617465000000000000000000000000000000000000008152506020019250505060405180910390a1600093505050506109d9565b6109d36109cd670de0b6b3a76400006109c885856115dd565b6114c8565b8261154e565b93505050505b919050565b600080849050600084905060008173ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610a3357600080fd5b505af1158015610a47573d6000803e3d6000fd5b505050506040513d6020811015610a5d57600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663095ea7b387876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610af757600080fd5b505af1158015610b0b573d6000803e3d6000fd5b505050506040513d6020811015610b2157600080fd5b81019080805190602001909291905050505060008273ffffffffffffffffffffffffffffffffffffffff1663a0712d68876040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610b8857600080fd5b505af1158015610b9c573d6000803e3d6000fd5b505050506040513d6020811015610bb257600080fd5b810190808051906020019092919050505090506000811415610c38576000610beb610be588670de0b6b3a76400006114c8565b8461154e565b905060006003549050610c0060035483611666565b600381905550610c2f610c27610c18600454846114c8565b610c2287866114c8565b611666565b60035461154e565b60048190555050505b809450505050509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b6000808290507f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad846040518080602001838152602001828103825260098152602001807f616d6f756e74203d2000000000000000000000000000000000000000000000008152506020019250505060405180910390a17f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8173ffffffffffffffffffffffffffffffffffffffff16633af9e669306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610d8857600080fd5b505af1158015610d9c573d6000803e3d6000fd5b505050506040513d6020811015610db257600080fd5b81019080805190602001909291905050506040518080602001838152602001828103825260138152602001807f62616c616e63654f66556e6465726c79696e67000000000000000000000000008152506020019250505060405180910390a18073ffffffffffffffffffffffffffffffffffffffff16633af9e669306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610e9057600080fd5b505af1158015610ea4573d6000803e3d6000fd5b505050506040513d6020811015610eba57600080fd5b810190808051906020019092919050505084111591505092915050565b60035481565b600080839050600083905060008173ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610f3257600080fd5b505af1158015610f46573d6000803e3d6000fd5b505050506040513d6020811015610f5c57600080fd5b810190808051906020019092919050505090506000610f7a866106dd565b90506000610fb4610f938a670de0b6b3a76400006114c8565b610faf670de0b6b3a7640000610faa86600261154e565b611666565b61154e565b90506000610fe4610fd683610fd1670de0b6b3a764000087611666565b6114c8565b670de0b6b3a764000061154e565b9050610ff08189610c72565b61104e577f7979dc87a8aa237e89a521cf8882b835cf9a757fda430f3a2d925e1ef6c5bf576040518080602001828103825260278152602001806117346027913960400191505060405180910390a1600096505050505050506113b7565b60008573ffffffffffffffffffffffffffffffffffffffff1663852a12e3836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156110a357600080fd5b505af11580156110b7573d6000803e3d6000fd5b505050506040513d60208110156110cd57600080fd5b8101908080519060200190929190505050905060008114156113585761110f60035461110a61110486670de0b6b3a76400006114c8565b8861154e565b6115dd565b6003819055507f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad611140838d6115dd565b60405180806020018381526020018281038252601e8152602001807f7472616e73666572696e6720746f207363686f6f6c20636f6e747261637400008152506020019250505060405180910390a1611198828c6115dd565b6005600082825401925050819055508673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166111ef858f6115dd565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561125857600080fd5b505af115801561126c573d6000803e3d6000fd5b505050506040513d602081101561128257600080fd5b8101908080519060200190929190505050508673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338d6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561131b57600080fd5b505af115801561132f573d6000803e3d6000fd5b505050506040513d602081101561134557600080fd5b8101908080519060200190929190505050505b7f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad816040518080602001838152602001828103825260248152602001806116ef602491396040019250505060405180910390a160019750505050505050505b9392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b6000600554905090565b60008082905060008173ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561144357600080fd5b505af1158015611457573d6000803e3d6000fd5b505050506040513d602081101561146d57600080fd5b8101908080519060200190929190505050905060006114bb6114b56003546114b06114a260035461149d8b6106dd565b6114c8565b671bc16d674ec8000061154e565b611666565b836114c8565b9050809350505050919050565b6000808314156114db5760009050611548565b60008284029050828482816114ec57fe5b0414611543576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117136021913960400191505060405180910390fd5b809150505b92915050565b60008082116115c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b60008284816115d057fe5b0490508091505092915050565b600082821115611655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b6000808284019050838110156116e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fe49662074686973206973206e6f7420302c2074686572652077617320616e206572726f72536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468657265206973206e6f7420656e6f75676820666f7220746865207769746864726177616c2ea265627a7a723158200d005b0b9fb84f45916824c772bef4c5482bfd993e39f934e3ff770b624fa2d364736f6c6343000510003263616e6e6f74207769746864726177206d6f7265207468616e2062616c616e6365a265627a7a7231582027c8b06947a3cc4f5fd55fe9435ec4df89c98157ef0e18406c4ffb76eef3ba1064736f6c63430005100032",
	"deployedBytecode": "0x6080604052600436106100705760003560e01c8063423928b71161004e578063423928b71461025a57806379e81f39146102b15780638da5cb5b14610320578063f8b2cb4f1461037757610070565b8063063473c51461007257806306fdde031461013a57806317d7de7c146101ca575b005b34801561007e57600080fd5b506101386004803603602081101561009557600080fd5b81019080803590602001906401000000008111156100b257600080fd5b8201836020820111156100c457600080fd5b803590602001918460018302840111640100000000831117156100e657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103dc565b005b34801561014657600080fd5b5061014f610529565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018f578082015181840152602081019050610174565b50505050905090810190601f1680156101bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d657600080fd5b506101df6105c7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561021f578082015181840152602081019050610204565b50505050905090810190601f16801561024c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561026657600080fd5b5061026f610669565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102bd57600080fd5b5061030a600480360360408110156102d457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d0565b6040518082815260200191505060405180910390f35b34801561032c57600080fd5b50610335610991565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561038357600080fd5b506103c66004803603602081101561039a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109b6565b6040518082815260200191505060405180910390f35b30816040516103ea90610a7c565b808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561045957808201518184015260208101905061043e565b50505050905090810190601f1680156104865780820380516001836020036101000a031916815260200191505b509350505050604051809103906000f0801580156104a8573d6000803e3d6000fd5b50600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105bf5780601f10610594576101008083540402835291602001916105bf565b820191906000526020600020905b8154815290600101906020018083116105a257829003601f168201915b505050505081565b606060018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b5050505050905090565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008082905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561075557600080fd5b505afa158015610769573d6000803e3d6000fd5b505050506040513d602081101561077f57600080fd5b81019080805190602001909291905050509050848111156107eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061248c6021913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561089357600080fd5b505af11580156108a7573d6000803e3d6000fd5b505050506040513d60208110156108bd57600080fd5b8101908080519060200190929190505050508173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561094c57600080fd5b505afa158015610960573d6000803e3d6000fd5b505050506040513d602081101561097657600080fd5b81019080805190602001909291905050509250505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000808290508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610a3957600080fd5b505afa158015610a4d573d6000803e3d6000fd5b505050506040513d6020811015610a6357600080fd5b8101908080519060200190929190505050915050919050565b611a0280610a8a8339019056fe60806040523480156200001157600080fd5b5060405162001a0238038062001a02833981810160405260408110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b5060405250505080600290805190602001906200011a929190620001b4565b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006003819055506000600581905550505062000263565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001f757805160ff191683800117855562000228565b8280016001018555821562000228579182015b82811115620002275782518255916020019190600101906200020a565b5b5090506200023791906200023b565b5090565b6200026091905b808211156200025c57600081600090555060010162000242565b5090565b90565b61178f80620002736000396000f3fe6080604052600436106100c25760003560e01c80639ee9a3cf1161007f578063bca1c85d11610059578063bca1c85d1461048b578063d34d3dac146104e2578063f10fdf5c1461050d578063f8b2cb4f14610538576100c2565b80639ee9a3cf1461035a578063afe3bd8f146103cd578063b460af94146103f8576100c2565b806306fdde03146100c457806317d7de7c146101545780637c2c69c0146101e45780638340f549146102495780638da5cb5b146102d8578063936de2a11461032f575b005b3480156100d057600080fd5b506100d961059d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101195780820151818401526020810190506100fe565b50505050905090810190601f1680156101465780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016057600080fd5b5061016961063b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101a957808201518184015260208101905061018e565b50505050905090810190601f1680156101d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f057600080fd5b506102336004803603602081101561020757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106dd565b6040518082815260200191505060405180910390f35b34801561025557600080fd5b506102c26004803603606081101561026c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109de565b6040518082815260200191505060405180910390f35b3480156102e457600080fd5b506102ed610c46565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561033b57600080fd5b50610344610c6c565b6040518082815260200191505060405180910390f35b34801561036657600080fd5b506103b36004803603604081101561037d57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c72565b604051808215151515815260200191505060405180910390f35b3480156103d957600080fd5b506103e2610ed7565b6040518082815260200191505060405180910390f35b34801561040457600080fd5b506104716004803603606081101561041b57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610edd565b604051808215151515815260200191505060405180910390f35b34801561049757600080fd5b506104a06113be565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ee57600080fd5b506104f76113e3565b6040518082815260200191505060405180910390f35b34801561051957600080fd5b506105226113e9565b6040518082815260200191505060405180910390f35b34801561054457600080fd5b506105876004803603602081101561055b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113f3565b6040518082815260200191505060405180910390f35b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b505050505081565b606060028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b5050505050905090565b60008060035414156106f257600090506109d9565b600082905060008173ffffffffffffffffffffffffffffffffffffffff16633af9e669306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561077857600080fd5b505af115801561078c573d6000803e3d6000fd5b505050506040513d60208110156107a257600080fd5b8101908080519060200190929190505050905060006107d66107c86003546004546114c8565b670de0b6b3a764000061154e565b90507f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8260405180806020018381526020018281038252600a8152602001807f63757242616c616e6365000000000000000000000000000000000000000000008152506020019250505060405180910390a17f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8160405180806020018381526020018281038252600a8152602001807f61766742616c616e6365000000000000000000000000000000000000000000008152506020019250505060405180910390a17f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8183036040518080602001838152602001828103825260178152602001807f63757242616c616e6365202d2061766742616c616e63650000000000000000008152506020019250505060405180910390a1808210156109af577f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad600060405180806020018381526020018281038252600d8152602001807f696e7465726573742072617465000000000000000000000000000000000000008152506020019250505060405180910390a1600093505050506109d9565b6109d36109cd670de0b6b3a76400006109c885856115dd565b6114c8565b8261154e565b93505050505b919050565b600080849050600084905060008173ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610a3357600080fd5b505af1158015610a47573d6000803e3d6000fd5b505050506040513d6020811015610a5d57600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663095ea7b387876040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610af757600080fd5b505af1158015610b0b573d6000803e3d6000fd5b505050506040513d6020811015610b2157600080fd5b81019080805190602001909291905050505060008273ffffffffffffffffffffffffffffffffffffffff1663a0712d68876040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610b8857600080fd5b505af1158015610b9c573d6000803e3d6000fd5b505050506040513d6020811015610bb257600080fd5b810190808051906020019092919050505090506000811415610c38576000610beb610be588670de0b6b3a76400006114c8565b8461154e565b905060006003549050610c0060035483611666565b600381905550610c2f610c27610c18600454846114c8565b610c2287866114c8565b611666565b60035461154e565b60048190555050505b809450505050509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b6000808290507f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad846040518080602001838152602001828103825260098152602001807f616d6f756e74203d2000000000000000000000000000000000000000000000008152506020019250505060405180910390a17f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad8173ffffffffffffffffffffffffffffffffffffffff16633af9e669306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610d8857600080fd5b505af1158015610d9c573d6000803e3d6000fd5b505050506040513d6020811015610db257600080fd5b81019080805190602001909291905050506040518080602001838152602001828103825260138152602001807f62616c616e63654f66556e6465726c79696e67000000000000000000000000008152506020019250505060405180910390a18073ffffffffffffffffffffffffffffffffffffffff16633af9e669306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610e9057600080fd5b505af1158015610ea4573d6000803e3d6000fd5b505050506040513d6020811015610eba57600080fd5b810190808051906020019092919050505084111591505092915050565b60035481565b600080839050600083905060008173ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610f3257600080fd5b505af1158015610f46573d6000803e3d6000fd5b505050506040513d6020811015610f5c57600080fd5b810190808051906020019092919050505090506000610f7a866106dd565b90506000610fb4610f938a670de0b6b3a76400006114c8565b610faf670de0b6b3a7640000610faa86600261154e565b611666565b61154e565b90506000610fe4610fd683610fd1670de0b6b3a764000087611666565b6114c8565b670de0b6b3a764000061154e565b9050610ff08189610c72565b61104e577f7979dc87a8aa237e89a521cf8882b835cf9a757fda430f3a2d925e1ef6c5bf576040518080602001828103825260278152602001806117346027913960400191505060405180910390a1600096505050505050506113b7565b60008573ffffffffffffffffffffffffffffffffffffffff1663852a12e3836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156110a357600080fd5b505af11580156110b7573d6000803e3d6000fd5b505050506040513d60208110156110cd57600080fd5b8101908080519060200190929190505050905060008114156113585761110f60035461110a61110486670de0b6b3a76400006114c8565b8861154e565b6115dd565b6003819055507f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad611140838d6115dd565b60405180806020018381526020018281038252601e8152602001807f7472616e73666572696e6720746f207363686f6f6c20636f6e747261637400008152506020019250505060405180910390a1611198828c6115dd565b6005600082825401925050819055508673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166111ef858f6115dd565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561125857600080fd5b505af115801561126c573d6000803e3d6000fd5b505050506040513d602081101561128257600080fd5b8101908080519060200190929190505050508673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338d6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561131b57600080fd5b505af115801561132f573d6000803e3d6000fd5b505050506040513d602081101561134557600080fd5b8101908080519060200190929190505050505b7f8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad816040518080602001838152602001828103825260248152602001806116ef602491396040019250505060405180910390a160019750505050505050505b9392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b6000600554905090565b60008082905060008173ffffffffffffffffffffffffffffffffffffffff1663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561144357600080fd5b505af1158015611457573d6000803e3d6000fd5b505050506040513d602081101561146d57600080fd5b8101908080519060200190929190505050905060006114bb6114b56003546114b06114a260035461149d8b6106dd565b6114c8565b671bc16d674ec8000061154e565b611666565b836114c8565b9050809350505050919050565b6000808314156114db5760009050611548565b60008284029050828482816114ec57fe5b0414611543576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117136021913960400191505060405180910390fd5b809150505b92915050565b60008082116115c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b60008284816115d057fe5b0490508091505092915050565b600082821115611655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b6000808284019050838110156116e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fe49662074686973206973206e6f7420302c2074686572652077617320616e206572726f72536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775468657265206973206e6f7420656e6f75676820666f7220746865207769746864726177616c2ea265627a7a723158200d005b0b9fb84f45916824c772bef4c5482bfd993e39f934e3ff770b624fa2d364736f6c6343000510003263616e6e6f74207769746864726177206d6f7265207468616e2062616c616e6365a265627a7a7231582027c8b06947a3cc4f5fd55fe9435ec4df89c98157ef0e18406c4ffb76eef3ba1064736f6c63430005100032",
	"sourceMap": "51:1246:1:-;;;169:108;8:9:-1;5:2;;;30:1;27;20:12;5:2;169:108:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;169:108:1;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;169:108:1;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;169:108:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;231:11;224:4;:18;;;;;;;;;;;;:::i;:::-;;259:10;251:5;;:18;;;;;;;;;;;;;;;;;;169:108;51:1246;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
	"deployedSourceMap": "51:1246:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;378:179;;8:9:-1;5:2;;;30:1;27;20:12;5:2;378:179:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;378:179:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;378:179:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;378:179:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;378:179:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;378:179:1;;;;;;;;;;;;;;;:::i;:::-;;101:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;101:18:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;101:18:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;285:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;285:85:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;285:85:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;565:101;;8:9:-1;5:2;;;30:1;27;20:12;5:2;565:101:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;868:388;;8:9:-1;5:2;;;30:1;27;20:12;5:2;868:388:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;868:388:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;74:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;74:20:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;674:186;;8:9:-1;5:2;;;30:1;27;20:12;5:2;674:186:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;674:186:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;378:179;535:4;542:5;518:30;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;518:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;518:30:1;489:6;:18;496:10;489:18;;;;;;;;;;;;;;;;:60;;;;;;;;;;;;;;;;;;378:179;:::o;101:18::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;285:85::-;325:13;358:4;351:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;285:85;:::o;565:101::-;613:7;640:6;:18;647:10;640:18;;;;;;;;;;;;;;;;;;;;;;;;;633:25;;565:101;:::o;868:388::-;949:7;969:16;994:14;969:40;;1020:15;1038:10;:20;;;1067:4;1038:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1038:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1038:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1038:35:1;;;;;;;;;;;;;;;;1020:53;;1104:6;1093:7;:17;;1084:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1159:10;:19;;;1179:5;;;;;;;;;;;1186:6;1159:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1159:34:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1159:34:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1159:34:1;;;;;;;;;;;;;;;;;1213:10;:20;;;1242:4;1213:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1213:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1213:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1213:35:1;;;;;;;;;;;;;;;;1206:42;;;;868:388;;;;:::o;74:20::-;;;;;;;;;;;;;:::o;674:186::-;739:7;759:16;784:14;759:40;;817:10;:20;;;846:4;817:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;817:35:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;817:35:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;817:35:1;;;;;;;;;;;;;;;;810:42;;;674:186;;;:::o;51:1246::-;;;;;;;;:::o",
	"source": "pragma solidity ^0.5.0;\r\n\r\nimport \"./User.sol\";\r\n\r\ncontract School {\r\n    address public owner;\r\n    string public name;\r\n    mapping(address => address) _users;\r\n\r\n    constructor(string memory _schoolName) public {\r\n      name = _schoolName;\r\n      owner = msg.sender;\r\n    }\r\n\r\n    function getName() public view returns (string memory) {\r\n        return name;\r\n    }\r\n\r\n    function createUserContract(string memory _name) public {\r\n        // instantiate a new user contract\r\n        _users[msg.sender] = address(new User(address(this), _name));\r\n    }\r\n\r\n    function getUserContract() public view returns (address) {\r\n        return _users[msg.sender];\r\n    }\r\n\r\n    function getBalance(address _erc20Contract) public view returns (uint256) {\r\n        Erc20 underlying = Erc20(_erc20Contract);\r\n        return underlying.balanceOf(address(this));\r\n    }\r\n\r\n    function withdrawBalance(uint256 amount, address _erc20Contract) public returns (uint256) {\r\n        Erc20 underlying = Erc20(_erc20Contract);\r\n        uint256 balance = underlying.balanceOf(address(this));\r\n        require (balance <= amount, \"cannot withdraw more than balance\");\r\n        underlying.transfer(owner, amount);\r\n\r\n        return underlying.balanceOf(address(this));\r\n    }\r\n\r\n    function() external payable {}\r\n}",
	"sourcePath": "C:\\Users\\joelk\\Documents\\unicef\\sp21\\consulting-unicef\\blockchain\\contracts\\School.sol",
	"ast": {
	  "absolutePath": "/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/School.sol",
	  "exportedSymbols": {
		"School": [
		  170
		]
	  },
	  "id": 171,
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 34,
		  "literals": [
			"solidity",
			"^",
			"0.5",
			".0"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "0:23:1"
		},
		{
		  "absolutePath": "/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/User.sol",
		  "file": "./User.sol",
		  "id": 35,
		  "nodeType": "ImportDirective",
		  "scope": 171,
		  "sourceUnit": 1007,
		  "src": "27:20:1",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "baseContracts": [],
		  "contractDependencies": [
			1006
		  ],
		  "contractKind": "contract",
		  "documentation": null,
		  "fullyImplemented": true,
		  "id": 170,
		  "linearizedBaseContracts": [
			170
		  ],
		  "name": "School",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "constant": false,
			  "id": 37,
			  "name": "owner",
			  "nodeType": "VariableDeclaration",
			  "scope": 170,
			  "src": "74:20:1",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 36,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "74:7:1",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "value": null,
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 39,
			  "name": "name",
			  "nodeType": "VariableDeclaration",
			  "scope": 170,
			  "src": "101:18:1",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_string_storage",
				"typeString": "string"
			  },
			  "typeName": {
				"id": 38,
				"name": "string",
				"nodeType": "ElementaryTypeName",
				"src": "101:6:1",
				"typeDescriptions": {
				  "typeIdentifier": "t_string_storage_ptr",
				  "typeString": "string"
				}
			  },
			  "value": null,
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 43,
			  "name": "_users",
			  "nodeType": "VariableDeclaration",
			  "scope": 170,
			  "src": "126:34:1",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_address_$",
				"typeString": "mapping(address => address)"
			  },
			  "typeName": {
				"id": 42,
				"keyType": {
				  "id": 40,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "134:7:1",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "126:27:1",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
				  "typeString": "mapping(address => address)"
				},
				"valueType": {
				  "id": 41,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "145:7:1",
				  "stateMutability": "nonpayable",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				}
			  },
			  "value": null,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 57,
				"nodeType": "Block",
				"src": "215:62:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 50,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"argumentTypes": null,
						"id": 48,
						"name": "name",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 39,
						"src": "224:4:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_string_storage",
						  "typeString": "string storage ref"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"argumentTypes": null,
						"id": 49,
						"name": "_schoolName",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 45,
						"src": "231:11:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_string_memory_ptr",
						  "typeString": "string memory"
						}
					  },
					  "src": "224:18:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage",
						"typeString": "string storage ref"
					  }
					},
					"id": 51,
					"nodeType": "ExpressionStatement",
					"src": "224:18:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 55,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"argumentTypes": null,
						"id": 52,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 37,
						"src": "251:5:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"argumentTypes": null,
						"expression": {
						  "argumentTypes": null,
						  "id": 53,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1064,
						  "src": "259:3:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 54,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"referencedDeclaration": null,
						"src": "259:10:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "251:18:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 56,
					"nodeType": "ExpressionStatement",
					"src": "251:18:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 58,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [],
			  "name": "",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 46,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 45,
					"name": "_schoolName",
					"nodeType": "VariableDeclaration",
					"scope": 58,
					"src": "181:25:1",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_string_memory_ptr",
					  "typeString": "string"
					},
					"typeName": {
					  "id": 44,
					  "name": "string",
					  "nodeType": "ElementaryTypeName",
					  "src": "181:6:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage_ptr",
						"typeString": "string"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "180:27:1"
			  },
			  "returnParameters": {
				"id": 47,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "215:0:1"
			  },
			  "scope": 170,
			  "src": "169:108:1",
			  "stateMutability": "nonpayable",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 65,
				"nodeType": "Block",
				"src": "340:30:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 63,
					  "name": "name",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 39,
					  "src": "358:4:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage",
						"typeString": "string storage ref"
					  }
					},
					"functionReturnParameters": 62,
					"id": 64,
					"nodeType": "Return",
					"src": "351:11:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 66,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getName",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 59,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "301:2:1"
			  },
			  "returnParameters": {
				"id": 62,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 61,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 66,
					"src": "325:13:1",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_string_memory_ptr",
					  "typeString": "string"
					},
					"typeName": {
					  "id": 60,
					  "name": "string",
					  "nodeType": "ElementaryTypeName",
					  "src": "325:6:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage_ptr",
						"typeString": "string"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "324:15:1"
			  },
			  "scope": 170,
			  "src": "285:85:1",
			  "stateMutability": "view",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 86,
				"nodeType": "Block",
				"src": "434:123:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 84,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"argumentTypes": null,
						"baseExpression": {
						  "argumentTypes": null,
						  "id": 71,
						  "name": "_users",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 43,
						  "src": "489:6:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_address_$",
							"typeString": "mapping(address => address)"
						  }
						},
						"id": 74,
						"indexExpression": {
						  "argumentTypes": null,
						  "expression": {
							"argumentTypes": null,
							"id": 72,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1064,
							"src": "496:3:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 73,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": null,
						  "src": "496:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "489:18:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"argumentTypes": null,
						"arguments": [
						  {
							"argumentTypes": null,
							"arguments": [
							  {
								"argumentTypes": null,
								"arguments": [
								  {
									"argumentTypes": null,
									"id": 79,
									"name": "this",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 1084,
									"src": "535:4:1",
									"typeDescriptions": {
									  "typeIdentifier": "t_contract$_School_$170",
									  "typeString": "contract School"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_contract$_School_$170",
									  "typeString": "contract School"
									}
								  ],
								  "id": 78,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "527:7:1",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": "address"
								},
								"id": 80,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"names": [],
								"nodeType": "FunctionCall",
								"src": "527:13:1",
								"typeDescriptions": {
								  "typeIdentifier": "t_address_payable",
								  "typeString": "address payable"
								}
							  },
							  {
								"argumentTypes": null,
								"id": 81,
								"name": "_name",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 68,
								"src": "542:5:1",
								"typeDescriptions": {
								  "typeIdentifier": "t_string_memory_ptr",
								  "typeString": "string memory"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address_payable",
								  "typeString": "address payable"
								},
								{
								  "typeIdentifier": "t_string_memory_ptr",
								  "typeString": "string memory"
								}
							  ],
							  "id": 77,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "NewExpression",
							  "src": "518:8:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_creation_nonpayable$_t_address_payable_$_t_string_memory_ptr_$returns$_t_contract$_User_$1006_$",
								"typeString": "function (address payable,string memory) returns (contract User)"
							  },
							  "typeName": {
								"contractScope": null,
								"id": 76,
								"name": "User",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 1006,
								"src": "522:4:1",
								"typeDescriptions": {
								  "typeIdentifier": "t_contract$_User_$1006",
								  "typeString": "contract User"
								}
							  }
							},
							"id": 82,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "518:30:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_contract$_User_$1006",
							  "typeString": "contract User"
							}
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_contract$_User_$1006",
							  "typeString": "contract User"
							}
						  ],
						  "id": 75,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "nodeType": "ElementaryTypeNameExpression",
						  "src": "510:7:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_address_$",
							"typeString": "type(address)"
						  },
						  "typeName": "address"
						},
						"id": 83,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "typeConversion",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "510:39:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "489:60:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 85,
					"nodeType": "ExpressionStatement",
					"src": "489:60:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 87,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "createUserContract",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 69,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 68,
					"name": "_name",
					"nodeType": "VariableDeclaration",
					"scope": 87,
					"src": "406:19:1",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_string_memory_ptr",
					  "typeString": "string"
					},
					"typeName": {
					  "id": 67,
					  "name": "string",
					  "nodeType": "ElementaryTypeName",
					  "src": "406:6:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage_ptr",
						"typeString": "string"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "405:21:1"
			  },
			  "returnParameters": {
				"id": 70,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "434:0:1"
			  },
			  "scope": 170,
			  "src": "378:179:1",
			  "stateMutability": "nonpayable",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 97,
				"nodeType": "Block",
				"src": "622:44:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "baseExpression": {
						"argumentTypes": null,
						"id": 92,
						"name": "_users",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 43,
						"src": "640:6:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
						  "typeString": "mapping(address => address)"
						}
					  },
					  "id": 95,
					  "indexExpression": {
						"argumentTypes": null,
						"expression": {
						  "argumentTypes": null,
						  "id": 93,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1064,
						  "src": "647:3:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 94,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"referencedDeclaration": null,
						"src": "647:10:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "640:18:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"functionReturnParameters": 91,
					"id": 96,
					"nodeType": "Return",
					"src": "633:25:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 98,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getUserContract",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 88,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "589:2:1"
			  },
			  "returnParameters": {
				"id": 91,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 90,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 98,
					"src": "613:7:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 89,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "613:7:1",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "612:9:1"
			  },
			  "scope": 170,
			  "src": "565:101:1",
			  "stateMutability": "view",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 118,
				"nodeType": "Block",
				"src": "748:112:1",
				"statements": [
				  {
					"assignments": [
					  106
					],
					"declarations": [
					  {
						"constant": false,
						"id": 106,
						"name": "underlying",
						"nodeType": "VariableDeclaration",
						"scope": 118,
						"src": "759:16:1",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_Erc20_$395",
						  "typeString": "contract Erc20"
						},
						"typeName": {
						  "contractScope": null,
						  "id": 105,
						  "name": "Erc20",
						  "nodeType": "UserDefinedTypeName",
						  "referencedDeclaration": 395,
						  "src": "759:5:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"value": null,
						"visibility": "internal"
					  }
					],
					"id": 110,
					"initialValue": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "id": 108,
						  "name": "_erc20Contract",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 100,
						  "src": "784:14:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 107,
						"name": "Erc20",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 395,
						"src": "778:5:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_type$_t_contract$_Erc20_$395_$",
						  "typeString": "type(contract Erc20)"
						}
					  },
					  "id": 109,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "typeConversion",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "778:21:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_Erc20_$395",
						"typeString": "contract Erc20"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "759:40:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "arguments": [
							{
							  "argumentTypes": null,
							  "id": 114,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1084,
							  "src": "846:4:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							],
							"id": 113,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "838:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": "address"
						  },
						  "id": 115,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "838:13:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 111,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 106,
						  "src": "817:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 112,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "balanceOf",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 394,
						"src": "817:20:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view external returns (uint256)"
						}
					  },
					  "id": 116,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "817:35:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 104,
					"id": 117,
					"nodeType": "Return",
					"src": "810:42:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 119,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getBalance",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 101,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 100,
					"name": "_erc20Contract",
					"nodeType": "VariableDeclaration",
					"scope": 119,
					"src": "694:22:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 99,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "694:7:1",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "693:24:1"
			  },
			  "returnParameters": {
				"id": 104,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 103,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 119,
					"src": "739:7:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 102,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "739:7:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "738:9:1"
			  },
			  "scope": 170,
			  "src": "674:186:1",
			  "stateMutability": "view",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 164,
				"nodeType": "Block",
				"src": "958:298:1",
				"statements": [
				  {
					"assignments": [
					  129
					],
					"declarations": [
					  {
						"constant": false,
						"id": 129,
						"name": "underlying",
						"nodeType": "VariableDeclaration",
						"scope": 164,
						"src": "969:16:1",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_Erc20_$395",
						  "typeString": "contract Erc20"
						},
						"typeName": {
						  "contractScope": null,
						  "id": 128,
						  "name": "Erc20",
						  "nodeType": "UserDefinedTypeName",
						  "referencedDeclaration": 395,
						  "src": "969:5:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"value": null,
						"visibility": "internal"
					  }
					],
					"id": 133,
					"initialValue": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "id": 131,
						  "name": "_erc20Contract",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 123,
						  "src": "994:14:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 130,
						"name": "Erc20",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 395,
						"src": "988:5:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_type$_t_contract$_Erc20_$395_$",
						  "typeString": "type(contract Erc20)"
						}
					  },
					  "id": 132,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "typeConversion",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "988:21:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_Erc20_$395",
						"typeString": "contract Erc20"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "969:40:1"
				  },
				  {
					"assignments": [
					  135
					],
					"declarations": [
					  {
						"constant": false,
						"id": 135,
						"name": "balance",
						"nodeType": "VariableDeclaration",
						"scope": 164,
						"src": "1020:15:1",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 134,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "1020:7:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"value": null,
						"visibility": "internal"
					  }
					],
					"id": 142,
					"initialValue": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "arguments": [
							{
							  "argumentTypes": null,
							  "id": 139,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1084,
							  "src": "1067:4:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							],
							"id": 138,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1059:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": "address"
						  },
						  "id": 140,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1059:13:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 136,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 129,
						  "src": "1038:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 137,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "balanceOf",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 394,
						"src": "1038:20:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view external returns (uint256)"
						}
					  },
					  "id": 141,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1038:35:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "1020:53:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 146,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"argumentTypes": null,
							"id": 144,
							"name": "balance",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 135,
							"src": "1093:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"argumentTypes": null,
							"id": 145,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 121,
							"src": "1104:6:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "1093:17:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "argumentTypes": null,
						  "hexValue": "63616e6e6f74207769746864726177206d6f7265207468616e2062616c616e6365",
						  "id": 147,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1112:35:1",
						  "subdenomination": null,
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_0e9d7931db26e00910caa454857d3fc08720d2658c04b97c0bbdfd312cf06911",
							"typeString": "literal_string \"cannot withdraw more than balance\""
						  },
						  "value": "cannot withdraw more than balance"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_0e9d7931db26e00910caa454857d3fc08720d2658c04b97c0bbdfd312cf06911",
							"typeString": "literal_string \"cannot withdraw more than balance\""
						  }
						],
						"id": 143,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  1067,
						  1068
						],
						"referencedDeclaration": 1068,
						"src": "1084:7:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 148,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1084:64:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 149,
					"nodeType": "ExpressionStatement",
					"src": "1084:64:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "id": 153,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 37,
						  "src": "1179:5:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "argumentTypes": null,
						  "id": 154,
						  "name": "amount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 121,
						  "src": "1186:6:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 150,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 129,
						  "src": "1159:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 152,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 387,
						"src": "1159:19:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
						  "typeString": "function (address,uint256) external returns (bool)"
						}
					  },
					  "id": 155,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1159:34:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 156,
					"nodeType": "ExpressionStatement",
					"src": "1159:34:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "arguments": [
							{
							  "argumentTypes": null,
							  "id": 160,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1084,
							  "src": "1242:4:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							],
							"id": 159,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1234:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": "address"
						  },
						  "id": 161,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1234:13:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 157,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 129,
						  "src": "1213:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 158,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "balanceOf",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 394,
						"src": "1213:20:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view external returns (uint256)"
						}
					  },
					  "id": 162,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1213:35:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 127,
					"id": 163,
					"nodeType": "Return",
					"src": "1206:42:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 165,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "withdrawBalance",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 124,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 121,
					"name": "amount",
					"nodeType": "VariableDeclaration",
					"scope": 165,
					"src": "893:14:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 120,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "893:7:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"value": null,
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 123,
					"name": "_erc20Contract",
					"nodeType": "VariableDeclaration",
					"scope": 165,
					"src": "909:22:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 122,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "909:7:1",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "892:40:1"
			  },
			  "returnParameters": {
				"id": 127,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 126,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 165,
					"src": "949:7:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 125,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "949:7:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "948:9:1"
			  },
			  "scope": 170,
			  "src": "868:388:1",
			  "stateMutability": "nonpayable",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 168,
				"nodeType": "Block",
				"src": "1292:2:1",
				"statements": []
			  },
			  "documentation": null,
			  "id": 169,
			  "implemented": true,
			  "kind": "fallback",
			  "modifiers": [],
			  "name": "",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 166,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1272:2:1"
			  },
			  "returnParameters": {
				"id": 167,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1292:0:1"
			  },
			  "scope": 170,
			  "src": "1264:30:1",
			  "stateMutability": "payable",
			  "superFunction": null,
			  "visibility": "external"
			}
		  ],
		  "scope": 171,
		  "src": "51:1246:1"
		}
	  ],
	  "src": "0:1297:1"
	},
	"legacyAST": {
	  "absolutePath": "/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/School.sol",
	  "exportedSymbols": {
		"School": [
		  170
		]
	  },
	  "id": 171,
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 34,
		  "literals": [
			"solidity",
			"^",
			"0.5",
			".0"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "0:23:1"
		},
		{
		  "absolutePath": "/C/Users/joelk/Documents/unicef/sp21/consulting-unicef/blockchain/contracts/User.sol",
		  "file": "./User.sol",
		  "id": 35,
		  "nodeType": "ImportDirective",
		  "scope": 171,
		  "sourceUnit": 1007,
		  "src": "27:20:1",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "baseContracts": [],
		  "contractDependencies": [
			1006
		  ],
		  "contractKind": "contract",
		  "documentation": null,
		  "fullyImplemented": true,
		  "id": 170,
		  "linearizedBaseContracts": [
			170
		  ],
		  "name": "School",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "constant": false,
			  "id": 37,
			  "name": "owner",
			  "nodeType": "VariableDeclaration",
			  "scope": 170,
			  "src": "74:20:1",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 36,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "74:7:1",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "value": null,
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 39,
			  "name": "name",
			  "nodeType": "VariableDeclaration",
			  "scope": 170,
			  "src": "101:18:1",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_string_storage",
				"typeString": "string"
			  },
			  "typeName": {
				"id": 38,
				"name": "string",
				"nodeType": "ElementaryTypeName",
				"src": "101:6:1",
				"typeDescriptions": {
				  "typeIdentifier": "t_string_storage_ptr",
				  "typeString": "string"
				}
			  },
			  "value": null,
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 43,
			  "name": "_users",
			  "nodeType": "VariableDeclaration",
			  "scope": 170,
			  "src": "126:34:1",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_address_$",
				"typeString": "mapping(address => address)"
			  },
			  "typeName": {
				"id": 42,
				"keyType": {
				  "id": 40,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "134:7:1",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "126:27:1",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
				  "typeString": "mapping(address => address)"
				},
				"valueType": {
				  "id": 41,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "145:7:1",
				  "stateMutability": "nonpayable",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				}
			  },
			  "value": null,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 57,
				"nodeType": "Block",
				"src": "215:62:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 50,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"argumentTypes": null,
						"id": 48,
						"name": "name",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 39,
						"src": "224:4:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_string_storage",
						  "typeString": "string storage ref"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"argumentTypes": null,
						"id": 49,
						"name": "_schoolName",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 45,
						"src": "231:11:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_string_memory_ptr",
						  "typeString": "string memory"
						}
					  },
					  "src": "224:18:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage",
						"typeString": "string storage ref"
					  }
					},
					"id": 51,
					"nodeType": "ExpressionStatement",
					"src": "224:18:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 55,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"argumentTypes": null,
						"id": 52,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 37,
						"src": "251:5:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"argumentTypes": null,
						"expression": {
						  "argumentTypes": null,
						  "id": 53,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1064,
						  "src": "259:3:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 54,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"referencedDeclaration": null,
						"src": "259:10:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "251:18:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 56,
					"nodeType": "ExpressionStatement",
					"src": "251:18:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 58,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [],
			  "name": "",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 46,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 45,
					"name": "_schoolName",
					"nodeType": "VariableDeclaration",
					"scope": 58,
					"src": "181:25:1",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_string_memory_ptr",
					  "typeString": "string"
					},
					"typeName": {
					  "id": 44,
					  "name": "string",
					  "nodeType": "ElementaryTypeName",
					  "src": "181:6:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage_ptr",
						"typeString": "string"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "180:27:1"
			  },
			  "returnParameters": {
				"id": 47,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "215:0:1"
			  },
			  "scope": 170,
			  "src": "169:108:1",
			  "stateMutability": "nonpayable",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 65,
				"nodeType": "Block",
				"src": "340:30:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 63,
					  "name": "name",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 39,
					  "src": "358:4:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage",
						"typeString": "string storage ref"
					  }
					},
					"functionReturnParameters": 62,
					"id": 64,
					"nodeType": "Return",
					"src": "351:11:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 66,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getName",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 59,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "301:2:1"
			  },
			  "returnParameters": {
				"id": 62,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 61,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 66,
					"src": "325:13:1",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_string_memory_ptr",
					  "typeString": "string"
					},
					"typeName": {
					  "id": 60,
					  "name": "string",
					  "nodeType": "ElementaryTypeName",
					  "src": "325:6:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage_ptr",
						"typeString": "string"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "324:15:1"
			  },
			  "scope": 170,
			  "src": "285:85:1",
			  "stateMutability": "view",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 86,
				"nodeType": "Block",
				"src": "434:123:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "id": 84,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"argumentTypes": null,
						"baseExpression": {
						  "argumentTypes": null,
						  "id": 71,
						  "name": "_users",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 43,
						  "src": "489:6:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_address_$",
							"typeString": "mapping(address => address)"
						  }
						},
						"id": 74,
						"indexExpression": {
						  "argumentTypes": null,
						  "expression": {
							"argumentTypes": null,
							"id": 72,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1064,
							"src": "496:3:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 73,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": null,
						  "src": "496:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "489:18:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"argumentTypes": null,
						"arguments": [
						  {
							"argumentTypes": null,
							"arguments": [
							  {
								"argumentTypes": null,
								"arguments": [
								  {
									"argumentTypes": null,
									"id": 79,
									"name": "this",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 1084,
									"src": "535:4:1",
									"typeDescriptions": {
									  "typeIdentifier": "t_contract$_School_$170",
									  "typeString": "contract School"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_contract$_School_$170",
									  "typeString": "contract School"
									}
								  ],
								  "id": 78,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "527:7:1",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": "address"
								},
								"id": 80,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"names": [],
								"nodeType": "FunctionCall",
								"src": "527:13:1",
								"typeDescriptions": {
								  "typeIdentifier": "t_address_payable",
								  "typeString": "address payable"
								}
							  },
							  {
								"argumentTypes": null,
								"id": 81,
								"name": "_name",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 68,
								"src": "542:5:1",
								"typeDescriptions": {
								  "typeIdentifier": "t_string_memory_ptr",
								  "typeString": "string memory"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address_payable",
								  "typeString": "address payable"
								},
								{
								  "typeIdentifier": "t_string_memory_ptr",
								  "typeString": "string memory"
								}
							  ],
							  "id": 77,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "NewExpression",
							  "src": "518:8:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_creation_nonpayable$_t_address_payable_$_t_string_memory_ptr_$returns$_t_contract$_User_$1006_$",
								"typeString": "function (address payable,string memory) returns (contract User)"
							  },
							  "typeName": {
								"contractScope": null,
								"id": 76,
								"name": "User",
								"nodeType": "UserDefinedTypeName",
								"referencedDeclaration": 1006,
								"src": "522:4:1",
								"typeDescriptions": {
								  "typeIdentifier": "t_contract$_User_$1006",
								  "typeString": "contract User"
								}
							  }
							},
							"id": 82,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "518:30:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_contract$_User_$1006",
							  "typeString": "contract User"
							}
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_contract$_User_$1006",
							  "typeString": "contract User"
							}
						  ],
						  "id": 75,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "nodeType": "ElementaryTypeNameExpression",
						  "src": "510:7:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_address_$",
							"typeString": "type(address)"
						  },
						  "typeName": "address"
						},
						"id": 83,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "typeConversion",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "510:39:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "489:60:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 85,
					"nodeType": "ExpressionStatement",
					"src": "489:60:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 87,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "createUserContract",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 69,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 68,
					"name": "_name",
					"nodeType": "VariableDeclaration",
					"scope": 87,
					"src": "406:19:1",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_string_memory_ptr",
					  "typeString": "string"
					},
					"typeName": {
					  "id": 67,
					  "name": "string",
					  "nodeType": "ElementaryTypeName",
					  "src": "406:6:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_string_storage_ptr",
						"typeString": "string"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "405:21:1"
			  },
			  "returnParameters": {
				"id": 70,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "434:0:1"
			  },
			  "scope": 170,
			  "src": "378:179:1",
			  "stateMutability": "nonpayable",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 97,
				"nodeType": "Block",
				"src": "622:44:1",
				"statements": [
				  {
					"expression": {
					  "argumentTypes": null,
					  "baseExpression": {
						"argumentTypes": null,
						"id": 92,
						"name": "_users",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 43,
						"src": "640:6:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_address_$",
						  "typeString": "mapping(address => address)"
						}
					  },
					  "id": 95,
					  "indexExpression": {
						"argumentTypes": null,
						"expression": {
						  "argumentTypes": null,
						  "id": 93,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1064,
						  "src": "647:3:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 94,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"referencedDeclaration": null,
						"src": "647:10:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "640:18:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"functionReturnParameters": 91,
					"id": 96,
					"nodeType": "Return",
					"src": "633:25:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 98,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getUserContract",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 88,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "589:2:1"
			  },
			  "returnParameters": {
				"id": 91,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 90,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 98,
					"src": "613:7:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 89,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "613:7:1",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "612:9:1"
			  },
			  "scope": 170,
			  "src": "565:101:1",
			  "stateMutability": "view",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 118,
				"nodeType": "Block",
				"src": "748:112:1",
				"statements": [
				  {
					"assignments": [
					  106
					],
					"declarations": [
					  {
						"constant": false,
						"id": 106,
						"name": "underlying",
						"nodeType": "VariableDeclaration",
						"scope": 118,
						"src": "759:16:1",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_Erc20_$395",
						  "typeString": "contract Erc20"
						},
						"typeName": {
						  "contractScope": null,
						  "id": 105,
						  "name": "Erc20",
						  "nodeType": "UserDefinedTypeName",
						  "referencedDeclaration": 395,
						  "src": "759:5:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"value": null,
						"visibility": "internal"
					  }
					],
					"id": 110,
					"initialValue": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "id": 108,
						  "name": "_erc20Contract",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 100,
						  "src": "784:14:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 107,
						"name": "Erc20",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 395,
						"src": "778:5:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_type$_t_contract$_Erc20_$395_$",
						  "typeString": "type(contract Erc20)"
						}
					  },
					  "id": 109,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "typeConversion",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "778:21:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_Erc20_$395",
						"typeString": "contract Erc20"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "759:40:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "arguments": [
							{
							  "argumentTypes": null,
							  "id": 114,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1084,
							  "src": "846:4:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							],
							"id": 113,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "838:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": "address"
						  },
						  "id": 115,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "838:13:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 111,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 106,
						  "src": "817:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 112,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "balanceOf",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 394,
						"src": "817:20:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view external returns (uint256)"
						}
					  },
					  "id": 116,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "817:35:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 104,
					"id": 117,
					"nodeType": "Return",
					"src": "810:42:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 119,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getBalance",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 101,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 100,
					"name": "_erc20Contract",
					"nodeType": "VariableDeclaration",
					"scope": 119,
					"src": "694:22:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 99,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "694:7:1",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "693:24:1"
			  },
			  "returnParameters": {
				"id": 104,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 103,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 119,
					"src": "739:7:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 102,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "739:7:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "738:9:1"
			  },
			  "scope": 170,
			  "src": "674:186:1",
			  "stateMutability": "view",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 164,
				"nodeType": "Block",
				"src": "958:298:1",
				"statements": [
				  {
					"assignments": [
					  129
					],
					"declarations": [
					  {
						"constant": false,
						"id": 129,
						"name": "underlying",
						"nodeType": "VariableDeclaration",
						"scope": 164,
						"src": "969:16:1",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_Erc20_$395",
						  "typeString": "contract Erc20"
						},
						"typeName": {
						  "contractScope": null,
						  "id": 128,
						  "name": "Erc20",
						  "nodeType": "UserDefinedTypeName",
						  "referencedDeclaration": 395,
						  "src": "969:5:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"value": null,
						"visibility": "internal"
					  }
					],
					"id": 133,
					"initialValue": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "id": 131,
						  "name": "_erc20Contract",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 123,
						  "src": "994:14:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 130,
						"name": "Erc20",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 395,
						"src": "988:5:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_type$_t_contract$_Erc20_$395_$",
						  "typeString": "type(contract Erc20)"
						}
					  },
					  "id": 132,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "typeConversion",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "988:21:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_Erc20_$395",
						"typeString": "contract Erc20"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "969:40:1"
				  },
				  {
					"assignments": [
					  135
					],
					"declarations": [
					  {
						"constant": false,
						"id": 135,
						"name": "balance",
						"nodeType": "VariableDeclaration",
						"scope": 164,
						"src": "1020:15:1",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 134,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "1020:7:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"value": null,
						"visibility": "internal"
					  }
					],
					"id": 142,
					"initialValue": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "arguments": [
							{
							  "argumentTypes": null,
							  "id": 139,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1084,
							  "src": "1067:4:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							],
							"id": 138,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1059:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": "address"
						  },
						  "id": 140,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1059:13:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 136,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 129,
						  "src": "1038:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 137,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "balanceOf",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 394,
						"src": "1038:20:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view external returns (uint256)"
						}
					  },
					  "id": 141,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1038:35:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "1020:53:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 146,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"argumentTypes": null,
							"id": 144,
							"name": "balance",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 135,
							"src": "1093:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"argumentTypes": null,
							"id": 145,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 121,
							"src": "1104:6:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "1093:17:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "argumentTypes": null,
						  "hexValue": "63616e6e6f74207769746864726177206d6f7265207468616e2062616c616e6365",
						  "id": 147,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1112:35:1",
						  "subdenomination": null,
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_0e9d7931db26e00910caa454857d3fc08720d2658c04b97c0bbdfd312cf06911",
							"typeString": "literal_string \"cannot withdraw more than balance\""
						  },
						  "value": "cannot withdraw more than balance"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_0e9d7931db26e00910caa454857d3fc08720d2658c04b97c0bbdfd312cf06911",
							"typeString": "literal_string \"cannot withdraw more than balance\""
						  }
						],
						"id": 143,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  1067,
						  1068
						],
						"referencedDeclaration": 1068,
						"src": "1084:7:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 148,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1084:64:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 149,
					"nodeType": "ExpressionStatement",
					"src": "1084:64:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "id": 153,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 37,
						  "src": "1179:5:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "argumentTypes": null,
						  "id": 154,
						  "name": "amount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 121,
						  "src": "1186:6:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 150,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 129,
						  "src": "1159:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 152,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 387,
						"src": "1159:19:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
						  "typeString": "function (address,uint256) external returns (bool)"
						}
					  },
					  "id": 155,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1159:34:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 156,
					"nodeType": "ExpressionStatement",
					"src": "1159:34:1"
				  },
				  {
					"expression": {
					  "argumentTypes": null,
					  "arguments": [
						{
						  "argumentTypes": null,
						  "arguments": [
							{
							  "argumentTypes": null,
							  "id": 160,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1084,
							  "src": "1242:4:1",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_School_$170",
								"typeString": "contract School"
							  }
							],
							"id": 159,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1234:7:1",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": "address"
						  },
						  "id": 161,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1234:13:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						],
						"expression": {
						  "argumentTypes": null,
						  "id": 157,
						  "name": "underlying",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 129,
						  "src": "1213:10:1",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Erc20_$395",
							"typeString": "contract Erc20"
						  }
						},
						"id": 158,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "balanceOf",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 394,
						"src": "1213:20:1",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view external returns (uint256)"
						}
					  },
					  "id": 162,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1213:35:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 127,
					"id": 163,
					"nodeType": "Return",
					"src": "1206:42:1"
				  }
				]
			  },
			  "documentation": null,
			  "id": 165,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "withdrawBalance",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 124,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 121,
					"name": "amount",
					"nodeType": "VariableDeclaration",
					"scope": 165,
					"src": "893:14:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 120,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "893:7:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"value": null,
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 123,
					"name": "_erc20Contract",
					"nodeType": "VariableDeclaration",
					"scope": 165,
					"src": "909:22:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 122,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "909:7:1",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "892:40:1"
			  },
			  "returnParameters": {
				"id": 127,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 126,
					"name": "",
					"nodeType": "VariableDeclaration",
					"scope": 165,
					"src": "949:7:1",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 125,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "949:7:1",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"value": null,
					"visibility": "internal"
				  }
				],
				"src": "948:9:1"
			  },
			  "scope": 170,
			  "src": "868:388:1",
			  "stateMutability": "nonpayable",
			  "superFunction": null,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 168,
				"nodeType": "Block",
				"src": "1292:2:1",
				"statements": []
			  },
			  "documentation": null,
			  "id": 169,
			  "implemented": true,
			  "kind": "fallback",
			  "modifiers": [],
			  "name": "",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 166,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1272:2:1"
			  },
			  "returnParameters": {
				"id": 167,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1292:0:1"
			  },
			  "scope": 170,
			  "src": "1264:30:1",
			  "stateMutability": "payable",
			  "superFunction": null,
			  "visibility": "external"
			}
		  ],
		  "scope": 171,
		  "src": "51:1246:1"
		}
	  ],
	  "src": "0:1297:1"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
	},
	"networks": {
	  "1": {
		"events": {
		  "0x8d1cced004452bd270777a8c670f9f7e7c4fdde56f2db331fe289d39dc2624ad": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			  }
			],
			"name": "MyLog",
			"type": "event"
		  }
		},
		"links": {},
		"address": "0x0Bb909b7c3817F8fB7188e8fbaA2763028956E30",
		"transactionHash": "0x11b621ee2a31d9b22d70cf06ad43a1ff4982b11fa7083506e1904331130b5287"
	  }
	},
	"schemaVersion": "3.3.1",
	"updatedAt": "2021-03-21T18:07:37.742Z",
	"networkType": "ethereum",
	"devdoc": {
	  "methods": {}
	},
	"userdoc": {
	  "methods": {}
	}
  }