export const NameTag = (props) => {    
    const { value } = props;
    const style = "light";
    return (
        <h1 style={styles[style]}>{value}</h1>
    )
}

const styles = {
    light: {

    },
    dark: {

    }
}