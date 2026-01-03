import { useEffect,useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import {getRestaurants} from "../utils/storage";

export default function CustomerDashboard(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        setData(getRestaurants());
    },[])

    return(
        <div>
            <h2>Customer Dashboard</h2>
            {data.map((r)=>(
                <RestaurantCard key={r.restaurantID} data={r}/>
            ))}
        </div>
    )
}