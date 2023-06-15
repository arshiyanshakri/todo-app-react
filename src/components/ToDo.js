

const ToDo = ({props , handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.id)
    }
    return(
        <div id={props.id} onClick={handleClick} className={props.complete ? 'strike':''}>
          {props.task}
        </div>
    )
}

export default ToDo