import { Outlet } from 'react-router-dom'
import './main.css'
import { useAppSelector } from '../../../store/store'




export const Main =() => {
   const modeTheme = useAppSelector(state=> state.theme.mode)
   

   return(
          <main className='main main__container '>
            <div className={`main__content-background ${modeTheme}`}></div>
            <div className='outlet'>
               <Outlet/>
            </div>
            
         </main>
   )
}