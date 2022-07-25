import { gql } from "@apollo/client/core";

export const getAnime = gql`
query getAnime ($id:Int){
    Media(id:$id){
           id
      title{
        romaji
      }
      coverImage{
        large
      }
      description
      genres
      seasonYear
  }}`