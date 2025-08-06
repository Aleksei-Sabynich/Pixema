import { Link } from 'react-router-dom'
import './RegButtons.css'

export const RegButtons = () => {

   return (
      <div className="regButtons_wrapper">
         <Link to={'/singin'} className='regButton' >Вход</Link>
         <button className='regButton'>Регистрация</button>
      </div>
   )
}