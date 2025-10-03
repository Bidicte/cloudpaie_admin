import { Route, Routes } from "react-router-dom"
import {Header, Layout, Sidebar} from "../components"
import { LoginPage } from "../pages/LoginPage"

export const AllRoutes = () => {
    return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/header" element={<Header/>} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/layout" element={<Layout />} />
        </Routes>
    </div>
  )
}
