import Hati from './images/hati.png'
export const About = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl   lg:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest p-2">about</div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
                Apa itu Hepatitis?
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
             <span className="text-red-400">Hepatitis</span>  merupakan penyakit yang ditandai dengan peradangan pada organ hati. 
              Kondisi ini bisa terjadi karena infeksi virus, kebiasaan minum alkohol, paparan zat 
              beracun atau obat-obatan tertentu. 
              </p>
              <p className="text-base text-gray-700 md:text-lg mt-4">
              Berdasarkan sifatnya hepatitis dibedakan menjadi dua yaitu 
              hepatitis <span className="text-red-400">akut</span> dan <span className="text-red-400">kronis</span>, keduanya sama-sama dapat menggangu 
              berbagai fungsi metabolisme.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center bg-red-400 rounded-full py-2 px-6 hover:bg-gray-200  font-semibold transition-colors duration-200 text-white hover:text-red-600"
              >
                Lebih lanjut 
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-full  -mx-4 lg:pl-8 lg:bg-blue-300">
            <div className="flex-col items-center px-2">
             <img src={Hati} alt="" className=' mx-auto w-8/12 md:w-9/12 lg:w-1/2'/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default About