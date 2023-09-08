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
  reducers: {
    joiningMission: (state, action) => {
      const id = action.payload;
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    },
  },
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

export const { joiningMission } = missionSlice.actions;
export default missionSlice.reducer;
