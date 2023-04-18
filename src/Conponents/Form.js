import './StyleForm.css'

const Form = (props) => {
    return (
        <div>
            <div className="main">
                 <form onSubmit={props.AddItem}>
                     <input type="text" value={props.Lists.text || ''}
                     onChange={props.Handle} />
                     <button type="submit">
                         <i className="fa-solid fa-plus-minus"></i>
                         </button>
                 </form>
            </div>
        </div>
    )
}

export default Form