import { useEffect,useRef } from "react";

export default function Navbar({
    searchText,
    setSearchText,
    typeFilter,
    setTypeFilter,
    parkingFilter,
    setParkingFilter,
}){
    const searchRef=useRef();
    useEffect(()=>{
        searchRef.current.focus();
    },[])

    return(
        <nav
            style={{
                display:"flex",
                gap:"10px",
                padding:"10px"
            }}
        >
            {/*Search*/}
            <input
            ref={searchRef}
            type="text"
            onChange={(e)=>setSearchText(e.target.value)}/>

            <select
                value={typeFilter}
                onChange={(e)=>{
                    setTypeFilter(e.target.value)
                }}>

            </select>
        </nav>
    )
}