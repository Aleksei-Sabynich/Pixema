import { FavPostByID } from '../../components/favPostByID/FavPostByID'
import { Pagination } from '../../components/pagination/Pagination'
import { StatusModalWindow } from '../../components/statusModalWindow/StatusModalWindow'
import { useAppSelector } from '../../store/store'
import './Favorites.css'

export const Favorites =() => {
   const ids = useAppSelector(state => state.favoritesMove.favoritesMove)
   console.log(ids)
   const currentPage = useAppSelector(state => state.pagination.currentPage)

   const postsPerPage = 10
   const startIndex = (currentPage - 1) * postsPerPage
   const currentPageIds = ids.slice(startIndex, startIndex + postsPerPage)

   return(
      <>{ids.length
         ?  <>
               <div className="posts__wrap">
                  {currentPageIds.map((id:number) => <FavPostByID key={id} id= {id} />)}
               </div>
                <Pagination page ={Math.ceil(ids.length/10)}/>
            </>
         :  <StatusModalWindow text='Список пустой'/>
         
      }  
      </>
   )
}