import { useState } from "react"
import './ BookmarkIcon.css'
import { toggleFavorite } from "../../store/slices/favoritesMoveSlice"
import { useAppDispatch, useAppSelector } from "../../store/store"


export const  BookmarkIcon =({ id, title}: { id: number, title:string })=> {
   const dispatch = useAppDispatch()

   let [isActiveSvg, setIsActiveSvg] = useState<'active' | ''>('')
   
   const favoritesMove = useAppSelector(state => state.favoritesMove.favoritesMove)

   const checkInFavorites = (id:number) => {
      return favoritesMove.find(el => el.id ===id)
   }
  
  
   return(
      <button  className={ checkInFavorites(id)? `bookmark-wrapIcon active` : 'bookmark-wrapIcon' }
                        onClick={(e) => {
                           e.preventDefault(); 
                           e.stopPropagation();
                           setIsActiveSvg( isActiveSvg ===''? isActiveSvg ='active' : isActiveSvg ='');
                           dispatch(toggleFavorite({id, title}))
                           }
                        }>
                <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13 30L1.95001 36V2.5H23.4V37L13 30Z" fill="white" stroke="black"/>
               <path d="M0 4C0 1.8 1.4625 0 3.25 0H22.75C23.612 0 24.4386 0.421427 25.0481 1.17157C25.6576 1.92172 26 2.93913 26 4V40L13 32L0 40V4ZM3.25 4V34L13 28L22.75 34V4H3.25Z" fill="black"/>
               </svg>

      </button>
   )
}
