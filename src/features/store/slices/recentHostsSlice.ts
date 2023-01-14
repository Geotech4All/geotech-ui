import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Maybe, UserType } from "@gql/codegen/graphql";
import { RootState } from "@store/config";

export type PossibleHostsList = Maybe<Array<Maybe<UserType>>>
const recentHostsSlice = createSlice({
  name: "recentHosts",
  initialState: {} as { hosts: PossibleHostsList },
  reducers: {
    setRecentHosts: (_, action: PayloadAction<PossibleHostsList>) => {
      const newState = {hosts: action.payload};
      return newState
    }
  }
});

export const { setRecentHosts } = recentHostsSlice.actions;
export default recentHostsSlice.reducer;

export const selectRecentHosts = (state: RootState) => state.recentHosts;
