export const Subtitle = (props) => {    
    const { value } = props
    const style = "light";
    return (
        <h3 style={styles[style]}>{value}</h3>
    )
}

const styles = {
    light: {

    },
    dark: {

    }
}