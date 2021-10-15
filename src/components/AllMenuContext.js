import React,{useState,useEffect} from "react";
import Loader from './Loader/Loader';

export const AllMenuContext = React.createContext()

function Allmenu(props){
    
    let [specialmenu, setspecialmenu] = useState([]);
    let [loading,setloading] = useState(false);

    // speacial dish list
    async function SpecialDish(){
        setloading(true);
        const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URl);
        let Data = await response.json();
        setspecialmenu(Data.meals);
        setloading(false);
        
    }
    useEffect(()=>{
        SpecialDish();
    },[])
    return(
        <AllMenuContext.Provider value={specialmenu}>
             {!loading ? props.children : <Loader/>}
        </AllMenuContext.Provider>
    )
}
export default Allmenu;