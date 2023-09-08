import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionAsync = createAsyncThunk(
  'missions/fetchmissions',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissionAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissionAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
