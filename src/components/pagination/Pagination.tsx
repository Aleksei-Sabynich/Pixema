import './Pagination.css'
import { setCurrentPage } from '../../store/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';



export const Pagination = ({ page }: {page:number|undefined}) => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector((state) => state.pagination.currentPage);    
   
   
   const maxPage = page !== undefined ? (page > 500 ? 500 : page) : 0;

   const nextPage = ( ) => {
         currentPage !== maxPage && dispatch(setCurrentPage(currentPage+1))
   }
   const previousPage = ( ) => {
      currentPage >1 && dispatch(setCurrentPage(currentPage-1))
   }
   const jumpByPage  = (event: React.MouseEvent<HTMLButtonElement> ) => {
       const text = event.currentTarget.textContent ?? ''

         if (text !== '...') {
            dispatch(setCurrentPage(+text))
         }
   }

   
   const createPageButtons = () => {
    const buttons: (number | string)[] = []

    if (maxPage <= 9) {
      for (let i = 1; i <= maxPage; i++) buttons.push(i)
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 9; i++) buttons.push(i)
        buttons.push('...')
        buttons.push(maxPage)
      } else if (currentPage >= maxPage - 5) {
        buttons.push(1)
        buttons.push('...')
        for (let i = maxPage - 8; i <= maxPage; i++) {
          buttons.push(i)
        }
      } else {
        buttons.push(1)
        buttons.push('...')
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
          buttons.push(i)
        }
        buttons.push('...')
        buttons.push(maxPage)
      }
    }

    return buttons
  }




   return( page !== undefined &&
       <div className="pagination">
          <button className="pagination__arrow pagination__prev" onClick={previousPage}>Предыдущая...</button>
            {createPageButtons().map((btn, index) => (
            <button  key={index} className={`pagination__btn ${btn === currentPage ? 'active' : ''}`}
                     onClick={jumpByPage}
                     disabled={btn === '...'}
            >
               {btn}
            </button>
            ))}
          <button className='pagination__arrow pagination__next' onClick={nextPage}>Следующая...</button>
      </div>
   )
}