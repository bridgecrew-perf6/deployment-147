import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: uuidv4(),
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

export const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengers: initialValue,
  },
  reducers: {
    hapusPengunjung: (state, action) => {
      state.passengers = state.passengers.filter((item) => {
        console.log("item", item);

        return item.id !== action.payload;
      });
    },
    tambahPengunjung: (state, action) => {
      const newData = {
        id: uuidv4(),

        ...action.payload,
      };
      state.passengers = [...state.passengers, newData];
    },
  },
});

export const { hapusPengunjung, tambahPengunjung, incrementByAmount } =
  passengerSlice.actions;
export default passengerSlice.reducer;
