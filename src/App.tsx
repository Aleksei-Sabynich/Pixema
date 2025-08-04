
import { useAppSelector } from "./store/store"
import { AppRoutes } from "./routes/AppRoutes"
import { useEffect } from "react";



function App() {

  const themeColor = useAppSelector(state => state.theme.mode);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(themeColor);
  }, [themeColor]);

 return  <AppRoutes/>

}

export default App

