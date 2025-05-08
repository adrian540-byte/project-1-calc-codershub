# 🧮 Calculator Project

A responsive and interactive calculator built using **HTML**, **CSS**, and **Vanilla JavaScript**. This app allows users to perform basic arithmetic operations with a clean UI.



## 📁 Project Structure

```
.
├── index.html       # Main HTML layout
├── style.css        # Styling for calculator UI
└── main.js          # Functionality and logic
```


## 🛠️ How It Works (Step-by-Step)

### 1. **HTML (index.html)**

* **Purpose**: Defines the structure of the calculator.
* **Core Components**:

  * `.calculator`: Main wrapper.
  * `#girilecekrakamid`: Displays the input expression.
  * `#sonucid`: Displays the evaluated result.
  * `.buttons`: Grid layout of calculator buttons (`0-9`, `+`, `-`, `×`, `÷`, `C`, `<-|`, `=`).
* **Event Binding**: Each button has an `onclick="buttonClicked(event)"` attribute that triggers the JS function.

### 2. **CSS (style.css)**

* **Purpose**: Enhances the visual appearance and responsiveness.
* **Key Styles**:

  * Centered layout using Flexbox.
  * Smooth hover/active transitions for buttons.
  * Grid layout for buttons using `grid-template-columns: repeat(4, 1fr)`.
  * Styled display areas with modern colors and rounded borders.

### 3. **JavaScript (main.js)**

* **Purpose**: Handles user interaction and performs calculations.

#### ✅ Core Function: `buttonClicked(event)`

* Maintains a string `girilenrakamlar` to store the current expression.
* **Button behavior**:

  * `0-9`, `+`, `-`, `×`, `÷`: Appended to the input string.
  * `=`: Evaluates the string using `eval()`, replacing `×` with `*` and `÷` with `/`.
  * `C`: Clears all inputs and results.
  * `<-|`: Removes the last character from the input string.
* Displays output in `#sonucid` and updates `#girilecekrakamid` in real time.
* Includes basic **error handling** using a `try-catch` block for invalid expressions.



## 💡 Features

* Responsive, clean UI with button feedback.
* Supports basic operations: addition, subtraction, multiplication, division.
* Backspace and clear functions.
* Inline evaluation with live expression display.
* Custom error display styling.



## 🚀 How to Run

1. Clone/download the project folder.
2. Open `index.html` in any modern web browser.
3. Interact with the calculator using your mouse or touch.



## 📷 Preview
![image](https://github.com/user-attachments/assets/439a98b5-6d8e-4136-9ed8-dcedcbd063d5)



## 🧠 Improvements & Ideas

* Add keyboard support.
* Improve input validation and parsing.
* Expand to scientific calculator features.
* Store previous calculation history.

## ✅ `index.html` – Structure of the Calculator

### \`\`\`html

<!DOCTYPE html>

<html lang="en">
```
- Declares the document as HTML5.
- `lang="en"` specifies English as the language.



### \`\`\`html
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
```
- `meta` tags ensure correct character encoding and responsive design.
- `title`: Sets the page title.
- `link`: Loads external `style.css` for layout and design.

---

### \`\`\`html
```
<body>
    <div class="calculator">
        <div id="girilecekrakamid" class="display"></div>
        <div id="sonucid" class="result"></div>
```
- `.calculator`: Container for all calculator content.
- `#girilecekrakamid`: Displays the numbers and operations as typed.
- `#sonucid`: Displays the result after evaluation.


### \`\`\`html
```
<div class="buttons">
    <button class="btn" onclick="buttonClicked(event)">1</button>
    ...
    <button class="btn" onclick="buttonClicked(event)">=</button>
</div>
```
- `.buttons`: A grid wrapper for all calculator buttons.
- Each `<button>`:
  - Has a label (number/operator).
  - Uses `onclick="buttonClicked(event)"` to trigger the calculation logic when clicked.

---

### \`\`\`html
```
<script src="main.js"></script>

</body>
</html>
```
- Loads the JavaScript file (`main.js`) that powers the calculator logic.

---

## ✅ `main.js` – Functional Logic

### \`\`\`js

let girilenrakamlar = "";

````
- A global variable that stores the string of numbers/operators typed by the user.

---

### ```js
function buttonClicked(event) {
````

* Main function that gets called every time a button is clicked.
* `event.currentTarget.innerText`: Gets the text of the clicked button.

---

### Handle Numbers and Operators

```js
if (event.currentTarget.innerText != "=") {
    girilenrakamlar += event.currentTarget.innerText;
    document.getElementById("girilecekrakamid").innerHTML = girilenrakamlar;
}
```

* Adds the clicked number/operator to the `girilenrakamlar` string.
* Updates the display (`#girilecekrakamid`) to show the current expression.

---

### Clear All

```js
if (event.currentTarget.innerText == "C") {
    girilenrakamlar = "";
    document.getElementById("girilecekrakamid").innerHTML = "";
    document.getElementById("sonucid").innerHTML = "";
}
```

* Resets all inputs and outputs when "C" is pressed.

---

### Backspace

```js
else if (event.currentTarget.innerText == "<-|") {
    girilenrakamlar = girilenrakamlar.slice(0, -1);
    document.getElementById("girilecekrakamid").innerHTML = girilenrakamlar;
    document.getElementById("sonucid").innerHTML = "";
}
```

* Removes the last character from the input string.
* Updates the display accordingly.

---

### Evaluate the Expression

```js
else if (event.currentTarget.innerText == "=") {
    try {
        document.getElementById("sonucid").innerHTML = eval(
            girilenrakamlar.replace(/×/g, "*").replace(/÷/g, "/")
        );
    } catch (err) {
        document.getElementById("sonucid").innerHTML = "ERROR";
        document.getElementById("girilecekrakamid").style.color = "#C2185B";
        document.getElementById("sonucid").style.color = "#C2185B";
    }
}
```

* **`eval()`**: Evaluates the string as JavaScript code. `×` and `÷` are replaced with `*` and `/` so JavaScript can interpret them.
* **`try-catch`**: Ensures that if there's a syntax error (like `5++`), an error message is shown instead of crashing.

---

## 💡 Why This Structure?

| Feature                             | Why It's Used                                                                      |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| `eval()`                            | Easy way to evaluate math expressions (used carefully in controlled environments). |
| `onclick`                           | Direct and simple for binding button actions.                                      |
| IDs (`girilecekrakamid`, `sonucid`) | Direct DOM manipulation using `getElementById` for performance and clarity.        |
| `innerHTML`                         | To update calculator displays dynamically.                                         |
| `slice()`                           | Efficient way to implement a backspace function.                                   |
