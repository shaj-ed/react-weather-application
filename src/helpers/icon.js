import clear from "./../assets/clear.png";
import hail from "./../assets/hail.png";
import heavyCloud from "./../assets/heavy-cloud.png";
import heavyRain from "./../assets/heavy-rain.png";
import lightRain from "./../assets/light-rain.png";
import lightCloud from "./../assets/light-cloud.png";
import shower from "./../assets/shower.png";
import sleet from "./../assets/sleet.png";
import snow from "./../assets/snow.png";
import thunderstorm from "./../assets/thunderstorm.png";

const imageIcon = (type, provided = null) => {
  let icon;

  switch (type) {
    case "Clear":
      icon = clear;
      break;
    case "Shower":
      icon = shower;
      break;
    case "Thunderstorm":
      icon = thunderstorm;
      break;
    case "Snow":
      icon = snow;
      break;
    case "Clouds":
      icon = lightCloud;
      break;
    case "Rain":
      icon = lightRain;
      break;
    default:
      icon = `https://openweathermap.org/img/wn/${provided}.png`;
      break;
  }

  return <img src={icon} alt="icon" />;
};

export default imageIcon;
