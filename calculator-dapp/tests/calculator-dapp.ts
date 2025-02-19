import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { CalculatorDapp } from "../target/types/calculator_dapp";
import { assert } from "chai";


describe("calculator-dapp", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(anchor.AnchorProvider.env());

  const calculator = anchor.web3.Keypair.generate();
  const program = anchor.workspace.CalculatorDapp as Program<CalculatorDapp>;
  const { SystemProgram } = anchor.web3;

  it("Is initialized!", async () => {
    await program.methods.create("Welcome to Solana")
      .accounts({
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
      })
      .signers([calculator])
      .rpc();

    const account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.greeting === "Welcome to Solana");
  });
});
