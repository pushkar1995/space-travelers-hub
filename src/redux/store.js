import { configureStore } from '@reduxjs/toolkit';
import rocketSliceReducer from './rocketSlice';
import missionSliceReducer from './missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSliceReducer,
    missions: missionSliceReducer,
  },
});

export default store;
