import { UserNode, Maybe } from "@gql/codegen/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

const userSlice = createSlice({
  name: "user",
  initialState: {} as Maybe<UserNode>,
  reducers: {
    setUser: (_, action: PayloadAction<Maybe<UserNode>>) => {
      const newState = action.payload;
      return newState;
    }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
