import { Outlet } from 'react-router-dom'
import './main.css'




export const Main =() => {

   

   return(
          <main className='main main__container'>
            <div className='main__content-background'></div>
            <div className='outlet'>
               <Outlet/>
            </div>
            
         </main>
   )
}