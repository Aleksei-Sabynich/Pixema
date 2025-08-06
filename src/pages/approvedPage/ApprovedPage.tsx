import { useEffect } from 'react'
import {  useNavigate, useSearchParams } from 'react-router-dom'
import { StatusModalWindow } from '../../components/statusModalWindow/StatusModalWindow'
import { API_KEY } from '../../query/TmdbApi';
import { useAppDispatch } from '../../store/store';
import { onAuthorized } from '../../store/slices/isAuthorizedSlice';

export const ApprovedPage = () => {
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();
   const dispach = useAppDispatch()



  useEffect(() => {
    const token = searchParams.get('request_token');
    const approved = searchParams.get('approved');

    if (token && approved === 'true') {
      fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request_token: token }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.session_id) {
            localStorage.setItem('session_id', data.session_id);
            dispach(onAuthorized(true))
            navigate('/succesAuthorized'); 
          } else {
            console.error('Ошибка создания сессии:', data);
          }
        });
    } else {
      console.error('Авторизация не подтверждена или токен отсутствует');
    }
  }, []);

   return <StatusModalWindow text='Подтверждаем авторизацию...'/>
}