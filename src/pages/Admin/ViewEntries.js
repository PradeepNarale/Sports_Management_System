import React from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';
import Carousel from 'fade-carousel'
import riverRafting from "../../images/riverRafting.jpg"
import cycle from "../../images/cycle.jpg"
function ViewEntries() {
  const navigate = useNavigate()
  const columns = [
    {
      name: <p className='columnTitle'>Tournament Name</p>,
      selector: 'title',
      sortable: true,
    },
    {
      name: <p className='columnTitle'>Winner</p>,
      selector: row => `${row.description || "notAvailable"}`,
    },
    {
      name: <p className='columnTitle'>Team Leader Name</p>,
      selector: row => `${row.uniqueStudentResponseCount > 1 ? row.uniqueStudentResponseCount + " students" : row.uniqueStudentResponseCount + " student"}`,
      sortable: true,
    },
    {
      name: <p className='columnTitle'>Team Leader Email</p>,
      selector: row => `${row.uniqueStudentResponseCount > 1 ? row.uniqueStudentResponseCount + " students" : row.uniqueStudentResponseCount + " student"}`,
      sortable: true,
    },
    {
      name: <p className='columnTitle'>Match Day</p>,
      selector: row => `${row.uniqueStudentResponseCount > 1 ? row.uniqueStudentResponseCount + " students" : row.uniqueStudentResponseCount + " student"}`,
      sortable: true,
    }
  ];
  return (
    <div>
      <div className='navbar'>
        <div className='leftLink'>
          <ul className='links'>
            <li onClick={()=>{
              navigate(`/certificate`)
            }}>Certificates</li>
            <li onClick={()=>{
              navigate(`/viewEntries`)
            }}>View Entries</li>
            <li onClick={()=>{
              navigate(`/certificate`)
            }}>Posts</li>
          </ul>
        </div>
        <div className='rightLink'>
          <ul className='links'>
            <li onClick={()=>{
              navigate(`/matches`)
            }}>Schedule Match</li>
            <li onClick={()=>{
              navigate(`/result`)
            }}>Results</li>
            <li onClick={()=>{
              navigate(`/certificate`)
            }}><a href="/register" className='redirectLink'>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className='carousel'>
        <Carousel divStyle={{ height: "100vh", width: "100%", backgroundColor: '#f2f2f2' }} delay={6000} mode={"fade"} >
          <div style={{ height: '100%', width: 'auto', justifySelf: 'center' }}>
            <img
              src={riverRafting}
              className="carouselImg"
              alt="carousel images"
            />
          </div>
          <div style={{ height: '100%', width: 'auto', justifySelf: 'center' }}>
            <img
              src={cycle}
              className="carouselImg"
              alt="carousel images"
            />
          </div>
        </Carousel>
      </div>
      <div className='dataTableDiv'>
        <DataTable
          className='dataTable'
          keyField={"_id"}
          title={<p className='tableTitle'>Total Entries</p>}
          subHeader={false}
          columns={columns}
          expandableRows={false}
          highlightOnHover={true}
          pointerOnHover={true}
          persistTableHead={true}
          selectableRowsHighlight={true}
          pagination={true}
          paginationPerPage={10}
        />
      </div>
    </div>
  )
}

export default ViewEntries