import Hati from "./images/1.png"

export const About = () => {
    return (
        <>

            <div className="">
                <div className="text-center lg:text-left">
                    <div className="text-xs text-red-400 font-bold uppercase tracking-wide px-12">
                        about
                    </div>
                    <div className="text-3xl text-gray-700 font-bold px-12">
                        Apa Itu Hepatitis?
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3  ">
                        <div>
                            <div className=" text-center lg:text-left mt-5 text-gray-700 lg:ml-12 px-5 md:px-12 lg:px-0">
                                Hepatitis adalah peradangan pada hati atau liver. Kondisi ini
                                bisa disebabkan oleh berbagai hal, mulai dari infeksi virus, kebiasaan
                                mengonsumsi alkohol, penggunaan obat-obatan tertentu, penyakit autoimun,
                                dan infeksi cacing hati. Jika disebabkan oleh infeksi virus, hepatitis bisa
                                menular ke orang lain
                            </div>
                            <div className="flex mt-7 w-full text-center lg:mb-7 lg:w-48 justify-center lg:py-2  lg:ml-12 px-12  lg:bg-red-200 rounded-lg">
                                <span className="text-red-600 font-semibold text-md mr-2">Lebih Banyak</span>
                                <div className="ml-1 text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 ">
                            <div className="p-5 md:px-12 lg:p-0">
                                 <div className="mt-5  py-10 h-full bg-blue-500 rounded-full md:rounded-xl md:-mt-10 lg:rounded-l-full lg:w-3/4 lg:float-right">
                                <div className="flex justify-center  ">
                                    <img src={Hati} alt="Hati" className="w-3/6 mx-auto my-auto animate-pulse-slow " />
                                    <div className=" ">
                                    </div>
                                </div>
                            </div>
                            </div>
                           

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default About