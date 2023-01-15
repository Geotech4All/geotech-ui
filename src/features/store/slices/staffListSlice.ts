import type { Maybe, StaffType } from "@gql/codegen/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

const staffListSlice = createSlice({
  name: "staffList",
  initialState: [] as Maybe<StaffType>[],
  reducers: {
    setStaffList: (_, action: PayloadAction<Maybe<StaffType>[]>) =>{
      const newState = action.payload;
      return newState;
    }
  }
})

export const { setStaffList } = staffListSlice.actions;
export default staffListSlice.reducer;
export const selectStaffList = (state:RootState) => state.staffList;
