


const Sidebar = ({ stor }) =>{

    const statusCounts = {
      Work: 0,
      Family: 0,
      Private: 0,
      Friends: 0,
    }
  
    stor.forEach(contact => {
      statusCounts[contact.status] += 1
    })
    
    const totalContacts = stor.length
  
    return(
      <aside className="container border-end">
        <div className="row">
          <div className="col-12">
            <div>
              <h4 className="m-4 fs-3 fw-bold">
                All contacts<span className="ms-4">{totalContacts}</span>
              </h4>
            </div>
            <div className="list">
              <div className="m-3 d-flex justify-content-between">
                <h5 className="bg-primary p-2">Work</h5>
                <span>{statusCounts.Work}</span>
              </div>
              <div className="m-3 d-flex justify-content-between">
                <h5 className="bg-success p-2">Family</h5>
                <span>{statusCounts.Family}</span>
              </div>
              <div className="m-3 d-flex justify-content-between">
                <h5 className="bg-danger p-2">Private</h5>
                <span>{statusCounts.Private}</span>
              </div>
              <div className="m-3 d-flex justify-content-between">
                <h5 className="bg-warning p-2">Friends</h5>
                <span>{statusCounts.Friends}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
  
  export default Sidebar