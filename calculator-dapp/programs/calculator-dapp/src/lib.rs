use anchor_lang::prelude::*;

declare_id!("C1Gy7d3JF944L1in9HCNmBgYABfNjjRwRpuzjaCQ4Ae8");

#[program]
pub mod calculator_dapp {
    use anchor_lang::solana_program::entrypoint::ProgramResult;

    use super::*;
    // Function to create a new calculator, initializing it with a greeting message
    pub fn create(ctx: Context<Create>, init_message: String) -> ProgramResult {
        // Retrieve a mutable reference to the calculator account from the context
        let calculator = &mut ctx.accounts.calculator;
        // Set the greeting field of the calculator account to the provided initial message
        calculator.greeting = init_message;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Create<'info> {
    // Account to store calculator data; initialized with a specified payer and allocated space
    // Attributes:
    // - init: Marks the account for initialization
    // - payer: Identifies the 'user' account as the one funding the account creation
    // - space: Allocates 264 bytes for the account, sufficient for its data requirements
    #[account(init, payer=user, space=264)]
    pub calculator: Account<'info, Calculator>,
    // User account provided as a signer for the transaction
    #[account(mut)]
    pub user: Signer<'info>,
    // Reference to the system program, which is a required component for account creation
    // Provides the ability to create and manage accounts on the Solana blockchain
    pub system_program: Program<'info, System>
}

// Defines the structure of a calculator account on Solana
#[account]
pub struct Calculator {
    pub greeting: String,
    pub result: i64,
    pub remainder: i64
}