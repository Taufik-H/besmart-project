import imgri1 from './images/risiko1.png'
import imgri2 from './images/risiko2.png'
import imgri3 from './images/risiko3.png'
export const Crd = () => {
    return (
      <>
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-5">Faktor & Resiko</h1>
        <div className="w-full flex justify-center">

        <p className=" text-center w-9/12 lg:w-4/12">Beberapa faktor dibawah dapat menjadi risiko terjangkitnya peyakit hepatitis</p>
    </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={imgri1}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                01
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">Lingkungan Sekitar</p>
              </a>
              <p className="mb-4 text-gray-700">
              Air yang tidak layak untuk diminum atau untuk mencuci peralatan makan...

              </p>

            </div>
            <div className="flex gap-2 items-center">
          <button className='text-lg font-bold text-red-400 hover:text-red-600'>Lebih banyak</button>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33334 4.99992H5.00001C4.55798 4.99992 4.13406 5.17551 3.8215 5.48807C3.50894 5.80063 3.33334 6.22456 3.33334 6.66659V14.9999C3.33334 15.4419 3.50894 15.8659 3.8215 16.1784C4.13406 16.491 4.55798 16.6666 5.00001 16.6666H13.3333C13.7754 16.6666 14.1993 16.491 14.5119 16.1784C14.8244 15.8659 15 15.4419 15 14.9999M11.6667 3.33325H16.6667M16.6667 3.33325V8.33325M16.6667 3.33325L8.33334 11.6666" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
            <img
                src={imgri2}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
               02
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">Perilaku</p>
              </a>
              <p className="mb-4 text-gray-700">
              Berbagi jarum suntik atau benda lain. Melakukan hubungan seksual yang tidak aman seperti...
              </p>

            </div>
            <div className="flex gap-2 items-center">
          <button className='text-lg font-bold text-red-400 hover:text-red-600'>Lebih banyak</button>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33334 4.99992H5.00001C4.55798 4.99992 4.13406 5.17551 3.8215 5.48807C3.50894 5.80063 3.33334 6.22456 3.33334 6.66659V14.9999C3.33334 15.4419 3.50894 15.8659 3.8215 16.1784C4.13406 16.491 4.55798 16.6666 5.00001 16.6666H13.3333C13.7754 16.6666 14.1993 16.491 14.5119 16.1784C14.8244 15.8659 15 15.4419 15 14.9999M11.6667 3.33325H16.6667M16.6667 3.33325V8.33325M16.6667 3.33325L8.33334 11.6666" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
            <img
                src={imgri3}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
               03
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Kesehatan
                </p>
              </a>
              <p className="mb-4 text-gray-700">
              Belum mendapatkan vaksinasi hepatitis. Memiliki infeksi akut atau kronis dengan satu atau...
              </p>

            </div>
            <div className="flex gap-2 items-center">
          <button className='text-lg font-bold text-red-400 hover:text-red-600'>Lebih banyak</button>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33334 4.99992H5.00001C4.55798 4.99992 4.13406 5.17551 3.8215 5.48807C3.50894 5.80063 3.33334 6.22456 3.33334 6.66659V14.9999C3.33334 15.4419 3.50894 15.8659 3.8215 16.1784C4.13406 16.491 4.55798 16.6666 5.00001 16.6666H13.3333C13.7754 16.6666 14.1993 16.491 14.5119 16.1784C14.8244 15.8659 15 15.4419 15 14.9999M11.6667 3.33325H16.6667M16.6667 3.33325V8.33325M16.6667 3.33325L8.33334 11.6666" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </div>
        </div>
      </div>
      </>  
    );
  };

  export default Crd