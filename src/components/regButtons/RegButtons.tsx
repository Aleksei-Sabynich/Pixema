import { changeIsActive } from '../../store/slices/loginButtonSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import './RegButtons.css'

export const RegButtons = () => {
   const dispatch = useAppDispatch()
   const isActive = useAppSelector(state=> state.loginButton.isActive)

const changeIsActiveState = () => {
   dispatch(changeIsActive(!isActive))
}

   return (
      <div className="regButtons_wrapper">
         <button className='regButton' onClick={changeIsActiveState}>Вход</button>
         <button className='regButton'>Регистрация</button>
      </div>
   )
}