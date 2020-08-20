function calculateBMR() {
    var gender = document.getElementById("gensel").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var activity = document.getElementById("actsel").value;
    var bmr ;
    var weight_loss ;
    var weight_gain ;
    var resp ;
    var activity_dict = {1 : 1.2,
                         2 : 1.375,
                         3 : 1.55,
                         4 : 1.725,
                         5 : 1.9}

    if (age == "" || weight == "" || height == "" || activity == "") {
        alert("Please complete all fields");
        return false;
    }

    if (gender == "m") {
        gender = "Male"
        bmr = Math.round((66.47 + (6.24 * weight) + (12.7 * height) - (6.755 * age))* activity_dict[activity]);
      } 

    else {
        gender = "Female"
        bmr = Math.round((655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age))* activity_dict[activity]);
    }

    if (isNaN(bmr)) {
        alert('Please check the parameters you have entered and try again');
        return false;
      }

    weight_loss = Math.round((bmr/100)*85)
    weight_gain = Math.round((bmr/100)*115)

    resp = `<h3>Your details:</h3>
    <p>Gender: ${gender}, Age: ${age}, Weight: ${weight}, Height: ${height}, Activity: ${activity}</p>
    <h3>Your results:</h3>
    <p>BMR with activity multiplication = ${bmr} calories</p>
    <p>BMR for weight loss: ${weight_loss} calories</p>
    <p>BMR for weight gain: ${weight_gain} calories</p><br>`;

    document.getElementById("results").innerHTML = resp;
}