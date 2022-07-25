import { gql } from "@apollo/client/core";

export const ALL_ANIME = gql`
query AllAnime($page:Int, $perpage:Int){
  Page(page:$page, perPage: $perpage){
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
      }
     media(type:ANIME,sort:TRENDING_DESC){
      id
      title{
        romaji
      }
      coverImage{
        large
      }
    description
    genres
    }
  }
}
`