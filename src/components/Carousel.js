import { useRef } from 'react';
import { Rerousel } from 'rerousel';
import r1 from './images/risiko1.png'
import r2 from './images/risiko2.png'
import r3 from './images/risiko3.png'
export const Carousel = ()=>{
    const ref = useRef(true)
    const int = false
    
    return(
        <> 
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-5">Gejala Hepatitis</h1>
        <div className="w-full flex justify-center">

        <p className=" text-center w-9/12 lg:w-4/12">Berikut beberapa gejala umum yang muncul pada penderita hepatitis simak baik - baik.</p>
    </div>

        <div className="container mx-auto px-48 mt-20">
            <div className="">
            <Rerousel itemRef={ref} stop={int} className="w-3/12">
                <img ref={ref} src={r1} alt="" />
                <img src={r2} alt="" />
                <img src={r3} alt="" />
            </Rerousel>
            </div>
        </div>
            

        
        </>
    )
}
export default Carousel