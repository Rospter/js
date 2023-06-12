let value = Number(prompt("لطفا بازه مورد نظر را وارد نمایید : "));




let a = 0,b = 1,c;


console.log("اولین عضو فیبوناچی : " + a);


if(value > 1){
    console.log("دومین عضو فیبوناچی : " + b);
}


for(let i = 2; i < value; i++)
{
    c = a + b;
    console.log("نتیجه : " + c);
    a = b;
    b = c;
}
