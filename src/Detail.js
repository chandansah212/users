import React  from "react";
const Detail =(props)=>{
    return(
        <div className="container content-center">
            <h1 className="text-center">Users</h1>
            {props.item.map(user=>(<div className="col-md-3">
                
                 <div className="card py-3 text-center"><img src={user.avatar} className="img-fluid mx-auto  w-100 " alt="user" /></div> 
                 
                <div className="card-body">
                    <h4>{user.first_name} {user.last_name}</h4>
                </div>
                <div className="card-body">
                     <h5>{user.email}</h5> 
                </div>
                
           </div> )) 
        }
        </div>
    )
}
export default Detail;