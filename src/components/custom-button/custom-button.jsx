import "./custom-button.styles.scss"

import React from "react";


const CustomButton = ({children, isGogleSignIn,inverted,...otherProps}) => (
  <button 
  className={`custom-button 
    ${inverted ? "inverted" : ""} 
    ${isGogleSignIn ? "google-sing-in":"" }`}
  type="submit"
  {...otherProps}>
    {children}
  </button>
)

export default CustomButton;