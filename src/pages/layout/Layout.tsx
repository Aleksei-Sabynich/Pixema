import {  useState } from 'react';
import './Layout.css'
import { Header } from './header/Header'
import { useAppSelector } from '../../store/store';
import { SideBar } from './sideBar/SideBar';
import { Main } from './main/Main';


export const Layout = () => {

   const currentRout = location.pathname === '/' ? 'home' : location.pathname.slice(1) as 'trends' | 'favorites' ;
   const searchValue = useAppSelector((state) => state.search[currentRout]);
   const [localSearch, setLocalSearch] = useState(searchValue || '')

   
   return (
      <>
         <Header  localSearch={localSearch} setLocalSearch={setLocalSearch} />
         <SideBar cleanInputSearch={setLocalSearch}/>
         <Main  />
         <footer className="footer footer__container">
            <p className='footer__cop'>© 2025 PIXEMA</p>
         </footer>   
         
      </>
   )
}