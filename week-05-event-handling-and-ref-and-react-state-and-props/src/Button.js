const Button = (props) => {
    const { text, onClick } = props;
    return (
        <div className="my-button" onClick={onClick}>{text}</div>
    )
}

export default Button;