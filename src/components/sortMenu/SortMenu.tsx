import { useEffect } from 'react';
import { SortMenuItem } from '../sortMenuItem/SortMenuItem'
import './SortMenu.css'
import { useAppSelector } from '../../store/store';

interface SortMenuProps{
     closeSortMenu: (value:boolean)=>void;
}


export const SortMenu = ({closeSortMenu}:SortMenuProps) => {

   const paramsSort = useAppSelector(state => state.paramsSort.params)

   useEffect(() => {
      const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
         if (
            !target.closest('.sortForm') &&
            !target.closest('.header__block-sort')
         ) {
            closeSortMenu(false);
         }
      };
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
   }, []);




   return(
         <form name="sortForm" className="sortForm">
            <p>Сортировать по:</p>
            <SortMenuItem value="popularity.asc" title="По популярности (по возрастанию)" paramsSort ={paramsSort}/>
            <SortMenuItem value="popularity.desc" title="По популярности (по убыванию)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="release_date.asc" title="По дате релиза" paramsSort ={paramsSort}/>
            <SortMenuItem  value="release_date.desc" title="По дате релиза (по убыванию)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="revenue.asc" title="По кассовым сборам" paramsSort ={paramsSort}/>
            <SortMenuItem  value="revenue.desc" title="По кассовым сборам (по убыванию)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="original_title.asc" title="По названию (A–Z)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="original_title.desc" title="По названию (Z–A)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="vote_average.asc" title="По рейтингу (меньше → больше)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="vote_average.desc" title="По рейтингу (больше → меньше)" paramsSort ={paramsSort}/>
            <SortMenuItem  value="vote_count.asc" title="По количеству голосов" paramsSort ={paramsSort}/>
         </form>
   )
}