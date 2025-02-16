import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { CalculatorDapp } from "../target/types/calculator_dapp";


describe("calculator-dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CalculatorDapp as Program<CalculatorDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.create("Welcome to Solana").rpc();
    console.log("Your transaction signature", tx);
  });
});
