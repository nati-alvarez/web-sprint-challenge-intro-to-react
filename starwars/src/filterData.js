export default function filterData(pokemon){
    let newObj = {};
    for (let prop in pokemon){
       if (prop === "name" || prop === "sprites" || prop === "types" || prop === "abilities" || prop === "weight" || prop === "height"){
           newObj[prop] = pokemon[prop];
       }
    }
    return newObj;
}