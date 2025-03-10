import { useEffect, useState } from "react"

import TreeDetails from "../components/TreeDetails"
import TreeForm from "../components/TreeForm"

const Home = () => {
    const [trees, setTrees] = useState(null)

    useEffect(() => {
        const fetchTrees = async () => {
            const response = await fetch("/api/trees")
            const json = await response.json()

            if (response.ok) {
                setTrees(json)
            }
        }

        fetchTrees()
    }, [])

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