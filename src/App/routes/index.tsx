import { BrowserRouter, Navigate, Routes as Switch, Route } from "react-router-dom"
import { DashBoard } from "../pages"
import {Form} from "../pages"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" Component={DashBoard}></Route>

                <Route path="*" Component={() => <Form></Form>}></Route>
            </Switch>
        </BrowserRouter>
    )
}