import './StyleForm.css'

const ListDown = (props) => {
    return (
        <>
        <div className='big'>
        {props.Lists.map(item => (
        <div className={item.isCompelete ? 'todo' : 'todo-task'} key={item.key}>

          <div className="manage">

          <input type="text" value={item.text} />

          <i className="fa-solid fa-xmark"
          onClick={() => props.DeleteItem(item.key)} ></i>

          <i className="fa-solid fa-square-check"
          onClick={() => props.CompeleteCheck(item.key)} ></i>
          </div>
        </div>
        ))}
        </div>
        </>

    )
}

export default ListDown