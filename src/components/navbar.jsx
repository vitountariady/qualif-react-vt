import { Link } from "react-router-dom";
import { themes, useTheme } from "../Themes";

const Navbar = () => {
    const {ActiveTheme, setActiveTheme} = useTheme();

    const ChangetTheme = () =>{
        if(ActiveTheme === themes.dark){
            setActiveTheme(themes.light);
        }else if(ActiveTheme === themes.light){
            setActiveTheme(themes.dark);
        }
    }

    return ( 
        <div>
            <div className="flex flex-col w-full h-16 bg-black items-center p-3">
                <p className="text-white text-4xl">AnimeList</p>
            </div>
            <div className="flex flex-row items-center w-full">
                <button className="bg-black hover:bg-gray-900 active:bg-gray-800 text-white flex items-center justify-center w-[25%] h-10 text-xs p-2" onClick={ChangetTheme}>Change Theme</button>
                <Link to={'/'} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800">Home</Link>
                <Link to={'/search'} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800">Search</Link>
                <Link to={'/favorite'} className="text-center pt-2 w-[25%] h-10 text-white bg-black hover:bg-gray-900 active:bg-gray-800">Favorite</Link>
            </div>
        </div>
    );
}
 
export default Navbar;