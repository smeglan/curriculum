export const Title = (props) => {    
    const { message } = props;
    const style = "light";
    return (
        <h2 style={styles[style]}>{message}</h2>
    )
}

const styles = {
    light: {

    },
    dark: {

    }
}