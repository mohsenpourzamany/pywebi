import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "web design",
      image: "img1",
      author: "John Doe",
      date: "01 jan, 2045",
      title2: "How to build a website",
      describ:
        "Dolor et eos labore stet justo sed est sed sed sed dolor stet amet",
    },
  ],
};
const PostBlogSlice = createSlice({
  name: "postBlog",
  initialState,
  reducers: {
    GetPost(state) {
      state.items;
    },
    AddingPost(state, action: PayloadAction) {
      state.items.concat;
      action.payload;
    },
  },
});

export const { GetPost, AddingPost } = PostBlogSlice.actions;
export default PostBlogSlice.reducer;
