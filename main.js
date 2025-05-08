let girilenrakamlar = "";

function buttonClicked(event) {
    // Add pressed button's text to input display
    if (event.currentTarget.innerText != "=") {
        girilenrakamlar += event.currentTarget.innerText;
        document.getElementById("girilecekrakamid").innerHTML = girilenrakamlar;
    }

    // Clear all inputs and results
    if (event.currentTarget.innerText == "C") {
        girilenrakamlar = "";
        document.getElementById("girilecekrakamid").innerHTML = "";
        document.getElementById("sonucid").innerHTML = "";
    }

    // Remove last entered character
    else if (event.currentTarget.innerText == "<-|") {
        girilenrakamlar = girilenrakamlar.slice(0, -1);
        document.getElementById("girilecekrakamid").innerHTML = girilenrakamlar;
        document.getElementById("sonucid").innerHTML = "";
    }

    // Evaluate the mathematical expression
    else if (event.currentTarget.innerText == "=") {
        try {
            // Replace × and ÷ with JavaScript-compatible operators
            document.getElementById("sonucid").innerHTML = eval(girilenrakamlar.replace(/×/g, "*").replace(/÷/g, "/"));
        } catch (err) {
            // Display error if evaluation fails
            document.getElementById("sonucid").innerHTML = "ERROR";
            document.getElementById("girilecekrakamid").style.color = "#C2185B"; // Error color
            document.getElementById("sonucid").style.color = "#C2185B"; // Error color
        }
    }
}
