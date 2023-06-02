
let d=document.querySelector("#days");
let h=document.querySelector("#hours");
let m=document.querySelector("#min");
let s=document.querySelector("#sec");
let cd=()=>{
    let fd=new Date("13 dec 2024");
    let cd=new Date();
    let myd=fd-cd;

let ds=Math.floor(myd/1000/60/60/24);
let hrs=Math.floor(myd/1000/60/60)%24;
let min=Math.floor(myd/1000/60)%60;
let sec=Math.floor(myd/1000)%60;

d.innerHTML=ds;
h.innerHTML=hrs;
m.innerHTML=min;
s.innerHTML=sec;
}
cd()
setInterval(cd,1000)