import React from 'react';

function Admin({handleHomeClick}) {
  
  return (
    <React.Fragment>
      <button onClick={() => handleHomeClick()}>Go Home</button>
      <p>
        This is the admin page
      </p>
    </React.Fragment>
  )
}

export default Admin;