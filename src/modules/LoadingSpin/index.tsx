import Image from 'next/image';

interface LoadingSpinProps {
    description: string;
    logo: string;
}

const LoadingSpin: React.FC<LoadingSpinProps> = ({ description, logo }) => {
    return (
        <div className="text-center">
            <div className='relative flex justify-center'>
                <div className="absolute flex justify-center items-center w-[76px] h-[76px]">
                    <div className='w-[60px]'>
                        <Image src={logo} alt="logo" width={300} height={300} className='rounded-full' />
                    </div>
                </div>
                <div className="loading-spinner">
                </div>
            </div>
            <p className="mt-[7px] text-[20px] text-[#F0F0F0] text-center">
                {description}
            </p>
        </div>
    )
}

export default LoadingSpin;
