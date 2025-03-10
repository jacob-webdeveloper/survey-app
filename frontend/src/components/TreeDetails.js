const TreeDetails = ({ tree }) => {

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
            <p>{tree.createdAt}</p>
        </div>
    )
}

export default TreeDetails