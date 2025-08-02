import { useNavigate } from 'react-router-dom'
import { toggleSotrParams } from '../../store/slices/paramsSort'
import { useAppDispatch } from '../../store/store'
import './sortMenuItem.css'
import { setCurrentPage } from '../../store/slices/paginationSlice'

interface SortMenuItemProps{
   value:string,
   title:string
}

export const SortMenuItem = ({value, title}:SortMenuItemProps) =>{

   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const handleSortChange = () => {
      dispatch(setCurrentPage(1));
      dispatch(toggleSotrParams(value));
      navigate('/sorting')

   }


   return(
            <label  onClick={handleSortChange}>
               <input type="radio" name="sort" value={value}/>
               <span></span>
               {title}
            </label>
   )
}