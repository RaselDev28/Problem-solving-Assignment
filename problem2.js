function checkName(name){
    if(typeof name === "string" && name.trim() !=""){
        if (name === name.toUpperCase()){
            return "Good Name";
        }
        else{
            return "Bad Name"
        }
    }
    else{
        return "Invalid";
    }
}
const input=444;
console.log(checkName(input));