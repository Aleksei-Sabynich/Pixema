import './Posts.css'
import { PostItem } from "../../components/postItem/PostItem";
import { useGetPostsQuery } from "../../query/TmdbApi";
import { useAppSelector } from '../../store/store';
import { Pagination } from '../../components/pagination/Pagination';
import { StatusModalWindow } from '../../components/statusModalWindow/StatusModalWindow';

export const Posts = () => {
  
  const searchValue = useAppSelector((state) => state.search.home);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);


  const { data, isLoading, error } =  useGetPostsQuery({search:searchValue, page:currentPage})
  


  if (isLoading) {
      return <StatusModalWindow text='Загрузка...'/>
  }
  if (error) {
     return <StatusModalWindow text='Ошибка при загрузке'/>
  }

  if (!data || data.results.length === 0) {
      return <StatusModalWindow text='Фильмы не найдены'/>
  }

  return (
    <>
      <div className="posts__wrap">
        {data.results.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination page ={data.pagesCount}/>
     
    </>
  );
}