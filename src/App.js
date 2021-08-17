import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react"
import axios from "axios"
import Detail from "./Detail"
import ReactPaginate from "react-paginate"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [user,setUser]=useState([])
  const[currentPage,setCurrentPage]=useState(1)
  const[totalPage,setTotalPage]=useState(1)
  useEffect(()=>{getUser(currentPage)},[])
  const getUser=async(currentPage)=>{
    const response=await axios.get("https://reqres.in/api/users?page=" + currentPage)
    setUser(response.data.data)
    setCurrentPage(response.data.page)
    setTotalPage(response.data.total_pages)
    console.log(user)
  }
  const changePage=({selected})=>{
    const current= selected+1;
    
    
    
     getUser(current);
     
  }
  return (
    <div className="App">
     <Detail item={user}/>
     <ReactPaginate
     previousLabel={"Previous"}
     nextLabel={"Next"}
     pageCount={totalPage}
     onPageChange={changePage}
     containerClassName={"paginationBttns"}
     disabledClassName={"paginationDisabled"}
     activeClassName={"paginationActive"}
     />
    </div>
  );
}

export default App;
