export default function ChatItem(props) {
  const user = localStorage.getItem("name");
  console.log(user)
  return (
    <div className="row" >
       <div className="col">
      <button
        onClick={()=> props.remove(props.id)}
        id="btn-delete"
        type="submit"
        className="btn btn-warning"
      >
        <i className="fas fa-minus"></i>
      </button>
      </div>
      <div className="col-2" id="container-item" >
      <div id="user-text">
      {/* <p  >{user}</p> */}
      </div>
      <p  >{props.description}</p>

      </div>
     
    </div>
  );
}
