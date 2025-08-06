import { useNavigate } from 'react-router-dom'
import { toggleSotrParams } from '../../store/slices/paramsSortSlice'
import { useAppDispatch } from '../../store/store'
import './sortMenuItem.css'
import { setCurrentPage } from '../../store/slices/paginationSlice'

interface SortMenuItemProps{
   value:string,
   title:string
   paramsSort:string
}

export const SortMenuItem = ({value, title, paramsSort}:SortMenuItemProps) =>{

   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const handleSortChange = () => {
      dispatch(setCurrentPage(1));
      dispatch(toggleSotrParams(value));
      navigate('/sorting')

   }


   return(
            <label  onClick={handleSortChange}>
               <input type="radio" name="sort" value={value} checked = {paramsSort=== value}/>
               <span></span>
               {title}
            </label>
   )
}