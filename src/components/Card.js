import img from "./img.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
export function Card() {
    let CardWrapper = `
    <div>
    
        <h1 class="title textCenter">Webpack Config</h1>
        <p class="textCenter">This is page only config :) </p>
       <div class="imgWrapper">
       <img src="${img}"/>
       <div/>
     
    </div>
    `
    return CardWrapper
}