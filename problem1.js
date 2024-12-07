const ticketPrice=120;
const caretakerBill=500;
const lunchBill=400;

function calculateMoney(ticket){
    let remainingMoney=0;

    if(ticket>0){
        remainingMoney=(ticket*ticketPrice)-(caretakerBill+lunchBill);
        return remainingMoney;
    }
    else{
        return "Plese Enter a Positive Value!";
    }
}

const ticketQuantity=15;
const calculate=calculateMoney(ticketQuantity);
console.log(calculate);
