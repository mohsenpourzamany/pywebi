import { configureStore } from "@reduxjs/toolkit";
import PostBlogReducer from "../features/postblag/PostBlogSlice";

export const Store = configureStore({
    reducer : {
        PostBlog : PostBlogReducer
    }
})

export type AppDispatch = typeof Store.dispatch;
export type rootState = ReturnType<typeof Store.getState>