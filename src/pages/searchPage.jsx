import { useState } from "react";
import { useQuery } from "@apollo/client";
import Navbar from "../components/navbar";
import { SearchAnime } from "../queries/searchAnime";
import Card from "../components/card";
import { useTheme } from "../Themes";

const SearchPage = () => {
    const{ActiveTheme, setActiveTheme} = useTheme();    const [currPage, setcurrPage] = useState(1)
    const [Search, setSearch] = useState('')
    const{loading,error,data} = useQuery(SearchAnime,{
        variables:{
            page:currPage,
            perPage:12,
            search: Search
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
        <input onInput={()=>{
            setSearch(document.getElementById("searchbar").value)
            }} className="p-2 m-2 w-[95%]" type="text" id="searchbar" placeholder="Search"/>
        {loading && (
            <p style={{color: ActiveTheme.font}} className="text-center fixed top-[50%] left-[50%]">Loading...</p>
        )}
        {(!loading && Search!=='') &&  (
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
                        <button style={{backgroundColor: ActiveTheme.font}} onClick={prevPage} className="p-2 border border-black w-20 rounded-md bg-white hover:bg-gray-300 active: bg- gray-100">Prev</button>
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
 
export default SearchPage;