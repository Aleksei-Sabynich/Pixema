import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { UserDropDown } from '../../../components/userDropDown/UserDropDown'
import { RegButtons } from '../../../components/regButtons/RegButtons'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect, useState } from 'react'
import { setSearch } from '../../../store/slices/searchSlice'
import { SortMenu } from '../../../components/sortMenu/SortMenu'

interface  HeaderProps{
   localSearch:string,
   setLocalSearch:(value:string)=>void
   navMobileState:boolean,
   setNavMobileState:(value:boolean)=>void
}

export const Header = ({localSearch, setLocalSearch,navMobileState, setNavMobileState }:HeaderProps) => {

   const dispatch = useAppDispatch(); 
   const location = useLocation();

   const [isOpenMenuSort, setIsOpenMenuSort] = useState(false)

   const currentRout = location.pathname === '/' ? 'home' : location.pathname.slice(1) as 'trends' | 'favorites' ;
   
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
               <div className='header__block'>
                  <input className="header__block-search" type='search' placeholder="Поиск..." value={localSearch} onChange={(e) => setLocalSearch (e.target.value)}/>
                   <button  className='header__block-sort' 
                            onClick={() => setIsOpenMenuSort(!isOpenMenuSort)}
                  > 
                     <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M14.8077 3.61536H1.34615C0.538461 3.61536 0 4.23074 0 5.15382V8.23074C0 9.15382 0.538461 9.7692 1.34615 9.7692H14.8077C15.6154 9.7692 16.1538 9.15382 16.1538 8.23074V5.15382C16.1538 4.23074 15.6154 3.61536 14.8077 3.61536Z" fill="black"/>
                     <path d="M14.8077 15.9231H1.34615C0.538461 15.9231 0 16.5385 0 17.4616V20.5385C0 21.4616 0.538461 22.0769 1.34615 22.0769H14.8077C15.6154 22.0769 16.1538 21.4616 16.1538 20.5385V17.4616C16.1538 16.5385 15.6154 15.9231 14.8077 15.9231Z" fill="black"/>
                     <path d="M14.8077 28.2307H1.34615C0.538461 28.2307 0 28.8461 0 29.7692V32.8461C0 33.7692 0.538461 34.3846 1.34615 34.3846H14.8077C15.6154 34.3846 16.1538 33.7692 16.1538 32.8461V29.7692C16.1538 28.8461 15.6154 28.2307 14.8077 28.2307Z" fill="black"/>
                     <path d="M34.5961 22.5385L32.7115 20.3846C32.4423 20.0769 32.0385 19.9231 31.7692 19.9231C31.3654 19.9231 31.0961 20.0769 30.8269 20.3846L28.1346 23.4615C27.7308 23.9231 26.9231 23.6154 26.9231 22.8461V2.07691C26.9231 1.30768 26.25 0.538452 25.5769 0.538452H22.8846C22.2115 0.538452 21.5385 1.30768 21.5385 2.07691V35.9231C21.5385 36.3846 21.6731 36.6923 21.9423 37C22.2115 37.3077 22.6154 37.4615 22.8846 37.4615C23.2885 37.4615 23.5577 37.3077 23.8269 37L34.5961 24.6923C34.8654 24.3846 35 24.0769 35 23.6154C35 23.1538 34.8654 22.8461 34.5961 22.5385Z" fill="black"/>
                     </svg>
                  </button>
               </div>
               { authorizedState?  <UserDropDown/> : <RegButtons/>}  
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
                 {isOpenMenuSort && <SortMenu closeSortMenu={setIsOpenMenuSort}/>  }
            </div>
         </header>
   )
}
