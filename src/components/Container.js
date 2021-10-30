import Button from "./Button";

const Container = ({ audioTracks }) => {

    console.log(audioTracks)
    return ( 
        <section className="btn-container">
            {audioTracks.map((trck, idx) => {
                return (
                    <Button
                        key={idx}
                        name={trck.name}
                        handleClick={trck.handleClick}
                    />
                )
            })}
        </section>
    );
}

export default Container;