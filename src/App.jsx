import { useEffect, useState } from 'react';
import './App.css';
import rand from './Functions/rand';

function App() {
  // Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.
  const [raudKv, setRaudKv] = useState([]);
  const [kiek, setKiek] = useState('');

  const inputKiek = (e) => {
    console.log(e.target.value);
    setKiek(e.target.value);
  };

  const addRaudKv = () => {
    for (let i = 0; i < kiek; i++) {
      setRaudKv((kv) => [...kv, rand(100, 200)]);
    }
  };

  const rem = () => {
    setRaudKv([]);
  };

  // Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.
  const [sarasas, setSarasas] = useState([]);
  const [vardas, setVardas] = useState([]);
  const [svoris, setSvoris] = useState([]);

  const inputVardas = (e) => {
    console.log(e.target.value);
    setVardas(e.target.value);
  };

  const inputSvoris = (e) => {
    console.log(e.target.value);
    setSvoris(e.target.value);
  };

  const addNewCat = () => {
    setSarasas((miau) => [...miau, [vardas, svoris]]);
  };

  sarasas.sort((a, b) => a[1] - b[1]);
  let bendrasSvoris = 0;
  for (let i = 0; i < sarasas.length; i++) {
    bendrasSvoris = bendrasSvoris + Number(sarasas[i][1]);
  }

  useEffect(() => {
    setSarasas(JSON.parse(localStorage.getItem('sarasas') ?? '[]'));
  }, []);

  useEffect(() => {
    if (null === sarasas) {
      return;
    }
    localStorage.setItem('sarasas', JSON.stringify(sarasas));
  }, [sarasas]);

  const remCats = () => {
    setSarasas([]);
  };

  // Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.

  const [pirmas, setPirmas] = useState(50);
  const [antras, setAntras] = useState(100);

  const inputPirmas = (e) => {
    setPirmas(e.target.value);
    setAntras(e.target.value * 2);
  };

  const inputAntras = (e) => {
    setAntras(e.target.value);
    setPirmas(e.target.value * 2);
  };

  // Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą.
  const [color, setColor] = useState('');
  const [fontSize, setFontSize] = useState('20');
  const [fontFamily, setFontFamily] = useState('');
  const [text, setText] = useState('');

  const inputText = (e) => {
    setText(e.target.value);
  };

  // Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.
  const [color1, setColor1] = useState('');
  const [kv, setKv] = useState([]);
  const [width, setWidth] = useState('50');
  const [height, setHeight] = useState('50');

  const addKv = () => {
    setKv((k) => [...k, kv]);
  };

  const inputColor1 = (e) => {
    setColor1(e.target.value);
  };

  const inputWidth = (e) => {
    setWidth(e.target.value);
  };

  const inputHeight = (e) => {
    setHeight(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React forms</h1>
        <fieldset>
          <legend>Raudoni kvadrateliai</legend>
          <input type="text" onChange={inputKiek} value={kiek}></input>
          <button onClick={addRaudKv}>spausk</button>
          <div className="flex">
            {raudKv.map((kv, i) => (
              <div className="red" key={i}>
                {kv}
              </div>
            ))}
          </div>
          <button onClick={rem}>is naujo</button>
        </fieldset>
        <fieldset>
          <legend>Katinukai</legend>
          <input
            type="text"
            placeholder="katinuko vardas"
            onChange={inputVardas}
            value={vardas}
          ></input>
          <input
            type="number"
            placeholder="katinuko svoris"
            onChange={inputSvoris}
            value={svoris}
          ></input>
          <button onClick={addNewCat}>Naujas katinas</button>
          <ul className="katinu-sarasas">
            {sarasas
              ? sarasas.map((cat, i) => (
                  <li className="cat" key={i}>
                    {cat[0]} sveria {cat[1]} kg
                  </li>
                ))
              : null}
          </ul>
          <p>Bendras katinu svoris: {bendrasSvoris} kg</p>
          <button onClick={remCats}>is naujo</button>
        </fieldset>
        <fieldset>
          <legend>Padvigubejimas</legend>
          <input type="text" onChange={inputPirmas} value={pirmas}></input>
          <input type="text" onChange={inputAntras} value={antras}></input>
        </fieldset>
        <fieldset>
          <legend>Selector</legend>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="coral">coral</option>
            <option value="crimson">crimson</option>
            <option value="hotpink">hotpink</option>
            <option value="darkviolet">darkviolet</option>
            <option value="royalblue">royalblue</option>
          </select>

          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="20">20px</option>
            <option value="30">30px</option>
            <option value="40">40px</option>
            <option value="50">50px</option>
            <option value="60">60px</option>
          </select>

          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            <option value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
              Franklin
            </option>
            <option value="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">
              Gill
            </option>
            <option value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
              Lucida
            </option>
            <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
              Segeo
            </option>
            <option value="'Times New Roman', Times, serif">Times</option>
          </select>

          <input type="text" onChange={inputText} value={text}></input>
          <div
            className="tekstas"
            style={{
              color: color,
              fontSize: Number(fontSize),
              fontFamily: fontFamily,
            }}
          >
            {text}
          </div>
        </fieldset>

        <fieldset>
          <legend>kvadratai</legend>
          <button onClick={addKv}>add new</button>
          <input
            className="spalvu-selektorius"
            type="color"
            value={color1}
            onChange={inputColor1}
          ></input>
          <input type="range" value={width} onChange={inputWidth}></input>
          <input type="range" value={height} onChange={inputHeight}></input>
          <div className="flex">
            {kv.map((_, i) => (
              <div
                className="kv"
                style={{
                  backgroundColor: color1,
                  width: Number(width),
                  height: Number(height),
                }}
                key={i}
              ></div>
            ))}
          </div>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
