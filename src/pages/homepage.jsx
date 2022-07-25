import Navbar from "../components/navbar";
import { useQuery } from "@apollo/client/react";
import {ALL_ANIME} from "../queries/AllAnime.js"
import Card from "../components/card";
import { useState } from "react";
import { useTheme } from "../Themes";


const HomePage = () => {
    const [currPage, setcurrPage] = useState(1)
    const {ActiveTheme, setActiveTheme} = useTheme();

    const{loading,error,data} = useQuery(ALL_ANIME,{
        variables:{
            page:currPage,
            perpage:12
        }
    }); 
    
    const prevPage = () =>{
        if(currPage !==1){
            setcurrPage(currPage-1);
        }
    } 

    const nextPage = () =>{
        setcurrPage(currPage+1);
    }

    return ( 
        <div style={{backgroundColor: ActiveTheme.bg}} className="w-screen min-h-screen h-full">
            <Navbar></Navbar>
            {loading && (
                <p style={{color: ActiveTheme.font}} className="text-center fixed top-[50%] left-[50%]">Loading...</p>
            )}
            {!loading && (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 items-center justify-center m-3">
                        {data.Page.media.map((curr)=>{
                        return(
                            <Card key ={curr.id} anime = {curr}></Card>
                        )
                        })}
                    </div>
                    <div className="w-[99%] flex flex-row justify-center space-x-5 items-center pb-5">
                        {data.Page.pageInfo.currentPage!==1 &&(
                            <button style={{backgroundColor: ActiveTheme.font}}  onClick={prevPage} className="p-2 border border-black w-20 rounded-md bg-white hover:bg-gray-300 active: bg- gray-100">Prev</button>
                        )}
                        <p style={{color: ActiveTheme.font}}>{currPage}</p>
                        {data.Page.pageInfo.lastPage !== data.Page.pageInfo.currentPage && (
                            <button style={{backgroundColor: ActiveTheme.font}} onClick={nextPage} className="p-2 border border-black w-20 rounded-md bg-white hover:bg-gray-300 active: bg- gray-100">Next</button>
                        )}
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default HomePage;