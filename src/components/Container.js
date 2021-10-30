import Button from "./Button";

const Container = ({ audioTracks }) => {

    console.log(audioTracks)
    return ( 
        <section>
            {audioTracks.map(trck => {
                return (
                    <Button 
                        name={trck.name}
                        handleClick={trck.handleClick}
                    />
                )
            })}
        </section>
    );
}

export default Container;