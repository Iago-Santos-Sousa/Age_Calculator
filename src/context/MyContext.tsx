import { createContext } from "react";
import MainType from "../types/myTypes";

const MyContext = createContext<MainType | undefined>(undefined);

export default MyContext;
