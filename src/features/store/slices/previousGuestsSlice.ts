import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe, GuestTypeConnection } from "@gql/codegen/graphql";
import { RootState } from "@store/config";

const previousGuestsSlice = createSlice({
  name: "previousGuests",
  initialState: {} as Maybe<GuestTypeConnection>,
  reducers: {
    setPreviousGuests: (_, action: PayloadAction<Maybe<GuestTypeConnection>>) => {
      const newState = action.payload;
      return newState;
    }
  }
});

export const { setPreviousGuests } = previousGuestsSlice.actions;
export default previousGuestsSlice.reducer;
export const selectPreviousGuests = (state: RootState) => state.previousGuests;
