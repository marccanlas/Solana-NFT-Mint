import { CreateNftFormValues, Result } from "@/types";
import { WalletContextState } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";

export const uploadNftFile = async (fileStream: any, data: CreateNftFormValues) => {
    const result: Result = {
        succeed: false,
        message: "initial message",
        uri: ""
    }

    if (!process.env.NEXT_PUBLIC_PINATA_API_KEY || !process.env.NEXT_PUBLIC_PINATA_API_SEC_KEY) {
        result.succeed = false;
        result.message = "No pinata api key load from environment";
        return result;
    }

    try {
        const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
        const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
        const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_API_SEC_KEY;
        const options = {
            method: 'POST',
            headers: {
                'pinata_api_key': pinataApiKey,
                'pinata_secret_api_key': pinataSecretApiKey,
            },
            body: fileStream,
        };
        let response = await fetch(url, options);
        let res = await response.json();
        const imageUrl = "https://gateway.pinata.cloud/ipfs/" + res.IpfsHash;
        const attr = [];
        data.attribute.key1 && attr.push({
            trait_type: data.attribute.key1,
            value: data.attribute.value1
        })
        data.attribute.key1 && attr.push({
            trait_type: data.attribute.key2,
            value: data.attribute.value2
        })
        data.attribute.key1 && attr.push({
            trait_type: data.attribute.key3,
            value: data.attribute.value3
        })
        data.attribute.key1 && attr.push({
            trait_type: data.attribute.key4,
            value: data.attribute.value4
        })
        data.attribute.key1 && attr.push({
            trait_type: data.attribute.key5,
            value: data.attribute.value5
        })
        data.attribute.key1 && attr.push({
            trait_type: data.attribute.key6,
            value: data.attribute.value6
        })
        const jsonObject = {
            name: data.newNft.name,
            symbol: data.newNft.symbol,
            image: imageUrl,
            description: data.newNft.description,
            attributes: attr
        }
        const jsonString = JSON.stringify(jsonObject);
        const blob = new Blob([jsonString], { type: "application/json" });
        const formData = new FormData();
        formData.append("file", blob, "filename.json");
        response = await fetch(url, {
            method: "POST",
            headers: {
                'pinata_api_key': pinataApiKey,
                'pinata_secret_api_key': pinataSecretApiKey,
            },
            body: formData,
        });
        res = await response.json();
        result.succeed = true;
        result.uri = "https://gateway.pinata.cloud/ipfs/" + res.IpfsHash;
        return result;
    } catch (e) {
        result.message = 'Upload failed'
        return result;
    }
}

export const mintNft = async (
    uri: string,
    wallet: WalletContextState,
    data: CreateNftFormValues,
) => {
    const result: Result = {
        succeed: false,
        message: "Can not perform this action",
        uri: ""
    }

    if (!wallet.publicKey) {
        result.message = "Wallet not connected"
        return result;
    }

    try {
        const connection = new Connection(clusterApiUrl("devnet"));
        const metaplex = new Metaplex(connection);
        metaplex.use(walletAdapterIdentity(wallet))
        const { nft } = await metaplex.nfts().create(
            {
                uri: uri,
                name: data.newNft.name,
                sellerFeeBasisPoints: 500,
                symbol: data.newNft.symbol,
                creators: [
                    {
                        address: wallet.publicKey,
                        share: 100,
                    },
                ],
                isMutable: false,
            },
            { commitment: "finalized" }
        );
        console.log(`NFT minted! Address: ${nft.address}`);

        result.succeed = true;
        result.message = "NFT minted successfully"
        result.uri = nft.address.toString();

        return result;
    } catch (error) {
        console.error("Error minting NFT:", error);
        result.message = "Error while minting NFT";
        return result;
    }
}
