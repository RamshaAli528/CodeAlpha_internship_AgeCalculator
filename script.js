let calculate = document.getElementById("calculate");
let age = document.getElementById("age");
const dateToday = new Date();
console.log(dateToday);

calculate.addEventListener('click',function () {
    let birth_date = document.getElementById("birth_date").value;
    birth_date = new Date(birth_date);
   Age = Date.now() - birth_date.getTime();
   ageYear = new Date(Age);
   ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

   function ageMonth() {
   if (dateToday.getMonth() >= birth_date.getMonth() ) {
      
      if (dateToday.getDate() >= birth_date.getDate()) {
         return dateToday.getMonth() - birth_date.getMonth() ;
      }else{
         if ((dateToday.getMonth() -1 )>= birth_date.getMonth() ){
            return(dateToday.getMonth() -1 ) - birth_date.getMonth() ;
         }else{
            return((dateToday.getMonth() -1 ) +12)- birth_date.getMonth() ;
         }
            
         
      }
      
   }}
   age.innerHTML = `Your Age is `+ ageYear +` years `+ ageMonth()+" Months";

})