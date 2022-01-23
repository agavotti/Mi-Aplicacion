
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
function Loading(props) {
    const {loading,children,configuration} = props
    const styles ={
      spinner:{
        position:"fixed",
        top:"50%",
        left:"50%"
      }
    }
    if(loading){
      return (
        <Spinner style={styles.spinner} animation={configuration?.animation || "border"} role="status" variant={configuration?.variant || "dark"}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }else{
      return(
        <>
          {children}
        </>
      )
    }
  
  
}

export default Loading;
