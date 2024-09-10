import { Navbar } from "../components/NavBar/Navbar"

export const MainLayout = ({children}) => {
    return(
        <div>
            <Navbar/>
                {children}
            <div>footer</div>
        </div>
    )
}