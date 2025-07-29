import './StatusModalWindow.css'

interface StatusModalWindowProps {
   text:string
}

export const StatusModalWindow = ({text}:StatusModalWindowProps) =>{

   return (
      <div className='posts__message-wrap'>
            <img src="src/assets/image1.jpg" alt="" />
         <p  className='posts__message'>{text}</p>;
      </div>
    )
}