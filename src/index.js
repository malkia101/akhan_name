document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("akan-form").addEventListener("submit", function (event) {
        event.preventDefault();
        usersInput();
    });
});

function usersInput() {
    const birthdate = document.getElementById("birthdate").value; 
    const gender = document.getElementById("gender").value;

    console.log(birthdate, gender);

    if (!birthdate || !gender) {
        alert("Please fill out all details");
        return;
    }

    // array destructuring
    const [year, month, day] = birthdate.split("-").map(Number);
    console.log(year, month, day);

    if (day <= 0 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month <= 0 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }

    determineAkanName(year, month, day, gender); 
}

function determineAkanName(year, month, day, gender) {
    console.log("From the determine Akan name function", year, month, day, gender);

    //  Extract century (CC) and year (YY)
    const CC = Math.floor(year / 100); // Century (first two digits of year)
    const YY = year % 100; // Year (last two digits)

    // formula to calculate the day of the week
    const d = Math.floor(
        ((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + Math.floor((26 * (month + 1)) / 10) + day) % 7
    );

    console.log("Day of the week:", d);

    // Akan names
    const akanNames = {
        male: [
            "Kwasi",   // Sunday
            "Kwadwo",  // Monday
            "Kwabena", // Tuesday
            "Kwaku",   // Wednesday
            "Yaw",     // Thursday
            "Kofi",    // Friday
            "Kwame"    // Saturday
        ],
        female: [
            "Akosua",  // Sunday
            "Adwoa",   // Monday
            "Abenaa",  // Tuesday
            "Akua",    // Wednesday
            "Yaa",     // Thursday
            "Afua",    // Friday
            "Ama"      // Saturday
        ]
    };

    let akanName = "";
    if (gender === "male") {
        akanName = akanNames.male[d];
    } else if (gender === "female") {
        akanName = akanNames.female[d];
    }

    // Display the result
    document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
}
