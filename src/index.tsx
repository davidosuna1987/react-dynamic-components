import React from 'react'
import { getIcon } from './icons';
import StyledButton from './StyledButton'
import { ButtonProps } from './types';
import { getSizeProps, getVariantProps } from './utils';
import { Icon } from 'react-icons-kit'

 const ReactDynamicButtons: React.FC<ButtonProps> = ({ className, icon , iconPosition, text, size = "medium", styles = null, onClick, disabled = false, type, bgColor, textColor, variant = "primary" }) => {

  let _style: React.CSSProperties = {};

  if (size){
    _style = { ..._style, ...getSizeProps(size) }
  }

  if(variant) {
    _style = { ..._style, ...getVariantProps(variant) }
  }
 
   if(styles){
      _style = { ..._style, ...styles }
   }


  return (
    <StyledButton
    className={className}
    style={_style}  
    onClick={onClick} 
    type={type} 
    disabled={disabled} 
    bgColor={bgColor}
    textColor={textColor}
    >{icon && iconPosition === "left" && <Icon icon={getIcon(icon)}/>} {text} {icon && iconPosition === "right" && <Icon icon={getIcon(icon)}/>}
    </StyledButton>
  )
}

export default ReactDynamicButtons