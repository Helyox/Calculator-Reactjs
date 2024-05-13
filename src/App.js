import "./index.css";
import * as math from 'mathjs';


function Calculatrice() {

  const addToDisplay = (value) =>{
    let display = document.getElementById('DisplayID');

    const textContent = display.innerText;
    const dernierCaractere = textContent[textContent.length - 1];
    const operateurs = ['+', '-', '*', '/'];

    if (operateurs.includes(dernierCaractere) && operateurs.includes(value)){
      console.log("You can't")
    }
    else {
      display.innerText += value;
    }

    };

    const deleteL = () => {
      let display = document.getElementById('DisplayID');
      const textContent = display.innerText;
      const nouveauContenu = textContent.slice(0, -1);
      display.innerText = nouveauContenu;

    };

  const ClearDisplay = () =>{
    document.getElementById('DisplayID').innerText = '';
    document.getElementById('ResultID').innerHTML = '0';
  }
  
  const result = () => {
    try {
      const display = document.getElementById('DisplayID');
      const calculatedResult = math.evaluate(display.innerText);
      document.getElementById('ResultID').innerHTML = calculatedResult.toString();
    } catch (error) {
      document.getElementById('ResultID').innerHTML = "NaN";
    }
    
  }

  const negatif = () =>{
    const display = document.getElementById('DisplayID');
    display.innerText = '-' + display.innerText;
  }
  
  return (
    <div className="Calculator">
    <div className="Ecran">
      <p id="DisplayID" className="Display"></p>
      <p id="ResultID" className="Result">0</p>
    </div>
    <div className="calc">
    <input className="colone1 Orange" type="button" value="/"  onClick={() => addToDisplay('/')}></input>
    <input className="colone1 Orange" type="button" value="x"  onClick={() => addToDisplay('*')}></input>
    <input className="colone1 Orange" type="button" value="-"  onClick={() => addToDisplay('-')}></input>
    <input className="colone1 Orange" type="button" value="+"  onClick={() => addToDisplay('+')}></input>
    <input className="colone1 OrangeF raduis-right" type="button" value="="  onClick={result}></input>

    <input className="colone2 gris" type="button" value="%"  onClick={() => addToDisplay('%')}></input>
    <input className="colone2 chiffre" type="button" value="9"  onClick={() => addToDisplay('9')}></input>
    <input className="colone2 chiffre" type="button" value="6"  onClick={() => addToDisplay('6')}></input>
    <input className="colone2 chiffre" type="button" value="1"  onClick={() => addToDisplay('1')}></input>
    <input className="colone2 chiffre" type="button" value="←"  onClick={deleteL}></input>

    <input className="colone3 gris" type="button" value="+/-"  onClick={negatif}></input>
    <input className="colone3 chiffre" type="button" value="8"  onClick={() => addToDisplay('8')}></input>
    <input className="colone3 chiffre" type="button" value="5"  onClick={() => addToDisplay('5')}></input>
    <input className="colone3 chiffre" type="button" value="2"  onClick={() => addToDisplay('2')}></input>
    <input className="colone3 chiffre" type="button" value="."  onClick={() => addToDisplay('.')}></input>

    <input className="colone4 gris" type="button" value="C"  onClick={ClearDisplay}></input>
    <input className="colone4 chiffre" type="button" value="7"  onClick={() => addToDisplay('7')}></input>
    <input className="colone4 chiffre" type="button" value="4"  onClick={() => addToDisplay('4')}></input>
    <input className="colone4 chiffre" type="button" value="3"  onClick={() => addToDisplay('3')}></input>
    <input className="colone4 chiffre raduis-left" type="button" value="0"  onClick={() => addToDisplay('0')}></input>
    </div>
    </div>
  );
}

export default Calculatrice;
