import { BrowserRouter, Navigate, Routes as Switch, Route } from "react-router-dom"
import { DashBoard } from "../pages"
import {Login} from "../pages"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" Component={DashBoard}></Route>

                <Route path="/entrar" Component={() => <Login></Login>}></Route>
            </Switch>
        </BrowserRouter>
    )
}