// import { useWallet } from "@solana/wallet-adapter-react";
import { UseFormRegister } from "react-hook-form";
import { CreateNftFormValues } from "@/types";

type SocailFormProps = {
  register: UseFormRegister<CreateNftFormValues>;
};

export default function TokenForm({
  register,
}: SocailFormProps) {

  // const wallet = useWallet();
  return (
    <div className="divide-y divide-slate-700">
      <div className="pb-4 space-y-2">
        <div className="grid grid-cols-2 md:gap-6 gap-2">
          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">attribute</label>
            <div className="mt-1">
              <input
                type="text"
                className="tool-input"
                {...register("attribute.key1", {
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">value</label>
            <div className="mt-1">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="tool-input"
                  {...register("attribute.value1", {
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:gap-6 gap-2">

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">attribute</label>
            <div className="mt-1">
              <input
                type="text"
                className="tool-input"
                {...register("attribute.key2", {
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">value</label>
            <div className="mt-1">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="tool-input"
                  {...register("attribute.value2", {
                  })}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:gap-6 gap-2">
          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">attribute</label>
            <div className="mt-1">
              <input
                type="text"
                className="tool-input"
                {...register("attribute.key3", {
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">value</label>
            <div className="mt-1">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="tool-input"
                  {...register("attribute.value3", {
                  })}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:gap-6 gap-2">
          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">attribute</label>
            <div className="mt-1">
              <input
                type="text"
                className="tool-input"
                {...register("attribute.key4", {
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">value</label>
            <div className="mt-1">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="tool-input"
                  {...register("attribute.value4", {
                  })}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:gap-6 gap-2">
          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">attribute</label>
            <div className="mt-1">
              <input
                type="text"
                className="tool-input"
                {...register("attribute.key5", {
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">value</label>
            <div className="mt-1">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="tool-input"
                  {...register("attribute.value5", {
                  })}
                />
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:gap-6 gap-2">
          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">attribute</label>
            <div className="mt-1">
              <input
                type="text"
                className="tool-input"
                {...register("attribute.key6", {
                })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs dark:text-slate-300 text-gray-700">value</label>
            <div className="mt-1">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="tool-input"
                  {...register("attribute.value6", {
                  })}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
