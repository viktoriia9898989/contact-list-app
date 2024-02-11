import './CatsBlock.css'
import Kitty from '../assets/images/nf.webp'






const CatsBlock = ({ message, additionalClass }) =>{

 
        
   
    return(

        <div className={`container-404 ${additionalClass || ''}`}>

    

            <div className="not-found">
            <img src={Kitty} alt="" />
            
            </div>

            <div className="not-found-title">
               <h2>{message}</h2>
            </div>


        </div>
        
        

    )
}


export default CatsBlock