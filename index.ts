console.log("Kizoku oni naru othokoda");

const person: {
    ak : [number,string];
} = {
    ak : [1,"akhil"]
}



const body = document.querySelector("#show") as HTMLBodyElement;

const onAdd = () => {
    const a = document.querySelector("#num1") as HTMLInputElement;
    const b = document.querySelector("#num2") as HTMLInputElement;
    const c = +a.value + +b.value;
    const html = (c: number) => `<h1>${c}<h1>`;
    console.log(c);
    try{
    body.insertAdjacentHTML("beforeend",html(c));
    }catch(error){
        console.log("Nothing to woory");
        
    }
};
