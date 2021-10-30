const Button = ({ name, handleClick }) => {
    return (
        <div className="sound-board-btn">
            <button 
                className="btn" 
                name={name}
                onClick={handleClick}
            />
        </div>
    );
}

export default Button;