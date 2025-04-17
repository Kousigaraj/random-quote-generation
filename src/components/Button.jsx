import './button.css';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.content}</button>
  )
}

export default Button