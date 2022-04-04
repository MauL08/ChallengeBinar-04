import axios from 'axios';
import { BASE_URL } from '../baseAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLoading } from './globalSlice';

axios.defaults.validateStatus = status => {
  return status < 500;
};

export const getAllBooks = createAsyncThunk(
  'books/allBooks',
  async (token, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`${BASE_URL}/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const getBooksByID = createAsyncThunk(
  'books/booksByID',
  async (credential, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`${BASE_URL}/books/${credential.id}`, {
        headers: {
          Authorization: `Bearer ${credential.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

const initialState = {
  booksData: {},
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getAllBooks.fulfilled]: (state, action) => {
      console.log('Get Books Success');
      return {
        ...state,
        booksData: action.payload,
      };
    },
    [getBooksByID.fulfilled]: action => {
      console.log('Get Books by ID Success');
      return {
        booksData: action.payload,
      };
    },
  },
});

export default booksSlice.reducer;
