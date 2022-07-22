import Heroimage from "./images/herobg.png"
import Blob from "./images/blob.png"
import Bgicon from "./images/bg.png"
export const Hero = () => {
    return (
        <>
        <div className="hidden lg:block lg:absolute lg:top-0 opacity-80 -z-10">
            <div className="relative ">
           <img src={Blob} alt="blob" className="bg-cover bg-center -mt-24" />

            </div>
            
        </div>
        
        <div className="block lg:hidden flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
            <div className="relative">
             <img src={Heroimage}alt="herobg" className=""/>
            </div>
        </div>
            <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-16">
              <div>
                <p className="inline-block p-1 border border-red-400 mb-4 text-xs lg:text-sm font-semibold tracking-wider text-red-500 uppercase rounded-full bg-red-100">
                KONSULTASI KESEHATAN
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
                 Kenali gejala <span className="text-red-400 font-bold mr-2"> Hepatitis</span>
                <br className="hidden md:block" />
                    {''}
                <span className="inline-block text-deep-purple-accent-400 mt-6">
                 sejak dini!
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
       
               Mengenal lebih dalam tentang penyebab, risiko, gejala, pengobatan,
                pencegahan, dan berita terbaru tentang penyakit hepatitis.
              </p>
            </div>
            <div className="flex items-center -mt-8">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-2">Mulai Sekarang</span>  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </a>

            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
            <div className="relative -top-20">
             <img src={Heroimage}alt="herobg" className=""/>
            </div>
        </div>
      </div>
        </>
  
    );
  };
export default Hero