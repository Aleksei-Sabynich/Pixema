import { useState } from "react"
import './ BookmarkIcon.css'

export const  BookmarkIcon =({ id }: { id: number })=> {

   let [isActiveSvg, setIsActiveSvg] = useState<'active' | ''>('')
   
   const getFavorites = () => {
      const raw = localStorage.getItem('favorites')
      return raw ? JSON.parse(raw) : []
   }

   const checkToFavorites = () => {
      const favorites = getFavorites()
      if (favorites.includes(id)) {  
         return true
      }
   }
   const addToFavorites = () => {
      const favorites = getFavorites()
      if (!favorites.includes(id)) {
         favorites.push(id)
         localStorage.setItem('favorites', JSON.stringify(favorites))
      }
   }
   const removeFromFavorites = () => {
      const favorites = getFavorites().filter((idItem:number) => id !== idItem)
      localStorage.setItem('favorites', JSON.stringify(favorites))
   }
   const toggleFavorite = () => {
      const favorites = getFavorites()
      if (favorites.includes(id)) {
         removeFromFavorites()
      } else {
         addToFavorites()
      }
   }
   return(
      <button  className={ checkToFavorites()? `bookmark-wrapIcon active` : 'bookmark-wrapIcon' }
                        onClick={(e) => {
                           e.preventDefault(); 
                           e.stopPropagation();
                           setIsActiveSvg( isActiveSvg ===''? isActiveSvg ='active' : isActiveSvg ='');
                           toggleFavorite()
                           }
                        }>
                <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13 30L1.95001 36V2.5H23.4V37L13 30Z" fill="white" stroke="black"/>
               <path d="M0 4C0 1.8 1.4625 0 3.25 0H22.75C23.612 0 24.4386 0.421427 25.0481 1.17157C25.6576 1.92172 26 2.93913 26 4V40L13 32L0 40V4ZM3.25 4V34L13 28L22.75 34V4H3.25Z" fill="black"/>
               </svg>

      </button>
   )
}
