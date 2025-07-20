import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, createPost, updatePost, deletePost } from './postAPI';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const res = await fetchPosts();
  return res.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const res = await createPost(post);
  return res.data;
});

export const editPost = createAsyncThunk('posts/editPost', async ({ id, data }) => {
  const res = await updatePost(id, data);
  return res.data;
});

export const removePost = createAsyncThunk('posts/removePost', async (id) => {
  await deletePost(id);
  return id;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  },
});

export default postSlice.reducer;
