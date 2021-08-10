export default function ChatItem(props) {
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
      <p  >{props.name}</p>
      </div>
      <p  >{props.description}
      {!props.sent && < button id="reload" className="btn btn-danger" onClick={()=> props.resend(props.name, props.description)}>Send Again</button>}
      </p>
      </div>
     
    </div>
  );
}
