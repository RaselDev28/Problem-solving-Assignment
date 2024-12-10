let user= {
    name:"kolimuddin" ,
    birthYear:1999,
    siteName:"google"
}

function password(user){
    return `${capitalize(user.siteName)}#${user.name}@${user.birthYear}`;
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const result=password(user);
console.log(result);