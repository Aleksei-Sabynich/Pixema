import {  useState } from 'react';
import './Layout.css'
import { Header } from './header/Header'
import { Main } from './main/main'
import { useAppSelector } from '../../store/store';


export const Layout = () => {

   const currentRout = location.pathname === '/' ? 'home' : location.pathname.slice(1) as 'trends' | 'favorites' ;
   const searchValue = useAppSelector((state) => state.search[currentRout]);
   const [localSearch, setLocalSearch] = useState(searchValue || '')

   
   return (
      <>
         <Header  localSearch={localSearch} setLocalSearch={setLocalSearch} />
         <Main cleanInputSearch={setLocalSearch} />
         <footer className="footer footer__container">
            <p className='footer__cop'>© 2025 PIXEMA</p>
         </footer>   
         
      </>
   )
}