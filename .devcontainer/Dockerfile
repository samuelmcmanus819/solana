FROM  --platform=linux/amd64 mcr.microsoft.com/devcontainers/base:ubuntu-24.04
RUN apt update && apt upgrade -y 
# Install Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
# Install Solana CLI tools
RUN curl -sSfL https://release.anza.xyz/stable/install | sh
# Install Anchor
RUN cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
RUN avm install latest && avm use latest
# Install Nodejs
RUN apt install -y nodejs npm && npm install -g yarn && \
    yarn add mocha -g
# Install Token CLI (used for creating and minting tokens)
RUN apt install -y libudev-dev librust-openssl-sys-dev
RUN cargo install spl-token-cli
# Build solana-test-validator from scratch
RUN apt install -y libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang make protobuf-compiler && \
    git clone https://github.com/solana-labs/solana.git && cd solana && \
    cargo build --bin solana-test-validator --release && \
    mv ./target/release/solana-test-validator /root/.local/share/solana/install/active_release/bin/solana-test-validator && \
    cd .. && rm -rf solana