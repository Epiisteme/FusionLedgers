# Prelude
We are building a new ledger for wide spectrum of autonomous interactions between humans, humans and machines and machine to machine touchpoints. This is a Distributed Ledger Technology for Decentralised Data Stream Management using Cryptographic Primitives and Coherent Consensus Algorithms. This Ledger is leveraging the power of cutting edge cryptographic primitives such as Zero Knowledge Proofs, Polynomial Commitments, Random Oracles, and Distributed Data Structures such as Direct Acyclic Graphs, Merkle Trees and JSON Schema based Linked Data Streams. The fusion ledger is currently deployed using Ethereum and IPFS.

# Reference Architeture 
* Schema Layer - JSON Schema based Linked Data
* Distibution Layer - Distributed Streams of Linked Data
* Fusion Layer - Directed Acyclic Graph of Fused Streams
* Trust Layer - Verified Graphs, Commitments and Proofs
* Transaction Layer - Asynchronous Workflows with Oracles
* Economy Layer - Coherent Computation of Stakes and Slashes
* Application Layer - Multi Signature Wallets with Hash based Signatures

# Ledger Users
There will be three set of users. Data Providers, Data Consumers and Data Verifiers.

# Solution Design
Smart Contracts, Random Oracles and Streaming Data Sources are the core components of the Fusion Ledger. De-Identification of Data in Graphs through Verifiable Random Functions and Anonymisation of Data through Probabilistic Proofs is a highlight.

## Multisignature Wallet
It is used when we need more than one person to agree for a transaction to occur. It increases security and is also used in escrow transactions. It is a better option whenever large funds are involved.

* https://www.binance.vision/security/what-is-a-multisig-wallet
* https://github.com/gnosis/MultiSigWallet

## Pederson Commitments 
Here we are using elliptic curve (addition and subtraction) and discrete log to establish the commitment. The equation is
C= aX + bY. Here, C= commitment X,Y= generators, a=message, b=random number within the range less than p 

(21888242871839275222 246405745257275088548364400416034343698204186575808495617)  

* https://github.com/christsim/pedersen-commitments
* https://www.youtube.com/watch?v=J9SOk9dIOCk
* https://asecuritysite.com/encryption/ped


## Zero Knowledge Proofs
We are using zero knowledge proofs.It is a method  by which one party can prove to another party that they know a value a, without conveying any information except that they know the value x.For generation and verification of proofs we are using Zokrates a toolbox for zkSNARKS on Ethereum. Major steps involved in this are -

* Compiling the proof
* Pass arguments and compute the witness
* Generate proof
* Export verifier contract
* Verify the proof

## IPFS (InterPlanetary File System)
It is a protocol and peer-to-peer network for  storing and sharing data in a distributed file system. It content-addressing to uniquely identify each file in a global namespace connecting all computing devices. Here we are using js ipfs (p2p protocol in javascript) to store data in Directed Acyclic Graph (DAG). We can link the data through content identifiers (CID).

## Oraclize 
It allows external data i.e non blockchain data to be sent in contracts. We can fetch data through URL, Wolfram Alpha and IPFS. Here, we will be fetching data stored in IPFS in DAG. We use provable API to write smart contracts to fetch data

* https://docs.provable.xyz/
* https://docs.ipfs.io/reference/api/http/

# Data Pipeine

 We will be processing data streams from sensors, actuators, maps, cameras, satellites etc. The standardised and normalised data streams will be processed using state machines and graphs. Currently our Data Engineering team is building streaming data processing pipelines on Apache Flink. In this pipeline you can find data fusion algorithms. We will do advanced state computations on Apache Flink and generate Fusion Graphs. 
 
# Offchain Computations
Fusion Graphs will be transfomed into verifiable graphs through IPFS. These graphs will be verified using authenticated graph feature in IPFS. Zero Knowledge Proofs and Pendersen Commitments are generates from Authenticated Graphs.IPFS stores Authenticated Graphs as Directed Acyclic Graphs of Merkle Trees. Proofs and commitments will be linked to DAGs and Merkle Trees Homomorphically. These Proofs and Commitments will be verified by Verifiable Random Functions. Zero Knowledge proofs and Pendersen commitments will be referred by Layer 2 Random Oracles based Asynchronous Consensus Algorithms. 

# Onchain Computations
The proofs and commitments will be verified by Data Verifiers through various Stake and Slash Proofs and Shared to Data Consumers who are authenticated and authorised through Multi Signature Wallets. 

# Implementation Roadmap

## Data Monetisation Layer
* Schema Verification Tokens
* Schema Generation Tokens
* Schema Generation Rewards

## Data Security Layer
* Schema Security Oracles
* Proofs based on Interactions
* Commitments prior to Proofs

## Cryptographic Layer

* Zero Knowledge Proofs on a Turing Machine
* Zero Knowledge Proofs on a Directed Acyclic Graph
* Shortest Path Problem of a Directed Acyclic Graph
* Longest Path Problem of a Directed Acyclic Graph
* Graph Embedding in a Pendersen Commitment
* Graph Embedding in a Zero Knowledge Proof

## Data Governance Layer
* Tokens based on Workflows
* Authenticated Commitments
* State Transition Proofs

# Data Consumption Layer
* Multi Signature Wallets
* Winternitz One Time Signatures
* Merkle Tree Signatures
* Lamport Signatures

# Contributions 

We are planning the next iteration in Algorand and Aeternity. We will also upgrade the cryptographic primitives using ZK STARKS, Homomorphic Commitments, Interactive Oracle Proofs and Verifiable Random Functions. The fusion ledger is completely open source and currently in the prototyping phase. If anyone of you would like to contribute to the design and development of fusion ledger, please contact us at the email address - epicknowledgesociety@gmail.com
