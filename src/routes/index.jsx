import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import CardsPages from "../pages/CardsPages/CardsPages"
import CardsDetailsPages from "../pages/CardsDetailsPages/CardsDetailsPages"
import useCard from "../hooks/useCard/useCard"


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element:<CardsPages/>,
                loader: useCard
            },
            {
                path:"/cards/:cardId",
                element:<CardsDetailsPages/>
            }
        ]
    }
])
