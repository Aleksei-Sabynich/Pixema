import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../store/store'
import './UserMenu.css'
import { offAuthorized } from '../../store/slices/isAuthorizedSlice'
import { closeUserDropDown } from '../../store/slices/userDropDownSlice'
import { useGetUserInfoQuery } from '../../query/TmdbApi'


export const UserMenu =()=> {

   const isOpen = useAppSelector(state => state.userDropDown.isOpen)
   const {data} =  useGetUserInfoQuery()
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const exitButtonClick = () => {
      dispatch(offAuthorized())
      dispatch(closeUserDropDown())
      navigate('/')
   }

   return(
         <div className={`userMenu_page ${isOpen ? 'open' : ''}`} onClick={() => dispatch(closeUserDropDown())}>
               <div  className="userMenu_wrap" onClick={(e) => e.stopPropagation()} >
                  <div className="userMenu_wrap-img">
                  <div className='userMenu_wrap-img-ico'>
                     <img src={`https://image.tmdb.org/t/p/w185${data?.avatar.tmdb.avatar_path}`} alt="" />
                  </div>
                  <p className='userMenu_wrap-img-name'> {data?.username}</p>
                  <p className='userMenu_wrap-img-text'> Синхронизируйте данные Chrome на всех устройствах</p>
                  <button className='userMenu_wrap-img-btn'> Включить синхронизацию</button>
                  </div>
                  <div className='userMenu_wrap-menu '>
                     <button className='userMenu_wrap-menu-item'>
                        <div className='menu-item-svg'>
                           <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.2778 0C7.66667 0 5.55556 2.11111 5.55556 4.72221C5.55556 5.27776 5.66667 5.83332 5.83332 6.38887L0 12.2222V15H2.77778V13.3333H4.44444V11.6667H6.11111L8.6111 9.16668C9.11111 9.33333 9.66667 9.44444 10.2778 9.44444C12.8889 9.44444 15 7.33333 15 4.72224C15 2.11114 12.8889 0 10.2778 0ZM11.6667 5C10.7222 5 10 4.27779 10 3.33333C10 2.38887 10.7222 1.66667 11.6667 1.66667C12.6111 1.66667 13.3333 2.38887 13.3333 3.33333C13.3333 4.27779 12.6111 5 11.6667 5Z" fill="white"/>
                           </svg>
                        </div>
                        <p className='menu-item-text'>Пароли и автозаполнение</p>
                     </button>
                     <button className='userMenu_wrap-menu-item'>
                        <div className='menu-item-svg'>
                           <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_107_26)">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6817 3.42273C14.2214 3.86378 13.4312 3.9015 12.9167 3.507C12.0851 2.86944 11.0677 2.43305 9.96931 2.24582C8.75693 2.03909 7.50025 2.14516 6.35825 2.55064C5.21619 2.95612 4.24006 3.64275 3.55331 4.52373C2.86656 5.40471 2.5 6.44046 2.5 7.5C2.5 8.55953 2.86656 9.59528 3.55331 10.4763C4.24006 11.3572 5.21619 12.0439 6.35825 12.4494C7.50025 12.8548 8.75693 12.9609 9.96931 12.7542C10.8904 12.5972 11.7546 12.2649 12.5 11.7857V8.57143H8.75C8.05962 8.57143 7.5 8.09175 7.5 7.5C7.5 6.90825 8.05962 6.42857 8.75 6.42857H13.75C14.4404 6.42857 15 6.90825 15 7.5V12.2916C15 12.5965 14.8484 12.8869 14.5833 13.0902C13.4191 13.9827 11.9948 14.5937 10.4571 14.8559C8.75969 15.1453 7.00037 14.9967 5.4015 14.4291C3.80269 13.8614 2.43612 12.9002 1.47462 11.6668C0.513187 10.4334 0 8.98334 0 7.5C0 6.01666 0.513187 4.56659 1.47462 3.33321C2.43612 2.09984 3.80269 1.13855 5.4015 0.570908C7.00037 0.00326527 8.75969 -0.145277 10.4571 0.144105C11.9948 0.406283 13.4191 1.01727 14.5833 1.90982C15.0979 2.30432 15.1419 2.98168 14.6817 3.42273Z" fill="white"/>
                           </g>
                           <defs>
                           <clipPath id="clip0_107_26">
                           <rect width="15" height="15" fill="white"/>
                           </clipPath>
                           </defs>
                           </svg>
                        </div>
                        <p className='menu-item-text'>Управление аккаунтом Google</p>
                     </button>
                     <button className='userMenu_wrap-menu-item' onClick={exitButtonClick}>
                        <div className='menu-item-svg'>
                           <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.44812 7.5H15.9301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M1.5824 0.5H13.3265C13.3953 0.5 13.4466 0.522926 13.4711 0.542969C13.4746 0.545867 13.477 0.548756 13.4789 0.550781V2.17871H13.1742V0.571289H1.73474V14.4287H13.1742V12.8213H13.4789V14.4482C13.4769 14.4504 13.4749 14.4539 13.4711 14.457C13.4466 14.4771 13.3953 14.5 13.3265 14.5H1.5824C1.51401 14.5 1.46341 14.477 1.43884 14.457C1.4349 14.4538 1.432 14.4504 1.43005 14.4482V0.551758C1.432 0.549627 1.4349 0.546205 1.43884 0.542969C1.46341 0.52301 1.51401 0.500026 1.5824 0.5Z" fill="white" stroke="white"/>
                           <path d="M15.93 7.5L13.3202 9.64286" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M15.93 7.50003L13.3202 5.35718" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M13.3202 3.26247V2.19104" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M13.3202 12.8572V11.7858" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                        </div>
                        <p className='menu-item-text'>Выйти из аккаунта </p>
                     </button>
                  </div>
                     
               </div>
         </div>
   
   )
}