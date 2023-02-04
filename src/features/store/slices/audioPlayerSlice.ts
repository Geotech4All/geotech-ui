import { AudioPlayer } from "@components/common";
import { PodcastColorType } from "@constants/podcastColors";
import { Maybe, PodcastType } from "@gql/codegen/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

export interface AudioPlayer {
  playerVissible: boolean;
  isPlaying: boolean;
  podcast?: Maybe<PodcastType>;
  color?: PodcastColorType;
}


const initialState: AudioPlayer = {
  playerVissible: false,
  isPlaying: false,
  podcast: {} as Maybe<PodcastType>
}
const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setPlayer: (_, action: PayloadAction<AudioPlayer>) => {
      const newState = action.payload;
      return newState;
    },
    setVissible: (state, action: PayloadAction<boolean>) => {
      const newState: AudioPlayer = {...state, playerVissible: action.payload};
      return newState;
    }
  }
})

export const { setPlayer, setVissible } = audioPlayerSlice.actions;
export default audioPlayerSlice.reducer;

export const selectAudioPlayer = (state: RootState) => state.audioPlayer;
