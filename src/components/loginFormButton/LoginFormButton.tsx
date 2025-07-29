import './LoginFormButton.css'


interface  LoginFormButtonProps{
   bgColor:string,
   text:string,
   icon:string
   action?: ()=>void
   
}

export const LoginFormButton = ( {bgColor, text, icon, action }:LoginFormButtonProps) => {

   const actionClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      action?.()
   }

   return(
      <button className="formButton" style={{backgroundColor:bgColor}} onClick={actionClickButton}   >
         <div className="formButton__wrapIcon">
            <img src={icon} alt="" />
         </div>
         <p className="formButton__text">
            {text}
         </p>
      </button>
   )
}