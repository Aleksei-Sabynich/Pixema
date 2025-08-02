import './LoginForm.css'
import vkIcon from '../../assets/vk.svg'
import googleIcon from '../../assets/google.svg'
import facebookIcon from '../../assets/facebook.svg'
import emailIcon from '../../assets/email.svg'
import tmdbIcon from '../../assets/tmdb.svg'
import { useLazyGetTokenQuery } from '../../query/TmdbApi'
import { LoginFormButton } from '../loginFormButton/LoginFormButton'
import { useNavigate } from 'react-router-dom'




export const LoginForm = () => {

   const [getToken, {isLoading, isError}] = useLazyGetTokenQuery()
   const navigate = useNavigate()

   const handleTMDBLogin = async () => {
      const { data} = await getToken();
      if (data?.request_token) {
         window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:5175/approved`;
      }
   };


   return(
   <>     
      <div className="form__wrapper" onClick={() => navigate(-1)} >  
         <form  className="form__login" action=""  onClick={(e)=>e.stopPropagation()}>
             {  isLoading 
               ?  <div className='spinner__wrapper' > 
                     <div className="spinner__img" />
                     <div className="spinner__text">Загрузка...</div>
                  </div>
               : isError
                        ?<div className='spinner__wrapper' > 
                           <div className="spinner__text">Токен не получен</div>
                        </div>
                        :<>
                           <button className='form__login-closeBtn' type='button' onClick={() => navigate(-1)}>Х</button>
                           <LoginFormButton bgColor="#2105ee" text="Войти через Вконтакте ( в разработке )" icon= {vkIcon} />
                           <LoginFormButton bgColor="#ed0808" text="Войти через Google ( в разработке )" icon= {googleIcon} />
                           <LoginFormButton bgColor="#0579ec" text="Войти через FaceBook ( в разработке )" icon= {facebookIcon} />
                           <LoginFormButton bgColor="#4e5052" text="Войти через Email ( в разработке )" icon= {emailIcon} />
                           <LoginFormButton bgColor="#7402ee" text="Войти через TMDb" icon= {tmdbIcon} action={handleTMDBLogin}  />
                        </>
             }
         </form>

      </div>
   
   </>
   )
}