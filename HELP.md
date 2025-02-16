# Add a Wallet
1. Recover your wallet with `solana-keygen recover`, then enter your recovery phrase

# Request an Airdrop via Devnet
1. Navigate to https://faucet.solana.com/
2. Obtain your wallet's public key
```
solana-keygen pubkey
```
3. Enter your wallet's public key in the faucet URL, then request an airdrop
4. Confirm your balance
```
solana balance -ud
```

# Creating a Token
Note: This is creating a nameless token with no metadata attached. Haven't figured out how to do anything fancy here.
1. Follow the processes above to add a wallet and request an airdrop.
2. To create a token on the devnet, run the `spl-token` creation tool, then note down the token address
```
spl-token create-token --url devnet
```
3. Create an account for your token 
```
spl-token create-account <token-address> --url devnet
```
### Minting a Token
1. Mint your token 
```
spl-token mint <token-address> <amount> --url devnet
```
2. Validate your balance of your new token
```
spl-token balance <token-address> --url devnet
```
### Renouncing your minting authority
1. To renounce your minting authority, you can use the following:
```
spl-token authorize <token-address> mint --disable --url devnet
```
### Burning tokens
1. To burn your tokens, you can use the following:
```
spl-token burn <token-account> <amount>
```

# Creating a Program
1. Initialize a new Anchor program
```
anchor init <project-name>
```