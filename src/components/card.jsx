import { Link } from "react-router-dom"

const Card = (parameter) => {
    const imgURL = parameter.anime.coverImage.large
    const animeTitle = parameter.anime.title.romaji
    return (
        <Link className="flex flex-col bg-slate-500 w-32 min-h-[16rem] rounded-md m-3 items-center" to={'/detail/'+parameter.anime.id}>
            <img src={imgURL} className="w-32 h-44 rounded-md"/>
            <div className="w-32 h-fit flex flex-col justify-center items-center">
                <p className="text-white text-xs text-center p-2 text-ellipsis">{animeTitle}</p>
            </div>
        </Link>
    );
}
 
export default Card;