function validate()
{
var username=document.getElementById("username").Value;
var password=document.getElementById("password").Value;
if(username=="admin"&& password=="user")
{
    alert("login successfully");
    return false;    
}
else
{
    alert("login failed");
}
}
// function makeaTea();
// console.log("step1=boiled water");
// console.log("step2=add milk");
// console.log("step3=put tea powder");
// console.log("step4=add sugar");
// makeaTea();