import React from 'react';

function Footer(props) {
  const onAdminClick = () => {
    props.handleAdminClick(); 
  }
  return (
    <React.Fragment>      
      <button onClick={onAdminClick}>Administrator</button>      
    </React.Fragment>
  )
}

export default Footer;