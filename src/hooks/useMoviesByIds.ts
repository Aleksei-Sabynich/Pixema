import { useGetPostsByIdQuery } from "../query/TmdbApi";



export const useMoviesByIds = ( ids: number[]) => {

   const results = ids.map(id => useGetPostsByIdQuery(id));

  const isLoading = results.some(r => r.isLoading);
  const isError = results.some(r => r.isError);
  const data = results.map(r => r.data).filter(Boolean);

  return { data, isLoading, isError };
};
