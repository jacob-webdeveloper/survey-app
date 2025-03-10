import { useState } from "react"
import { useTreesContext } from "../hooks/useTreesContext"

const TreeForm = () => {
    const  { dispatch } = useTreesContext()
    const [treenum, setTreenum] = useState("")
    const [photonum, setPhotonum] = useState("")
    const [waypoint, setWaypoint] = useState("")
    const [species, setSpecies] = useState("")
    const [height, setHeight] = useState("")
    const [hollowsmall, setHollowsmall] = useState("")
    const [hollowmedium, setHollowmedium] = useState("")
    const [hollowlarge, setHollowlarge] = useState("")
    const [notes, setNotes] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const tree = {treenum, photonum, waypoint, species, height, hollowsmall, hollowmedium, hollowlarge, notes}

        const response = await fetch(("/api/trees"), {
            method: "POST",
            body: JSON.stringify(tree), 
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTreenum("")
            setPhotonum("")
            setWaypoint("")
            setSpecies("")
            setHeight("")
            setHollowsmall("")
            setHollowmedium("")
            setHollowlarge("")
            setNotes("")
            setError(null)
            setEmptyFields([])
            console.log("new tree added", json)
            dispatch({type: "CREATE_TREE", payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Tree</h3>

            <label>Tree Number: </label>
            <input 
                type="number"
                onChange={(e) => setTreenum(e.target.value)}
                value={treenum}
                className={emptyFields.includes("treenum") ? "error" : ""}
            />

            <label>Photo Number: </label>
            <input 
                type="text"
                onChange={(e) => setPhotonum(e.target.value)}
                value={photonum}
                className={emptyFields.includes("photonum") ? "error" : ""}
            />

            <label>Waypoint: </label>
            <input 
                type="text"
                onChange={(e) => setWaypoint(e.target.value)}
                value={waypoint}
                className={emptyFields.includes("waypoint") ? "error" : ""}
            />

            <label>Species: </label>
            <input 
                type="text"
                onChange={(e) => setSpecies(e.target.value)}
                value={species}
                className={emptyFields.includes("species") ? "error" : ""}
            />

            <label>Height in (m): </label>
            <input 
                type="number"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                className={emptyFields.includes("height") ? "error" : ""}
            />

            <label>Number of Small Hollows: </label>
            <input 
                type="number"
                onChange={(e) => setHollowsmall(e.target.value)}
                value={hollowsmall}
                className={emptyFields.includes("hollowsmall") ? "error" : ""}
            />  

            <label>Number of Medium Hollows: </label>
            <input 
                type="number"
                onChange={(e) => setHollowmedium(e.target.value)}
                value={hollowmedium}
                className={emptyFields.includes("hollowmedium") ? "error" : ""}
            />    

            <label>Number of Large Hollows: </label>
            <input 
                type="number"
                onChange={(e) => setHollowlarge(e.target.value)}
                value={hollowlarge}
                className={emptyFields.includes("hollowlarge") ? "error" : ""}
            />

            <label>Additional Notes: </label>
            <input 
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
                className={emptyFields.includes("notes") ? "error" : ""}
            />

            <button>Add Tree</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default TreeForm