import { FavPostByID } from '../../components/favPostByID/FavPostByID'
import { Pagination } from '../../components/pagination/Pagination'
import { StatusModalWindow } from '../../components/statusModalWindow/StatusModalWindow'
import { useAppSelector } from '../../store/store'
import './Favorites.css'

export const Favorites =() => {

     const searchValue = useAppSelector((state) => state.search.favorites); 
   
   const ids = useAppSelector(state => state.favoritesMove.favoritesMove)
   const filterIds = ids.filter(el => el.title?.toLowerCase().includes(searchValue.toLowerCase()||''))

   const currentPage = useAppSelector(state => state.pagination.currentPage)

   const postsPerPage = 10
   const startIndex = (currentPage - 1) * postsPerPage
   const currentPageIds = filterIds.slice(startIndex, startIndex + postsPerPage)



   return(
      <>{filterIds.length
         ?  <>
               <div className="posts__wrap">
                  {currentPageIds.map((el) => <FavPostByID key={el.id} id= {el.id} />)}
               </div>
                <Pagination page ={Math.ceil(ids.length/10)}/>
            </>
         :  <StatusModalWindow text='Список пустой'/>
         
      }  
      </>
   )
}