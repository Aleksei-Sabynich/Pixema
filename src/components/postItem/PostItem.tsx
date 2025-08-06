import { useState } from 'react'
import { ImageNoPresent } from '../imageNotPresent/ImageNotPresent'
import './PostItem.css'
import { Link } from 'react-router-dom'
import { BookmarkIcon } from '../ bookmarkIcon/ BookmarkIcon'



interface PostProps {
   post: {
      id: number 
      title: string
      vote_average: number
      release_date: string
      poster_path: string | null

   }
}
export const PostItem = ({post:{title,id, vote_average, release_date,poster_path} }:PostProps) => {
   const [errorImage, setErrorImage] = useState(false);

   return (
      <Link to={`/${id}`} className="post__item" >
         <div className="post__img">
             {errorImage || poster_path === "N/A" 
                  ? <ImageNoPresent/>
                  :<>
                     <img  src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title" onError={() => setErrorImage(true)}/>
                     <div className='post__bookmarkIcon' >
                        <BookmarkIcon  id={id} title ={title}/>
                     </div>
                  </>
               }
         </div> 
         <h3 className="post__title">{title}</h3>
         <div className='post__content'>
            <p className="post__year">{release_date.slice(0,4)}</p>
            <p className="post__year"> оценка {vote_average.toFixed(1)}</p>
         </div>
      </Link>


   )
}

