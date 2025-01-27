document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("akan-form").addEventListener("submit", function(event){
         event.preventDefault()
         usersInput()
     })
})

function usersInput(){
    const birthdate = document.getElementsById("birthdate").value;
    const gender = document.getElementById("select").value;
}
