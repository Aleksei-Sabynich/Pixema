import { SortMenuItem } from '../sortMenuItem/SortMenuItem'
import './SortMenu.css'
export const SortMenu = () => {
   return(
         <form name="sortForm" className="sortForm">
            <p>Сортировать по:</p>
            <SortMenuItem value="popularity.asc" title="По популярности (по возрастанию)"/>
            <SortMenuItem value="popularity.desc" title="По популярности (по убыванию)"/>
            <SortMenuItem  value="release_date.asc" title="По дате релиза"/>
            <SortMenuItem  value="release_date.desc" title="По дате релиза (по убыванию)"/>
            <SortMenuItem  value="revenue.asc" title="По кассовым сборам"/>
            <SortMenuItem  value="revenue.desc" title="По кассовым сборам (по убыванию)"/>
            <SortMenuItem  value="primary_release_date.asc" title=" По основной дате релиза"/>
            <SortMenuItem  value="primary_release_date.desc" title="По основной дате релиза (по убыванию)"/>
            <SortMenuItem  value="original_title.asc" title="По названию (A–Z)"/>
            <SortMenuItem  value="original_title.desc" title="По названию (Z–A)"/>
            <SortMenuItem  value="vote_average.asc" title="По рейтингу (меньше → больше)"/>
            <SortMenuItem  value="vote_average.desc" title="По рейтингу (больше → меньше)"/>
            <SortMenuItem  value="vote_count.asc" title="По количеству голосов"/>
            <SortMenuItem  value="vote_count.desc" title=" По количеству голосов (по убыванию)"/>
         </form>
   )
}