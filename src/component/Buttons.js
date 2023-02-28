import {Button} from '@mui/material'

const Buttons = ({ text, onClickFunction, variant }) => {
  return (
    <Button variant={variant} onClick={onClickFunction}>{text}</Button>
  )
}

export default Buttons
