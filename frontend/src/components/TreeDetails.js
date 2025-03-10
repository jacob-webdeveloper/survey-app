import { useTreesContext } from "../hooks/useTreesContext"

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const TreeDetails = ({ tree }) => {
    const { dispatch } = useTreesContext()
    const handleClick = async () => {
        const response = await fetch("/api/trees/" + tree._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE_workout", payload: json})
        }
    }

    return (
        <div className="tree-details">
            <h4><strong>Tree No.: </strong>{tree.treenum}</h4>
            <p>Tree Photo No.: {tree.photonum}</p>
            <p>Tree Waypoint: {tree.waypoint}</p>
            <p><strong>Tree Species: </strong>{tree.species}</p>
            <p><strong>Tree Height (m): </strong>{tree.height}</p>
            <p>Tree Hollows Small: {tree.hollowsmall}</p>
            <p>Tree Hollows Medium: {tree.hollowmedium}</p>
            <p>Tree Hollows Large: {tree.hollowlarge}</p>
            <p>{formatDistanceToNow(new Date(tree.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TreeDetails