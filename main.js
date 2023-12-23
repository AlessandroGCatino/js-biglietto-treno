const pricePerKm = 0.21;
const minorsSale = 0.2;
const oldSale = 0.4;

function generaBiglietto(){
    let clientKm = document.getElementById("nKm").value;
    let clientAge = document.getElementById("age").value;
    let ticketCost = (clientKm * pricePerKm).toFixed(2);
    console.log(ticketCost);

    switch(true){
        case clientAge<=18:
            ticketCost= (ticketCost-(ticketCost*0.2)).toFixed(2);
            document.getElementById("results").innerHTML=`
            <h1>€${ticketCost}</h1>
            <h5 style="color:red;">É stato applicato uno sconto del 20% in quanto minorenne</h5>
            `;
            break;

        case clientAge>=65:
            ticketCost= (ticketCost-(ticketCost*0.4)).toFixed(2);
            document.getElementById("results").innerHTML=`
            <h1>€${ticketCost}</h1>
            <h5 style="color:red;">É stato applicato uno sconto del 40% in quanto OVER65</h5>
            `;
            break;

        default:
            document.getElementById("results").innerHTML=`<h1>€${ticketCost}</h1>`;
    }
    // if(clientAge <= 18){
    // } else if (clientAge >= 65){
    // }    
}