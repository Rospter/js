function proccess(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

let weight = prompt("لطفا وزن خود را وارد نمایید :");
let height = prompt("لطفا قد خود را وارد نمایید :");


let bmi = proccess(weight,height);



console.log("bmi شما برابر است با : "+ bmi.toFixed(2));

if(bmi < 18.5)
{
    console.log("شما کمبود وزن دارید");
}
else if (bmi >= 18.5 && bmi < 25)
{
    console.log("شما وزن نرمالی دارید");
}
else if (bmi >= 25 && bmi < 30)
{
    console.log("شما اضافه وزن دارید");
}
else
{
    console.log("تو یه چاق هستی");
}