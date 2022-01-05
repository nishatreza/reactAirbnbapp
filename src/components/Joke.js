export default function Joke(props) {
    // console.log(props)
    // console.log(props.isPun)
    // console.log(props.comments)



    return (

        // can use &&(and) and ternary operator from valilla js 
        <div>
            {/* {props.setup && <h3>Setup: {props.setup}</h3>} */}
            <h3 style={{ display: props.setup ? 'block' : 'none' }}>Setup: {props.setup}</h3>

            <p>PunchLine: {props.punchline}</p>
            {/* <h5>Upvotes number: {props.upvotes}</h5>
            <h5>Downvotes number: {props.downvotes}</h5> */}
            <hr />
        </div>
    )
}