import './UserDropdown.css'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { openUserDropDown } from '../../store/slices/userDropDownSlice'




export const UserDropDown = () => {
   const isOpen = useAppSelector(state => state.userDropDown.isOpen)
   const dispatch = useAppDispatch()
   return (

         <div 
            className={isOpen? 'userDropdown active' : 'userDropdown'}
            onClick={()=> {dispatch(openUserDropDown(isOpen))
            }
         }>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M31.32 29.8844C26.0749 27.8876 24.3983 26.2036 24.3983 22.5978C24.3983 20.4329 26 21.14 26.703 17.1756C26.9949 15.5311 28.4094 17.1489 28.68 13.3947C28.68 11.8982 27.9081 11.5267 27.9081 11.5267C27.9081 11.5267 28.3004 9.31244 28.454 7.60844C28.6443 5.48533 27.2796 0 20 0C12.7204 0 11.3549 5.48533 11.546 7.60844C11.6996 9.31244 12.0919 11.5267 12.0919 11.5267C12.0919 11.5267 11.32 11.8982 11.32 13.3947C11.5902 17.1489 13.0047 15.5311 13.2966 17.1756C14.0004 21.1396 15.6013 20.4329 15.6013 22.5978C15.6013 26.2036 13.9255 27.8876 8.68043 29.8844C3.4183 31.8871 0 33.9284 0 35.3213C0 36.7129 0 40 0 40H20H40C40 40 40 36.7129 40 35.3213C40 33.9284 36.5817 31.8871 31.32 29.8844Z" fill="#030104"/>
            </svg>
         </div>
   )
}
