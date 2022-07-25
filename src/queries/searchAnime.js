import { gql } from "@apollo/client/core";

export const SearchAnime = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media (id: $id, search: $search, type: ANIME) {
            id
            seasonYear
            genres
            duration
            averageScore
            title{
                romaji
            }
            coverImage{
                large
            }
        }
        }
    }
`