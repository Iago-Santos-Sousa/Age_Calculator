import { createContext } from "react";

const MyContext = createContext<MainType | undefined>(undefined);

export default MyContext;
