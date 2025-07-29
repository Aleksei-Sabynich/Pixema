import './LoginForm.css'
import vkIcon from '../../assets/vk.svg'
import googleIcon from '../../assets/google.svg'
import facebookIcon from '../../assets/facebook.svg'
import emailIcon from '../../assets/email.svg'
import tmdbIcon from '../../assets/tmdb.svg'
import { useLazyGetTokenQuery } from '../../query/TmdbApi'
import { StatusModalWindow } from '../statusModalWindow/StatusModalWindow'
import { LoginFormButton } from '../loginFormButton/LoginFormButton'
import { useAppDispatch } from '../../store/store'
import { changeIsActive } from '../../store/slices/loginButtonSlice'




export const LoginForm = () => {

   const dispatch = useAppDispatch()
   const [getToken, {isLoading, isError}] = useLazyGetTokenQuery()

   const handleTMDBLogin = async () => {
      const { data} = await getToken();
      if (data?.request_token) {
         window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:5175/approved`;
      }
   };

   if (isLoading) {
        return <StatusModalWindow text='Загрузка...'/>
    }
    
   if (isError) {
         return <StatusModalWindow text='Токен не получен'/>
   }


   return(
      <div className="form__wrapper" onClick={()=>dispatch(changeIsActive(false))}>
         <form  className="form__login" action=""  onClick={(e)=>e.stopPropagation()}>
            <button className='form__login-closeBtn' type='button' onClick={()=>dispatch(changeIsActive(false))}>Х</button>
            <LoginFormButton bgColor="#2105ee" text="Войти через Вконтакте" icon= {vkIcon} />
            <LoginFormButton bgColor="#ed0808" text="Войти через Google" icon= {googleIcon} />
            <LoginFormButton bgColor="#0579ec" text="Войти через FaceBook" icon= {facebookIcon} />
            <LoginFormButton bgColor="#4e5052" text="Войти через Email" icon= {emailIcon} />
            <LoginFormButton bgColor="#7402ee" text="Войти через TMDb" icon= {tmdbIcon} action={handleTMDBLogin}  />
         </form>
      </div>
   )
}