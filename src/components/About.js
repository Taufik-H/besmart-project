import Hati from "./images/1.png"

export const About = () => {
    return (
        <>
        
        <div className="">
            <div className="">
                <div className="text-xs text-red-400 font-bold uppercase tracking-wide px-12">
                    about
                </div>
                <div className="text-3xl text-gray-700 font-bold px-12">
                    Apa Itu Hepatitis?
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3  ">
                    <div>                
                        <div className="mt-5 text-gray-700 ml-12">
                        Hepatitis adalah peradangan pada hati atau liver. Kondisi ini 
                        bisa disebabkan oleh berbagai hal, mulai dari infeksi virus, kebiasaan 
                        mengonsumsi alkohol, penggunaan obat-obatan tertentu, penyakit autoimun,
                        dan infeksi cacing hati. Jika disebabkan oleh infeksi virus, hepatitis bisa
                        menular ke orang lain
                        </div> 
                        <div className="flex mt-7  mb-7 w-48 justify-center py-2 ml-12 bg-red-200 rounded-lg">
                            <span className="text-red-600 font-semibold text-md mr-2">Lebih Banyak</span>
                            <div className="ml-1 text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            </div>
                        </div>
                    </div>
                  <div className="col-span-2 ">
                        <div className="absolte float-right w-8/12  -mt-32 ">
                            <div className="relative w-8/12">
                            <svg width="600" height="532" viewBox="0 0 854 532" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 252C0 112.824 112.824 0 252 0H1201V532H252C112.824 532 0 419.176 0 280V252Z" fill="#84BBFC"/>
                            </svg>
                            </div>
                        </div>
                        <div className="absolute ">
                        <div className="relative w-4/12 -right-96 ">
                        <img src={Hati} alt="Hati" className="ml-20 animate-bounce-slow mt-10"/>
                        <div className="relative -right-24 -top-14 ">
                        <svg width="218" height="118" viewBox="0 0 318 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_6_19)">
                        <ellipse cx="159" cy="59" rx="120" ry="20" fill="#9D4242" fill-opacity="0.44"/>
                        </g>
                        <defs>
                        <filter id="filter0_f_6_19" x="0" y="0" width="318" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="19.5" result="effect1_foregroundBlur_6_19"/>
                        </filter>
                        </defs>
                        </svg>
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