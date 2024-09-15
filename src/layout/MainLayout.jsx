import { NavBar } from "../components/NavBar";
export const MainLayout = ({children}) => {
    return(
        <div>
            <NavBar/>
                {children}
            <div>footer</div>
        </div>
    )
}