import { configureStore } from "@reduxjs/toolkit";
import reducers from "./features/manageBag";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        reducers
    },
});

export const useAppSelector = useSelector;
