import "./Button.css";

const Button = ({ buttonText, className, icon, onClick }) => (
  <button className={className} onClick={onClick}>
    {icon && <div className="Button-icon">{icon}</div>}
    {buttonText}
  </button>
);
export default Button;
