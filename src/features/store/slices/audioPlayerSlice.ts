import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

export interface AudioPlayer {
  playerVissible: boolean;
  isPlaying: boolean;
  src: string;
}

const initialState: AudioPlayer = {
  playerVissible: false,
  isPlaying: false,
  src: "",
}
const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setPlayer: (_, action: PayloadAction<AudioPlayer>) => {
      const newState = action.payload;
      return newState;
    }
  }
})

export const { setPlayer } = audioPlayerSlice.actions;
export default audioPlayerSlice.reducer;

export const selectAudioPlayer = (state: RootState) => state.audioPlayer;
