import "./Input.css";

const Input = ({ type, placeholder, icon, value, onChange, onBlur }) => (
  <div className="Input-flex">
    <input
      className="Input-name"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {icon && <div className="Input-icon">{icon}</div>}
  </div>
);
export default Input;
