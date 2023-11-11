import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">To-Do</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_1280.png"
        alt=""
      />
    </div>
  );
};

export default Header;
