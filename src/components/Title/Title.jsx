import "./Title.css";

const Title = (props) => {
  return (
    <div className="title text-center mb-5 pb-4">
      <h3 className="display-4 text-uppercase position-relative mx-auto">
        {props.title}
      </h3>
    </div>
  );
};
export default Title;
