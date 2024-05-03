import Image from "next/image";
import Link from "next/link";
import { rxpressThumb } from "../../assets";

export default function Projects() {
    return (
        <main className="flex items-center justify-center my-20">
            <div className="flex flex-col gap-20">
                <div className="flex gap-20">

                    <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                        <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                        <div className="">
                            <h1 className="text-[28px] font-worksanssemibold text-secondary">RxPress</h1>
                            <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                        </div>
                    </div>

                    <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                        <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                        <div className="">
                            <h1 className="text-[28px] font-worksanssemibold text-secondary">RxPress</h1>
                            <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                        </div>
                    </div>

                </div>
                
                <div className="flex gap-20">

                    <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                        <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                        <div className="">
                            <h1 className="text-[28px] font-worksanssemibold text-secondary">RxPress</h1>
                            <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                        </div>
                    </div>

                    <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                        <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                        <div className="">
                            <h1 className="text-[28px] font-worksanssemibold text-secondary">RxPress</h1>
                            <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    )
}