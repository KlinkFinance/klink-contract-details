# Klink-Contract-Details

This repo is built for getting smart contract details for li.fi

## Install

- Install Package using below command:
  `npm i klink-contract-details`

## Usage

- Below is the code snippet is to fetch wallet address of any asset for a specific chain

```
import { getAddressForAsset } from "klink-contract-details";

const result = await getAddressForAsset({
    chainId: "133",
    asset: "USDT",
});

// result will be : { address: "0x0000000000000000000000000000000000000000" }
```

- Below code snippet is to fetch addresses for fromToken and toToken for a specific chain

```
import { getAddressForAssets } from "klink-contract-details";

const result = await getAddressForAssets({
    chainId: "133",
    fromAsset: "USDT",
    toAsset: "MATIC",
});

/**
 result will be : {
  fromAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  toAddress: '0x0000000000000000000000000000000000000000'
}
**/
```
