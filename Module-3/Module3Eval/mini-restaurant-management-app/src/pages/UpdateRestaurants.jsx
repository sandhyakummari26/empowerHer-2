import {useLocation, useNavigate} from "react-router-dom"
import {getRestaurants, saveRestaurants} from "../utils/storage";
import { useState } from "react";

exprot default function UpdateRestaurants(){
    const {state}=useLocation();
    const navigate=useNavigate();
    const [name,setName]=useState(state.restaurantName);

    const update=()=>{
        const data=getRestaurants().map((r)=>
        r.restaurantID===state.retauarantID ? {...r, restaurantName:name} :r
    );
    saveRestaurants(data);
    alert("Updataed");
    navigate("/admin/dashboard");
    }
    return(
        <div>
            <h2>Update Restaurant</h2>
            <input value={name} onChange={(e)=>
            setName(e.target.value)}/>
            <button onClick={update}>Update</button>
        </div>
    )
}