import CatsBlock from "../../components/CatsBlock";
import './Home.css';





const Home = () =>{
    return(
        <CatsBlock
        
      message={
        <h2>
          Hello  I am <span>Kitti</span><br/>  and it is my <br/> <span className="name-app">Contact List App </span><br/> <span className="welcome">Welcome!</span>
        </h2>
      }

      additionalClass="home-component"
      
      />
    );
    
}
export default Home