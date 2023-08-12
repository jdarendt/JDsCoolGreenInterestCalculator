document.getElementById("interestForm").addEventListener("submit", function(e) {
    e.preventDefault(); // This prevents the form from submitting traditionally and refreshing the page

    // Grabbing the values from our form inputs
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);

    // Calculating the interest
    let interest = (principal * rate * time) / 100;

    // Displaying the result
    document.getElementById("output").textContent = `Interest: $${interest.toFixed(2)}`;
});
