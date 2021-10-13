import React from 'react'
import './Pagination.css'
function Pagination(props) {
   
    let numberOfpages = [];

    for(let i=1; i <= Math.ceil(props.filteritem.length/props.itemsPerPage); i++){
        numberOfpages.push(i);
    }
    
    function chageDishes(page){
        props.setcurrentPage(page.target.id)
    }

  
    let pages = numberOfpages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={chageDishes}>{pageNumber}</li>
        )
    })

    return (
        <ul className="pagination">
            {pages}
        </ul>
    )
}

export default Pagination
