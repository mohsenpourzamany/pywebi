import { TypedUseSelectorHook , useDispatch ,useSelector } from 'react-redux';
import { RootState , AppDispatch } from './Store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState>=useSelector;