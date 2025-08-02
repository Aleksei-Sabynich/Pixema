import { configureStore } from '@reduxjs/toolkit'
import { TmdbApi } from '../query/TmdbApi'
import { useDispatch, useSelector } from 'react-redux'
import searchReducer from '../store/slices/searchSlice'
import paginationReducer from './slices/paginationSlice'
import isAuthorizedReducer from './slices/isAuthorizedSlice'
import userDropDownReducer from './slices/userDropDownSlice'
import favoritesMoveReducer from './slices/favoritesMoveSlice'
import themereducer from './slices/themeSlice'
import paramsSortReducer from './slices/paramsSort'

export const store = configureStore({
  reducer: {
    search : searchReducer,
    pagination : paginationReducer,
    isAuthorized: isAuthorizedReducer,
    userDropDown: userDropDownReducer,
    favoritesMove: favoritesMoveReducer,
    theme: themereducer,
    paramsSort:paramsSortReducer,
    [TmdbApi.reducerPath]: TmdbApi.reducer
   },
   middleware:(getDefaultMiddleware) => 
      getDefaultMiddleware().concat(TmdbApi.middleware)

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppState = typeof store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
