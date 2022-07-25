import { useQuery } from '@apollo/client';
import {useParams} from 'react-router-dom'
import Navbar from '../components/navbar';
import { getAnime } from '../queries/getAnime';
import {HeartIcon as HeartSolid} from '@heroicons/react/solid'
import {HeartIcon as HeartOutline} from '@heroicons/react/outline'
import { useEffect, useState } from 'react';
import { useTheme } from '../Themes';

const Detail = () => {
    const params = useParams();
    const id= params.animeid;
    const {ActiveTheme, setActiveTheme} = useTheme();

    const{loading,error,data} = useQuery(getAnime,{
        variables:{
            id:id
        }
    }); 

    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const [IsFav, setIsFav] = useState(false);

    const checkIfFavorite = () =>{
        let flag =false;
        console.log(data)
        console.log(favorites)
        if(data===undefined){
            setIsFav(false);
            return;
        }
        favorites.forEach((element)=>{
            if(element.Media.id === data.Media.id){
                flag=true;
            }
        })
        console.log("test");
        if(flag===true){
            setIsFav(true);
        }else{
            setIsFav(false);
        }
    }

    useEffect(()=>{
        if(favorites===null){
            return;
        }
        console.log("fav dong")
        checkIfFavorite();
        console.log(IsFav)
    },[favorites])

    const addToFav = () =>{
        var arr=[]
        if(favorites!== null){
            var arr = favorites;
        }
        arr.push(data);
        setIsFav(true);
        localStorage.setItem("favorites",JSON.stringify(arr));
    }

    const removeFromFav = () =>{
        var arr = favorites;
        let count=0;
        arr.forEach((element)=>{
            if(element.Media.id === data.Media.id){
                arr.splice(count,1);
            }
            count++;
        })
        setIsFav(false);
        localStorage.setItem("favorites",JSON.stringify(arr));
    }
    

   

    return (
        <div style={{backgroundColor: ActiveTheme.bg}} className="w-screen min-h-screen h-full">
            <Navbar></Navbar>
            {loading && (
                <p style={{color: ActiveTheme.font}} className="text-center absolute top-[50%] left-[40%]">Loading...</p>
            )}
            {!loading && (
                <div>
                    <div className='w-screen flex flex-row items-start justify-start space-x-5 p-8'>
                        <img className='w-28 rounded-md' src={data.Media.coverImage.large} alt="" />
                        <div className='flex flex-col'>
                            <p style={{color: ActiveTheme.font}} className='text-xl'>{data.Media.seasonYear}</p>
                            <p style={{color: ActiveTheme.font}} className='text-2xl'>{data.Media.title.romaji}</p>
                            {IsFav&&(
                                <HeartSolid style={{outlineColor: ActiveTheme.font}} onClick={removeFromFav} className='w-6 fill-red-700'></HeartSolid>
                            )}
                            {!IsFav && (
                                <HeartOutline onClick={addToFav} className='w-6'></HeartOutline>
                            )}
                        </div>
                    </div>
                    <div className='w-screen flex flex-col items-start justify-center space-y-2 pl-8'>
                        <p style={{color: ActiveTheme.font}} >Genres:</p >
                        <div className='grid grid-cols-3'>
                            {data.Media.genres.map((curr)=>{
                                return(
                                    <p style={{color: ActiveTheme.font}}  key={curr} className='text-xs mr-5'>{curr}</p>
                                )
                            })
                            }
                        </div>
                        <p style={{color: ActiveTheme.font}} >Description</p>
                        <p style={{color: ActiveTheme.font}}  className='text-xs pr-10 pb-5'>
                            {data.Media.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Detail;