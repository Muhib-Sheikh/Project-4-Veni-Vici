import { useState } from "react";
import "./App.css";
import APICatInfo from "../components/CatApi";
import BanList from "../components/BannedAttributes";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const catNames = [
    "Daisy",
    "Gracie",
    "Rosie",
    "Kiki",
    "Pumpkin",
    "Mocha",
    "Mittens",
    "Boo",
    "Momo",
    "Gizmo",
    "Boots",
    "Goose",
    "Remi",
    "Sunny",
    "Croqueta",
    "Nugget",
    "Tiptoe",
    "Cheeto",
    "Blu",
    "Peaches",
    "Oliver",
    "Leo",
    "Milo",
    "Charlie",
    "Max",
    "Simba",
    "Jack",
    "Loki",
    "Ollie",
    "Jasper",
    "Luna",
    "Bella",
    "Lily",
    "Lucy",
    "Nala",
    "Kitty",
    "Chloe",
    "Stella",
    "Zoe",
    "Lola",
    "Oreo",
    "Salem",
    "Bean",
    "Smokey",
    "Lucky",
    "Coco",
  ];

  const [currentCatName, setCurrentCatName] = useState(null);

  const [catValues, setCatValues] = useState({
    url: "",
    breed: "",
    origin: "",
    life_span: "",
    weight: "",
  });

  const [bannedAttributes, setBannedAttributes] = useState([]);

  const getRandCatName = () => {
    let randomCatNameIndex = Math.floor(Math.random() * catNames.length);

    setCurrentCatName(catNames[randomCatNameIndex]);
  };

  const getCatValues = async () => {
    let url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&has_breeds=${true}`;
    let response = await fetch(url);
    let [data] = await response.json();
    console.log(data);

    while (bannedAttributes.includes(data.breeds[0].name)) {
      response = await fetch(url);
      data = await response.json();
      console.log(data);
    }
    setCatValues({
      url: data.url,
      breed: data.breeds[0].name,
      origin: data.breeds[0].origin,
      life_span: data.breeds[0].life_span + " years",
      weight: data.breeds[0].weight.metric + " lbs",
    });
    getRandCatName();
  };

  const addToBannedList = (attribute) => {
    if (!bannedAttributes.includes(attribute)) {
      setBannedAttributes((bannedSoFar) => [...bannedSoFar, attribute]);
    }
  };

  const removeFromBannedList = (attribute) => {
    if (bannedAttributes.includes(attribute)) {
      setBannedAttributes(
        bannedAttributes.filter((item) => item !== attribute)
      );
    }
  };

  return (
    <div className="whole_app">
      <div className="cat_generator">
        <h1>Veni Vici!</h1>
        <h3>Discover cats from your wildest dreams! 😻😻😻😻😻</h3>
        <APICatInfo
          catValues={catValues}
          currentCatName={currentCatName}
          onSubmit={getCatValues}
          addToBannedList={addToBannedList}
        />
      </div>
      <div className="column_container">
        <BanList
          bannedAttributes={bannedAttributes}
          removeFromBannedList={removeFromBannedList}
        />
      </div>
    </div>
  );
}

export default App;
