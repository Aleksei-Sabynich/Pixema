import { useNavigate } from 'react-router-dom';
import './SuccesAuthorized.css'
import { useEffect } from 'react';


export const SuccesAuthorized =() => {
    const navigate = useNavigate();

    useEffect(()=>{
      const timer = setTimeout( ()=>{
         navigate('/');
      }, 4000)
      return () => clearTimeout(timer)
    }, [])

   return (
         <div className="auth-success">
            <p>
               🎉Поздравляем! Вы успешно прошли авторизацию!
            </p>
         </div>
   )
}