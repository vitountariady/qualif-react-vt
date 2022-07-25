import Card from "../components/card";
import Navbar from "../components/navbar";
import { useTheme } from "../Themes";

const FavPage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const {ActiveTheme, setActiveTheme} = useTheme();

    return ( 
        <div style={{backgroundColor: ActiveTheme.bg}} className="w-screen min-h-screen h-full">
            <Navbar></Navbar>
            {(favorites === null) && (
                <p style={{color: ActiveTheme.font}} className="text-center fixed top-[50%] left-[50%]">Empty</p>
            )}
            {favorites!==null &&  (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 items-center justify-center m-3">
                        {favorites.map((curr)=>{
                        console.log(curr);
                        return(
                            <Card key ={curr.Media.id} anime = {curr.Media}></Card>
                        )
                        })}
                    </div>
                        <div className="w-[99%] flex flex-row justify-center space-x-5 items-center pb-5">
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default FavPage;