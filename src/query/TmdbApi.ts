import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
  id: number 
  title: string
  vote_average: number
  release_date: string
  poster_path: string | null
}

export interface GetPostResponse {
  results: Post[]
  total_results: number
}
export interface GetPostResponseWithPages extends  GetPostResponse{
  pagesCount: number
}

export interface Movie {
  adult: boolean;
  budget: number;
  genres: {name: string }[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_countries: {name: string;}[];
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  spoken_languages: {name: string;}[];

}
export const API_KEY = 'd646fa29be86fd99c4ef9086a0d6ecee'
const sessionId = localStorage.getItem('session_id')
 
const transformWithPages = (response: GetPostResponse) => ({
    ...response, pagesCount: Math.ceil(response.total_results / 20) 
})

export const TmdbApi = createApi({
   reducerPath: 'tmdbApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
   endpoints: (builder) => ({

      getPosts: builder.query<GetPostResponseWithPages, {search:string, page:number}>({
         query: ({search,page}) => {

            if  ( search.trim() !== ''){
              return `/search/movie?api_key=${API_KEY}&language=ru-RU&query=${encodeURIComponent(search)}&page=${page}`;
            }
            else{
               return `/movie/popular?api_key=${API_KEY}&language=ru-RU&page=${page}`;   
            }
         },
         transformResponse: transformWithPages
      }),


      getPopular: builder.query<GetPostResponseWithPages, number>({
         query: (page) => `/movie/popular?api_key=${API_KEY}&language=ru-RU&page=${page}`,
         transformResponse: transformWithPages,
      }),

      getTopRatedMovies: builder.query<GetPostResponseWithPages, number>({
         query: (page) =>`movie/top_rated?api_key=${API_KEY}&language=ru-RU&page=${page}`,
         transformResponse: transformWithPages,
      }),

      getPostsById: builder.query<Movie, number>({
         query: (postId) => `/movie/${postId}?api_key=${API_KEY}&language=ru-RU`,
      }),

      getToken: builder.query<{request_token:string}, void>({
         query: () => `/authentication/token/new?api_key=${API_KEY}`,
      }),

      getUserInfo: builder.query<{ username:string,name:string, avatar: { tmdb: {avatar_path: string | null;} }}, void >({
      query: () => ({
            url: `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${sessionId}`,
         }),
      }),

    getSortedMovies: builder.query< GetPostResponseWithPages, { sortBy: string; page: number }>({
      query: ({ sortBy, page }) =>
        `discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=${sortBy}&page=${page}&vote_count.gte=100`,
      transformResponse: transformWithPages,
    }),


   }),
})
export const { useGetPostsQuery, 
               useGetPostsByIdQuery,
               useGetTopRatedMoviesQuery,
               useLazyGetTokenQuery,
               useGetUserInfoQuery,
               useGetSortedMoviesQuery,
            
            } = TmdbApi



           