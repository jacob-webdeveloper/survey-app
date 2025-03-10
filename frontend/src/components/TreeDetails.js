import { useTreesContext } from "../hooks/useTreesContext"

import formatDistanceToNow from "date-fns/formatDistanceToNow"

// const API_URL = process.env.REACT_APP_API_URL || "https://survey-app-mlwf.onrender.com/api/trees";

const TreeDetails = ({ tree }) => {
    const { dispatch } = useTreesContext()

    const handleClick = async () => {
        const response = await fetch(("/api/trees") + tree._id, {
            method: "DELETE"
        })
        
        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE_TREE", payload: json})
        }
    }

    return (
        <div className="tree-details">
            <h4><strong>Tree: </strong>{tree.treenum}</h4>
            <p>Tree Photo Number: {tree.photonum}</p>
            <p>Tree Waypoint: {tree.waypoint}</p>
            <p>Tree Species: {tree.species}</p>
            <p>Tree Height (m): {tree.height}</p>
            <p>Tree Hollows Small: {tree.hollowsmall}</p>
            <p>Tree Hollows Medium: {tree.hollowmedium}</p>
            <p>Tree Hollows Large: {tree.hollowlarge}</p>
            <p>{formatDistanceToNow(new Date(tree.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TreeDetails