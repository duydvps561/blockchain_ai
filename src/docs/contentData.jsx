const contentData = {
  IntroductionToLayerEdge: [
    { type: "p", text: "Introduction To LayerEdge" },
    { type: "h2", text: "What Is LayerEdge?" },
    {
      type: "p",
      text: "LayerEdge is the first decentralized network that enhances the capabilities of Bitcoin Blockspace with ZK & BitVM, enabling every layer to be secured on Bitcoin.",
    },
    {
      type: "info",
      text: "Often efficient settlement on Bitcoin is linked with dependency on OP_Cat being enabled on Bitcoin L1.",
      link: {
        text: "how LayerEdge works with or without OP_Cat.",
        url: "#",
      },
    },
    {
      type: "h2",
      text: "How much efficient we can make L1 settlement & proof verification with LayerEdge?",
    },
    {
      type: "p",
      text: "LayerEdge achieves up to 95% reduction in L1 settlement costs through shared transactions, and up to 99% reduction in proof verification costs through aggregation. As more protocols join the network, costs decrease further - enabling what was previously economically unfeasible. A single proof verification cost can drop from an estimated of $900+ to less than $20 per protocol on Bitcoin, in a network of 50+ protocols.",
    },
    {
      type: "h2",
      text: "Why LayerEdge?",
    },
    {
      type: "p",
      text: "Imagine Bitcoin not just as a store of value, but as a decentralized supercomputer capable of verifying vast computations without ever executing them directly. LayerEdge enables this by allowing verifiable, off-chain execution powered by Bitcoin’s Proof-of-Work (PoW) security. Rather than forcing Bitcoin to perform every transaction, LayerEdge makes it possible to aggregate and verify proofs at a fraction of cost.",
    },
    {
      type: "p",
      text: "The benefits don’t stop with financial transactions. The applications of ZK proofs extend far beyond finance. From artificial intelligence (AI) to the Internet of Things (IoT) like DePIN, verifiable computation is essential for ensuring trust in decentralized systems. With LayerEdge, Bitcoin’s computational security can now support these emerging technologies, transforming it from a passive financial asset to a backbone of verifiable trust for the decentralized internet.",
    },
    {
      type: "h2",
      text: "Why are we building this solution?",
    },
    {
      type: "p",
      text: "The Bitcoin ecosystem faces a critical challenge: while Bitcoin provides unmatched security, leveraging this security through ZK proofs is either technically impossible (due to Bitcoin's limited scripting capabilities) or economically unfeasible (huge costs per state transition even through optimistic verification approaches like BitVM).",
    },
    {
      type: "p",
      text: "This creates a significant barrier for L2s and protocols wanting to build on Bitcoin or inherit Bitcoin's security. The high costs of proof verification force protocols to either compromise on security or face unsustainable operational expenses.",
    },
    {
      type: "p",
      text: "LayerEdge solves this by enabling protocols to share verification costs through proof aggregation. Instead of each protocol bearing the full verification burden, costs are distributed across the network. This approach can reduce individual protocol costs by up to 99%, making Bitcoin-secured scaling solutions economically viable for the first time.",
    },
    {
      type: "p",
      text: "Our vision is to make Bitcoin's security accessible and cost-effective for all protocols, enabling a new wave of innovation in the Bitcoin ecosystem",
    },
    {
      type: "h2",
      text: "Background",
    },
    {
      type: "p",
      text: "Trust is becoming the most valuable commodity. Blockchains, often introduced as the solution to trustless systems, are indeed powerful engines of trust. Yet, their current architecture is still riddled with inefficiencies. Each node in the network must redundantly re-execute every transaction, a process that severely hampers scalability. Think of it as a global assembly line where every worker is forced to repeat the same task, regardless of whether it's already been completed elsewhere. This results in slower networks, higher costs, and limited throughput. Unlike centralized systems where adding more hardware equates to faster results, blockchain architecture only strengthens its reliability, not its speed. ",
    },
    {
      type: "p",
      text: " Many Layer 1 blockchains have attempted to solve this problem by cutting corners—either by increasing the hardware requirements or compromising decentralization to improve performance. But these solutions come at a cost: the very security that blockchains promise to deliver is weakened. In other words, they reduce costs and increase speed at a great expense of lower security guarantees.",
    },
    {
      type: "p",
      text: "Zero-Knowledge/Validity proofs (ZK) changed how we approach scalability without making security trade-offs. ZK proofs allow a single concise proof to represent the validity of a much larger computation. Instead of every node reprocessing every single step, they simply verify the proof. It’s like checking the result of a complex equation without needing to redo all the math. This drastically reduces on-chain execution demands, enabling networks to process much larger volumes of data at lower costs. The emergence of simple execution layers that take computation off-chain has resulted in modular ecosystems, allowing computations to be handled offchain and settled onchain. Ethereum pioneered this model with its multiple L2s, which scale efficiently but come with fragmented liquidity and a complex user experience. ",
    },
    {
      type: "p",
      text: "While Ethereum has embraced this with rollups that bundle transactions off-chain and settle them on-chain, Bitcoin—the most secure blockchain—has yet to fully leverage this potential. However, the delegation of execution offchain with Bitcoin's security promises increased throughput and lower operational costs, with the potential to settle back onchain. A few Bitcoin L2s are already capable of this, though the prohibitive costs have limited wider adoption. ",
    },
    {
      type: "p",
      text: "That said, verifying those proofs directly onchain can be incredibly resource-intensive, especially on a network like Bitcoin where block space is limited and in high demand. As a result, verification costs on Bitcoin can easily escalate into tens of thousands of dollars, particularly during periods of congestion. ",
    },
  ],
  NetWorkInfor: [
    { type: "h1", text: "VTry LayerEdge (Devnet)" },
    {
      type: "p",
      text: "In this guide, we'll explore sending a ZK Proof to LayerEdge Network with instant pre-confirmation & settlement on a Bitcoin Testnet in the next block, in less than 5 minutes:",
    },
    { type: "p", text: "Purpose" },
    { type: "p", text: "Send data (e.g., ZK proofs) over a ZeroMQ socket." },
    {
      type: "p",
      text: "Test the proof aggregation layer by sending sample or actual proof data.",
    },
    {
      type: "p",
      text: "Provide a simple and customizable framework for sending data using Go and ZeroM",
    },
    {
      type: "p",
      text: "Validators validate consecutive blocks (#n, #n+1, etc.)",
    },
    {
      type: "p",
      text: "Each block contains aggregated proofs from multiple sources",
    },
    { type: "h3", text: "Validators receive rewards for:" },
    { type: "p", text: "• Block validation" },
    { type: "p", text: "• Proof verification" },
    { type: "p", text: "• Participation in consensus" },

    { type: "h2", text: "Proof Aggregation Layer" },
    {
      type: "p",
      text: "The proof aggregation process occurs in three distinct phases:",
    },
    { type: "h3", text: "Phase 1: Pre-aggregation Storage" },
    {
      type: "p",
      text: "• Individual proofs are received from various sources",
    },
    {
      type: "p",
      text: "• Proofs are securely stored in a pre-aggregation layer",
    },
    { type: "p", text: "• Initial validation checks are performed" },
    { type: "h3", text: "Phase 2: Leaf-level Verification" },
    {
      type: "p",
      text: "• Validators perform detailed verification of individual proofs",
    },
    {
      type: "p",
      text: "• Each proof is checked for validity before aggregation",
    },
    { type: "p", text: "• Failed proofs are rejected at this stage" },
    { type: "h3", text: "Phase 3: Proof Aggregation" },
    { type: "p", text: "• Valid proofs enter the aggregation sequencer" },
    { type: "p", text: "• Multiple proofs are combined efficiently" },
    { type: "p", text: "• Final aggregated proof is produced" },
    { type: "p", text: "• Aggregated proof is settled on Layer 1 (Bitcoin)" },

    { type: "h2", text: "Validator Rewards" },
    { type: "p", text: "Validators receive rewards from multiple sources:" },
    { type: "p", text: "• Block production rewards" },
    { type: "p", text: "• Proof verification rewards" },
    { type: "p", text: "• Aggregation participation rewards" },

    { type: "h2", text: "Security Model" },
    { type: "h3", text: "Staking" },
    { type: "p", text: "• Validators must stake EDGE tokens" },
    { type: "p", text: "• Stake serves as security deposit" },
    { type: "p", text: "• Slashing conditions for malicious behavior" },
    { type: "h3", text: "Verification" },
    { type: "p", text: "• Multi-level verification process" },
    { type: "p", text: "• Leaf-level proof checking" },
    { type: "p", text: "• Aggregate proof validation" },
    { type: "p", text: "• Cross-validation among validators" },

    { type: "h2", text: "Settlement Process" },
    { type: "p", text: "• Final aggregated proof is generated" },
    { type: "p", text: "• Proof is verified by validator network" },
    { type: "p", text: "• Settlement transaction is prepared" },
    { type: "p", text: "• Proof is posted to Layer 1 (Bitcoin)" },

    { type: "h2", text: "Network Benefits" },
    { type: "h3", text: "Cost Efficiency" },
    { type: "p", text: "• Shared verification costs" },
    { type: "p", text: "• Reduced settlement expenses" },
    { type: "p", text: "• Efficient resource utilization" },
    { type: "h3", text: "Security" },
    { type: "p", text: "• Multi-layer validation" },
    { type: "p", text: "• Economic incentives for honest behavior" },
    { type: "p", text: "• Robust slashing conditions" },
    { type: "h3", text: "Scalability" },
    { type: "p", text: "• Parallel proof processing" },
    { type: "p", text: "• Efficient aggregation" },
    { type: "p", text: "• Optimized settlement" },
  ],
};

export default contentData;
