// import { useWallet } from "@solana/wallet-adapter-react";
import { UseFormRegister } from "react-hook-form";
import { CreateNftFormValues } from "@/types";

type NewTokenFormProps = {
  register: UseFormRegister<CreateNftFormValues>;
};

export default function TokenForm({
  register,
}: NewTokenFormProps) {

  return (
    <div>
      <h2 className="tool-box-title">
        NFT INFORMATION
      </h2>
      <p className='tool-box-description'>Input the basic information about NFT.</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-full pt-6 uppercase font-Prompt">
        <div className="col-span-1 mt-6">
          <label className="tool-input-label">NFT Name</label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="NAME OF YOUR NFT"
              className="tool-input"
              {...register("newNft.name", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="col-span-1 mt-6">
          <label className="tool-input-label">NFT Symbol</label>
          <div className="mt-1">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="SYMBOL OF YOUR NFT"
                className="tool-input"
                {...register("newNft.symbol", {
                  required: true
                })}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-6">
          <label className="tool-input-label">NFT DESCRIPTION</label>
          <div className="mt-1">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Describe your nft"
                className="tool-input"
                {...register("newNft.description", {
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
