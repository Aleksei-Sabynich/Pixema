import './PostById.css'
import { useNavigate, useParams } from "react-router-dom"
import { useGetPostsByIdQuery } from "../../query/TmdbApi"
import { BookmarkIcon } from '../../components/ bookmarkIcon/ BookmarkIcon'
import { StatusModalWindow } from '../../components/statusModalWindow/StatusModalWindow'
import { ImageNoPresent } from '../../components/imageNotPresent/ImageNotPresent'
import { useState } from 'react'


export const PostById = () => {
   const navigate = useNavigate()
   const {postId} = useParams()
   const [errorImage, setErrorImage] = useState(false);
   const { data, isLoading, error } = useGetPostsByIdQuery(postId ? Number(postId) : 0)


  if (isLoading) {
      return <StatusModalWindow text='Загрузка...'/>
  }
  if (error) {
     return <StatusModalWindow text='Ошибка при загрузке'/>
  }

  if (!data) {
      return <StatusModalWindow text='Фильмы не найдены'/>
  }

  
   return( 
         <div className="post">
            <div className="post__header">
               <h2 className='post__header-title'>{data.title} </h2>
               <div className='post__header-buttons'>
                  <BookmarkIcon id ={data.id} title={data.title}/>
                  <button className='post__header-buttonsClose' 
                           onClick={()=>navigate(-1)}
                     > X </button>

               </div>

            </div>
            <div className="post__main">
               <div className="post__image">
                  {errorImage || data.poster_path === "N/A" 
                                    ? <ImageNoPresent/>
                                    :<>
                                       <img  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} onError={() => setErrorImage(true)}/>
                                    </>
                  }
               </div>

               <div className="post__descriptions">
                  <p className="post__description">Год выпуска: <span>{data.release_date.slice(0,4)}</span></p>
                  <p className="post__description">Страна:  <span>{data.production_countries.map(el => el.name).join(', ')}</span></p>
                  <p className="post__description">Жанр:  <span>{data.genres.map(el => el.name).join(', ')}</span></p>
                  <p className="post__description">Продолжительность: <span>{data.runtime}</span></p>
                  <p className="post__description">Языки: <span>{data.spoken_languages.map(el => el.name).join(', ')}</span> </p>
                  <p className="post__description"> Бюджет фильма (в долларах):  <span>{data.budget}</span></p>
                  <p className="post__description">Сборы фильма (в долларах):  <span>{data.revenue}</span></p>
                  <p className="post__description">Популярность по версии TMDB:  <span>{data.popularity}</span></p>
                  <p className="post__description">Средняя оценка:  <span>{data.vote_average}</span></p>
                  <p className="post__description">Количество голосов:  <span>{data.vote_count}</span></p>
                  <p className="post__description post__description-tagline">Слоган фильма:  <span>{data.tagline}</span></p>
                  <p className="post__description post__description-overview">Краткое содержание:  <span>{data.overview}</span></p>
               </div>
            </div>
         </div>
      )
}
