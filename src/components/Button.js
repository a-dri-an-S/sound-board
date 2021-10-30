const Button = ({ name, handleClick }) => {
    return (
        <div className="sound-board-btns">
            <button 
                className="btn" 
                name={name}
                onClick={handleClick}
            />
        </div>
    );
}

export default Button;