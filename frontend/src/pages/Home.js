import { useEffect } from "react"
import { useTreesContext } from "../hooks/useTreesContext"

import TreeDetails from "../components/TreeDetails"
import TreeForm from "../components/TreeForm"

const Home = () => {
    const {trees, dispatch} = useTreesContext()

    useEffect(() => {
        const fetchTrees = async () => {
            const response = await fetch("/api/trees")
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_TREES", payload: json})
            }
        }

        fetchTrees()
    }, [dispatch])

    return (
        <div className="home">
            <div className="trees">
                {trees && trees.map((tree) => (
                    <TreeDetails tree={tree} key={tree._id} />
                ))}
            </div>
            <TreeForm />
        </div>
    )
}

export default Home