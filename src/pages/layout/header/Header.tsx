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
}

export const Header = ({localSearch, setLocalSearch}:HeaderProps) => {

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
            </div>
         </header>
   )
}