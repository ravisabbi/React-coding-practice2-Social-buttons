const Button = (props) => {
  //  Write your code here.
  const { className, btnText } = props;
  return <button className={`button ${className}`}>{btnText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button className="likeBtn" btnText="Like" />
      <Button className="commentBtn" btnText="Comment" />
      <Button className="shareBtn" btnText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
