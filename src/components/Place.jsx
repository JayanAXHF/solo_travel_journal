import "./styles/Place.css";

const Place = (props) => {
  return (
    <div className="container">
      <div id="imgDiv">
        <img src={require(`./img/${props.img}.png`)} alt="" />
      </div>
      <div id="content">
        <p id="location">
          <i class="fa-solid fa-location-crosshairs"></i>
          &nbsp; {props.location}
          <span>
            <a href={props.gMaps} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </span>
        </p>
        <h1 id="title">{props.title}</h1>

        <p id="date">{props.date}</p>
        <p id="desc">{props.description}</p>
      </div>
      {/* <hr id="line" /> */}
    </div>
  );
};

export default Place;
