import { CreateNftFormValues } from "@/types";
import { mintNft, uploadNftFile } from "@/utils/solution";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useWallet } from "@solana/wallet-adapter-react";
import { showToast } from "@/utils/toastUtils";
import NewNftForm from "@/modules/MintNft/NewNftForm";
import AttributeForm from "@/modules/MintNft/AttributeForm";
import Modal from 'react-modal';
import { customStyles } from "@/utils/constant";
import LoadingSpin from "@/modules/LoadingSpin";

const NFTMintPage = () => {
    const wallet = useWallet();
    const { register, handleSubmit } = useForm<any>({});
    const [logo, setLogo] = useState<any>();
    const [fileStream, setFileStream] = useState<any>();
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [nftAddress, setNftAddress] = useState<string>('');

    const handleMintNft: SubmitHandler<CreateNftFormValues> = async (
        data
    ) => {
        setIsLoading(true);

        const uploadResult = await uploadNftFile(fileStream, data);
        console.log("uploadResult", uploadResult);
        if (uploadResult.succeed) {
            const mintResult = await mintNft(uploadResult.uri, wallet, data)
            console.log("mintResult", mintResult);
            if (mintResult.succeed) {
                setNftAddress(mintResult.uri);
                showToast('success', mintResult.message);
            } else {
                showToast('error', mintResult.message);
            }
        } else {
            showToast('error', uploadResult.message);
        }
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(handleMintNft)} className="space-y-8">
            <div className="dark:bg-[#2C5125] bg-[#48FF2F38] dark:bg-opacity-70 bg-opacity-70 border border-tool lg:px-8 md:px-6 p-4 lg:py-8 py-4 shadow rounded-lg">
                <h3 className="font-medium text-2xl leading-6 main-hover-dark">
                    IMAGE
                </h3>

                <div className="md:grid md:grid-cols-3 md:gap-6 pt-6">
                    <div className="mt-5 flex items-center justify-center space-y-4 md:col-span-1 md:mt-0">
                        <label htmlFor="selectFiles" className="w-full flex items-center justify-center dark:text-white text-gray-700 bg-dark-grey py-1 text-xl rounded-xl">
                            {
                                logo ?
                                    <img src={logo} className={`w-40 h-36 rounded-xl mr-4`} alt={"Token Logo"} />
                                    :
                                    <div className="w-40 h-36 p-2 text-center justify-center flex items-center text-[10px] border-2 border-dotted border-tool rounded-md text-[#1E1E1E]">Upload your image</div>
                            }

                            <input id="selectFiles" type="file" className="hidden"
                                onChange={
                                    async (e) => {
                                        const files = e.target.files;
                                        const reader = new FileReader();
                                        reader.onload = (e) => {
                                            setLogo(e.target?.result);
                                        }
                                        if (files) {
                                            reader.readAsDataURL(files[0]);
                                            const data = new FormData();
                                            data.append('file', files[0]);
                                            setFileStream(data);
                                        }
                                        e.target.value = ''
                                    }}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className="dark:bg-[#2C5125] bg-[#48FF2F38] dark:bg-opacity-70 bg-opacity-70 border border-tool lg:px-8 md:px-6 p-4 lg:py-8 py-4 shadow rounded-lg">
                <div>
                    <NewNftForm register={register} />
                </div>
            </div>

            <div className="dark:bg-[#2C5125] bg-[#48FF2F38] dark:bg-opacity-70 bg-opacity-70 border border-tool lg:px-8 md:px-6 p-4 lg:py-8 py-4 shadow rounded-lg">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 dark:text-slate-200 text-gray-700">
                            Attributes
                        </h3>
                        <p className="mt-1 text-sm dark:text-slate-300 text-gray-700">
                            Input attributes that this nft will take
                        </p>
                    </div>

                    <div className="mt-5 space-y-4 md:col-span-2 md:mt-0">
                        <AttributeForm register={register} />
                    </div>
                </div>
                {
                    nftAddress &&
                    <div className="mt-5 space-y-4 md:col-span-2 md:mt-0">
                        <h3 className="text-lg font-medium leading-6 dark:text-slate-200 text-gray-700">Successfully minted NFT</h3>
                        <p className="mt-1 text-sm dark:text-slate-300 text-gray-700">
                            <a href={`https://solscan.io/token/${nftAddress}?cluster=devnet`} target="_blank">
                                {nftAddress}
                            </a>
                        </p>
                    </div>
                }
            </div>

            <div className="flex justify-center w-full">
                <button className="main-green-btn dark:text-black text-white w-[200px]">
                    CREATE
                </button>
            </div>

            {
                isloading &&
                <Modal
                    closeTimeoutMS={200}
                    isOpen={true}
                    preventScroll={true}
                    style={customStyles}
                    overlayClassName={"z-[999] fixed top-0 left-0 right-0 bottom-0 bg-[#141414bf]"}
                    ariaHideApp={false}
                    shouldCloseOnOverlayClick={true}
                >
                    <div className="flex justify-center w-full items-center h-[620px]">
                        <LoadingSpin description="Processing..." logo={logo} />
                    </div>
                </Modal>
            }

        </form>
    )
};

export default NFTMintPage;
