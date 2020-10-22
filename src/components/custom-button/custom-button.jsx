import "./custom-button.styles.scss"

import React from "react";


const CustomButton = ({children, isGogleSignIn ,...otherProps}) => (
  <button 
  className={`custom-button ${isGogleSignIn? "google-sing-in":"" }`}
  type="submit"
  {...otherProps}>
    {children}
  </button>
)

export default CustomButton;