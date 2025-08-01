import { Link } from "react-router-dom"
import { useGetPostsByIdQuery } from "../../query/TmdbApi"
import { ImageNoPresent } from "../imageNotPresent/ImageNotPresent";
import { useState } from "react";
import { BookmarkIcon } from "../ bookmarkIcon/ BookmarkIcon";

type FavPostByIDProps = {
  id: number,
}


export const FavPostByID = ({id}:FavPostByIDProps) => {

   const [errorImage, setErrorImage] = useState(false);
   const {data} = useGetPostsByIdQuery(id)

   return  (  
      data && 
      <Link to={`/${data.id}`} className="post__item" >
         <div className="post__img">
             {errorImage || data.poster_path === "N/A" 
                  ? <ImageNoPresent/>
                  : <>
                        <img  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="title" onError={() => setErrorImage(true)}/>
                        <div className='post__bookmarkIcon' >
                                             <BookmarkIcon  id={data.id} title={data.title} />
                        </div>
                     </>
               }
         </div> 
         <h3 className="post__title">{data.title}</h3>
         <div className='post__content'>
            <p className="post__year">{data.release_date}</p>
            <p className="post__year"> оценка {data.vote_average.toFixed(1)}</p>
         </div>
      </Link>

   )
}