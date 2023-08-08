export const Paragraph = (props) => {
  const { text } = props;
  const style = "light";
  return <p style={styles[style]}>{text}</p>;
};

const styles = {
  light: {},
  dark: {},
};
