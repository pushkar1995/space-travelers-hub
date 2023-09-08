import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

export const fetchMissionAsync = createAsyncThunk(
  'missions/fetchmissions',
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
