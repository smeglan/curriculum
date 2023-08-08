export const Label = (props) => {
    const { value, url=null } = props;
    console.log(url, value)
    return (
        <label><a href={url}>{value}</a></label>
    );
};
const style = {
    color: "white",
    size: 16
}