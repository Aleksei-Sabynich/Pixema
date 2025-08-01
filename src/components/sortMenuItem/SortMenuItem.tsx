import './sortMenuItem.css'

interface SortMenuItemProps{
   value:string,
   title:string
}

export const SortMenuItem = ({value, title}:SortMenuItemProps) =>{

   return(
         <label>
            <input type="radio" name="sort" value={value}/>
            {title}
         </label>
   )
}