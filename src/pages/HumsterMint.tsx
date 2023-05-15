import humsterImg from "./../assets/img/humsterNFT.jpg";
import { COLLECTION_ID, PACKAGE_ID } from "../assets/data/config";
import { toast } from "react-toastify";
import { TransactionBlock } from "@mysten/sui.js";
import { useWallet } from "@suiet/wallet-kit";

export default function HumsterMint() {
  const wallet = useWallet();

    async function handleMint() {
    if (!wallet.connected) return;
    // define a programmable transaction
    const tx = new TransactionBlock();
    const packageObjectId = PACKAGE_ID;
    tx.moveCall({
      target: `${packageObjectId}::mint::mint`,
      arguments: [tx.pure(COLLECTION_ID)],
    });

    try {
      // execute the programmable transaction
      const resData = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: tx,
      });
      toast.success("Congrats! Your nft minted successfully!");
      console.log("nft minted successfully!", resData);
    } catch (e) {
      toast.error("nft mint failed!");
      console.error("nft mint failed", e);
    }
  }

  return (
    <main>
      <section className="humster-mint">
        <div className="container">
          <div className="right-wrapper">
            <div className="title-wrapper">
              <h1>Hamsters Sui</h1>
              <h2 className="secondary-mint-title">NFT collection</h2>
            </div>
            <div className="mint-content-wrapper">
              <p>
                Introducing the new NFT collection on the Sui platform, created
                by a team of hamster enthusiasts. Our hamster-themed collection
                is designed to bring a fresh perspective to the NFT space,
                offering something unique and exciting.
              </p>
            </div>

            <div className="poem-wrapper">
              <p>
                "A little ball of fur and love, <br></br> A hamster fits in like a
                glove. <br></br> With tiny paws and curious eyes, <br></br> He scurries on, so quick
                and wise"
              </p>
            </div>
          </div>
          <div className="left-wrapper">
            <img src={humsterImg} className="humster-nft-img"/>
            <div className="buttons-wrapper">
              <div className="price-wrapper">
                <p>Price: 2 Sui</p>
                <button className="custom-button gradient-button" onClick={handleMint}>MINT</button>
              </div>
              <div className="rule-wrapper">
                <p>Rule: 1 NFT per wallet</p>
                <span>0/4444</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
