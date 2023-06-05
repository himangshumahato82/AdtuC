const Button = ({ buttonText, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
export default Button;
