import { useState } from "react"

const TreeForm = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const tree = {treenum, photonum, waypoint, species, height, hollowsmall, hollowmedium, hollowlarge, notes}

        const response = await fetch("/api/trees", {
            method: "POST",
            body: JSON.stringify(tree), 
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
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
            console.log("new workout added", json)
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
            />

            <label>Photo Number: </label>
            <input 
                type="text"
                onChange={(e) => setPhotonum(e.target.value)}
                value={photonum}
            />

            <label>Waypoint: </label>
            <input 
                type="text"
                onChange={(e) => setWaypoint(e.target.value)}
                value={waypoint}
            />

            <label>Species: </label>
            <input 
                type="text"
                onChange={(e) => setSpecies(e.target.value)}
                value={species}
            />

            <label>Height in (m): </label>
            <input 
                type="number"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
            />

            <label>Number of Small Hollows: </label>
            <input 
                type="number"
                onChange={(e) => setHollowsmall(e.target.value)}
                value={hollowsmall}
            />  

            <label>Number of Medium Hollows: </label>
            <input 
                type="number"
                onChange={(e) => setHollowmedium(e.target.value)}
                value={hollowmedium}
            />    

            <label>Number of Large Hollows: </label>
            <input 
                type="number"
                onChange={(e) => setHollowlarge(e.target.value)}
                value={hollowlarge}
            />

            <label>Additional Notes: </label>
            <input 
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />

            <button>Add Tree</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default TreeForm