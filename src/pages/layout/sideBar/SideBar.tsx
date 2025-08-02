import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { setCurrentPage } from '../../../store/slices/paginationSlice';
import { setSearch } from '../../../store/slices/searchSlice';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { SortMenu } from '../../../components/sortMenu/SortMenu';


interface SideBarProps{
   cleanInputSearch:(value:string)=>void
}

export const SideBar = ({cleanInputSearch}:SideBarProps) => {

   const [sortButtonState, setSortButtonState] = useState<boolean>(false)
   const dispatch = useAppDispatch();

   const pageNumberReset = () => {
      dispatch(setCurrentPage(1))
      dispatch(setSearch({rout:'home', searchValue:''}))
      dispatch(setSearch({rout:'favorites', searchValue:''}))
      cleanInputSearch('')
   }

   return (
      <nav className='nav'>
               <ul className='list'>
                  <NavLink to ='/'className={({ isActive }) => isActive ? "list__item-wrapper active" : `list__item-wrapper`} onClick={pageNumberReset}> 
                     <div className='list__item-icon'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24.375 1.875H28.125V10.0106L24.375 5.72438V1.875ZM26.25 15L15 2.145L3.75 15H0L13.125 0H16.875L30 15H26.25ZM26.25 17.4225V30H18.75V20.625C18.75 19.5881 17.9119 18.75 16.875 18.75H13.125C12.09 18.75 11.25 19.5881 11.25 20.625V30H3.75V17.4206L15 4.98937L26.25 17.4225Z" fill="#4D4C4C" fill-opacity="0.933333"/>
                        </svg>
                     </div>
                     <p className='list__item-text'>Home</p>
                  </NavLink>
                  <NavLink to ='/trends' className={({ isActive }) => isActive ? "list__item-wrapper active" : `list__item-wrapper`} onClick={pageNumberReset}> 
                     <div className='list__item-icon'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.3179 9.84838C27.1193 9.64623 26.8484 9.48736 26.5344 9.38897C26.2205 9.29058 25.8754 9.2564 25.5367 9.29015C25.1996 9.32486 24.8818 9.42558 24.6176 9.5815C24.3533 9.73741 24.1525 9.94264 24.0367 10.1752C23.7343 10.6557 23.3636 11.1121 22.9305 11.5367C22.5874 9.0621 21.3391 6.69919 19.3149 4.69296C17.2906 2.68673 14.5642 1.11024 11.4184 0.126929C11.1408 0.0332203 10.8359 -0.00972394 10.5303 0.00184626C10.2246 0.0134165 9.92752 0.0791493 9.6649 0.193305C9.40228 0.307461 9.18214 0.466568 9.0237 0.656734C8.86527 0.846899 8.77334 1.06234 8.75597 1.28425C8.6259 4.81973 6.95159 8.23367 3.97487 11.0329C1.43091 13.3205 0.0297293 16.1666 0 19.1069C0 21.9957 1.5803 24.7663 4.39326 26.809C7.20621 28.8517 11.0214 29.9993 14.9995 29.9993C16.9756 30.0157 18.9362 29.7452 20.7662 29.2036C22.5963 28.662 24.2588 27.8603 25.6562 26.8456C27.0535 25.8308 28.1575 24.6235 28.9033 23.2946C29.6491 21.9657 30.0216 20.5419 29.999 19.1069C29.999 12.7485 27.5991 10.1343 27.3179 9.84838Z" fill="#4D4C4C"/>
                        </svg>
                     </div>
                     <p className='list__item-text'>Trends</p>
                  </NavLink>
                  <NavLink to ='/favorites' className={({ isActive }) => isActive ? "list__item-wrapper active" : `list__item-wrapper`} onClick={pageNumberReset}> 
                     <div className='list__item-icon'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.5433 0.991664C29.2385 0.621292 28.8281 0.35044 28.3129 0.178623C27.9847 0.0597957 27.6409 0.000277796 27.2814 0.000277796V0H2.71861C2.3593 0 2.01574 0.0595179 1.68755 0.178345C1.17201 0.350023 0.761722 0.621222 0.457083 0.991386C0.152525 1.36155 0 1.77116 0 2.2207V27.7793C0 28.229 0.152525 28.6384 0.457083 29.009C0.761722 29.3791 1.17201 29.6502 1.68755 29.8218C2.01542 29.9406 2.3593 30 2.71861 30C3.45324 30 4.10135 29.7818 4.664 29.3459L15.0001 20.9383L25.3362 29.3461C25.8831 29.7685 26.5316 29.98 27.2813 29.98C27.6721 29.98 28.0159 29.9275 28.3128 29.8217C28.828 29.6501 29.2384 29.379 29.5432 29.0084C29.8478 28.6384 30 28.2288 30 27.7792V2.22098C30.0001 1.77144 29.8476 1.36183 29.5433 0.991664Z" fill="#4D4C4C"/>
                        </svg>
                     </div>
                     <p className='list__item-text'>Favorites</p>
                  </NavLink>
                  <button  className='list__item-wrapper list__item-wrapperBtn' onClick={()=>setSortButtonState(!sortButtonState)}> 
                     <div className='list__item-icon'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2269 16.5829C26.2269 16.1306 26.38 15.6784 26.38 15.0753C26.38 14.4723 26.38 14.0201 26.2269 13.5678L29.4404 11.005C29.7465 10.7035 29.7465 10.402 29.5934 10.1005L26.533 4.82411C26.38 4.67336 26.074 4.5226 25.6149 4.67336L21.7893 6.18089C21.0242 5.57788 20.106 5.12562 19.1879 4.67336L18.5758 0.753767C18.7288 0.301507 18.2697 0 17.9637 0H11.8428C11.5367 0 11.0777 0.301507 11.0777 0.603014L10.4656 4.67336C9.54749 4.97486 8.78238 5.57788 7.86424 6.18089L4.1917 4.67336C3.73263 4.5226 3.42659 4.67336 3.12048 4.97486L0.0600315 10.2512C-0.0929911 10.402 0.0600315 10.8542 0.366077 11.1558L3.57955 13.5678C3.57955 14.0201 3.42653 14.4723 3.42653 15.0753C3.42653 15.6784 3.42653 16.1306 3.57955 16.5829L0.366077 19.1457C0.0600315 19.4473 0.0600315 19.7487 0.213054 20.0503L3.27351 25.3266C3.42653 25.4774 3.73251 25.6281 4.19164 25.4774L8.0172 23.9699C8.78232 24.5729 9.70045 25.0251 10.6186 25.4774L11.2307 29.397C11.2307 29.6985 11.5367 30 11.9958 30H18.1167C18.4228 30 18.8818 29.6984 18.8818 29.397L19.4939 25.4774C20.412 25.0251 21.3302 24.5729 22.0953 23.9699L25.9208 25.4774C26.2269 25.6281 26.686 25.4774 26.839 25.1758L29.8995 19.8995C30.0525 19.598 30.0525 19.1457 29.7464 18.9949L26.2269 16.5829ZM14.9033 20.3517C11.9959 20.3517 9.54749 17.9397 9.54749 15.0753C9.54749 12.211 11.9959 9.79898 14.9033 9.79898C17.8107 9.79898 20.2591 12.211 20.2591 15.0753C20.2591 17.9397 17.8107 20.3517 14.9033 20.3517Z" fill="#4D4C4C" fill-opacity="0.933333"/>
                        </svg>
                     </div>
                     <p className='list__item-text'>Sorting</p>
                  </button>
                  {sortButtonState && <SortMenu/>  }

               </ul>
      </nav>
   )
}