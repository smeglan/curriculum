import { Subtitle, Paragraph } from "../atoms";

export default Paragraph = (props) => {
  const { title, text } = props;
  return (
    <div>
      <Subtitle title={title}/>
      <Paragraph value={text}/>
    </div>
  );
};
