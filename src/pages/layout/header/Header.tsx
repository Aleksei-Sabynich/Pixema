import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { UserDropDown } from '../../../components/userDropDown/UserDropDown'
import { RegButtons } from '../../../components/regButtons/RegButtons'
import { UserMenu } from '../../../components/userMenu/UserMenu'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import { setSearch } from '../../../store/slices/searchSlice'

interface  HeaderProps{
   localSearch:string,
   setLocalSearch:(value:string)=>void
   navMobileState:boolean,
   setNavMobileState:(value:boolean)=>void
}

export const Header = ({localSearch, setLocalSearch,navMobileState, setNavMobileState }:HeaderProps) => {

   const dispatch = useAppDispatch(); 
   const location = useLocation();
   const currentRout = location.pathname === '/' ? 'home' : location.pathname.slice(1) as 'trends' | 'favorites' ;

   const isOpenUserMenu = useAppSelector((state) => state.userDropDown.isOpen);
   const authorizedState = useAppSelector((state) => state.isAuthorized.authorizedState);


  
    useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearch({ rout: currentRout, searchValue: localSearch}));
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentRout, localSearch ]);
 

   return(
      <header className="header">
            <div className="header__container">
               <Link  to = '/'className="header__logo">
                  <p><span>PIX</span>EMA</p>
               </Link>
               <input className="header__search" type='search' placeholder="Поиск..." value={localSearch} onChange={(e) => setLocalSearch (e.target.value)}/>
               { authorizedState?  <UserDropDown/> : <RegButtons/>}
                {isOpenUserMenu && <UserMenu/>}
                <button className='navigate__menu' onClick={() => setNavMobileState(!navMobileState)}>
                   <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_44_19)">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M9.7561 5C9.7561 7.76142 7.57212 10 4.87805 10C2.18398 10 0 7.76142 0 5C0 2.23858 2.18398 0 4.87805 0C7.57212 0 9.7561 2.23858 9.7561 5ZM24.878 5C24.878 7.76142 22.6941 10 20 10C17.3059 10 15.122 7.76142 15.122 5C15.122 2.23858 17.3059 0 20 0C22.6941 0 24.878 2.23858 24.878 5ZM40 5C40 7.76142 37.816 10 35.1219 10C32.4279 10 30.2439 7.76142 30.2439 5C30.2439 2.23858 32.4279 0 35.1219 0C37.816 0 40 2.23858 40 5Z" fill="black"/>
                     </g>
                     <defs>
                     <clipPath id="clip0_44_19">
                     <rect width="40" height="10" fill="white"/>
                     </clipPath>
                     </defs>
                     </svg>
                </button>
            </div>
         </header>
   )
}