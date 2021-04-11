// event listeners for button click

// Calculate event listener
document.querySelector(".calculate").addEventListener("click", function () {
  
  // hide output
  document.getElementById("km").style.display = "none";
  document.getElementById("calories").style.display = "none";

  // show loader
  document.querySelector(".loader").style.display = "block";
  setTimeout(STEPS_CONV, 2000);
});
// Clear event listener
document.querySelector(".clear").addEventListener("click", Clear)


// functions [ Calculate + Clear ]

// Calculate function (STEPS_CONV)
function STEPS_CONV() {
  // declaring steps variable
  const steps = document.getElementById('steps').value;

  // Conversion from steps to Km
  let index = (steps * 0.0008045).toFixed(2);
  // Conversion from Km to Calories burned
  let index1 = (index * 55).toFixed(2);
  // condition to check if steps field == 0 or not
  if (steps  != 0) {
    const km = document.getElementById("km");
    const calories = document.getElementById("calories");
  
    // console.log('Your STEPS_CONV is' + index)
    km.innerHTML = "KM walked 🏃‍♀️ = " + index + " Km";
    calories.innerHTML = "Calories burned 🔥 = " + index1 + " Cal";
  
    // Hide output and loader.
    document.getElementById("km").style.display = "block";
    document.getElementById("calories").style.display = "block";
    document.querySelector(".loader").style.display = "none";
    

  } else {
    // Error message
    // alert('Error!')
    error()
    function error() {
    document.getElementById("km").style.display = "block";
    document.getElementById("calories").style.display = "block";
    document.querySelector(".loader").style.display = "none";
    document.getElementById("km").innerHTML = "<span style='color:black;background-color:pink; border-radius:10px; padding: 3px;';>⚠️ Error: Enter Number of Steps first ! "
    // Settimeout method to hide the message after 5 seconds
      setTimeout(() => {
        document.getElementById("km").innerHTML = "";
        document.getElementById("calories").innerHTML = "";
      }, 5000);
    }
  }
}

// Clear function
function Clear() {
  document.getElementById('steps').value = "";
  document.getElementById('km').innerHTML = "";
  document.getElementById('calories').innerHTML = "";
}
