document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("akan-form").addEventListener("submit", function(event){
         event.preventDefault()
         usersInput()
     })
})

function usersInput(){
    const birthdate = document.getElementsById("birthdate").value;
    const gender = document.getElementById("select").value;

    console.log(birthdate,gender)

    if(!birthdate || !gender){
        alert("Please fill out all details")
        return;
    }

    // array destructuring
    const [year, month, day] = birthdate.split("-").map(Number)
    console.log(year, month, day)

    if (day <= 0 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month <= 0 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }
}


