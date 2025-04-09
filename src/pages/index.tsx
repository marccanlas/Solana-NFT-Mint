import NFTMintPage from "@/components/NFTMintPage";
import { WalletButton } from "@/context";
export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center min-h-screen p-8">
      <WalletButton />
      <NFTMintPage />
    </main>
  );
}
