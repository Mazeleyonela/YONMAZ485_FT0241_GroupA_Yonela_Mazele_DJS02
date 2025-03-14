const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("[data-form]");
  const result = document.querySelector("[data-result]");

  // Initial state
  result.innerText = "NO calculation performed";

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const entries = new FormData(event.target);
      const { dividend, divider } = Object.fromEntries(entries);

  //Validation when values are missing
      if (!dividend || !divider) {
          result.innerText = "Division not performed. Both values are required in inputs. Try again";
          return;
      }
  //Providing anything that is not a number should crash the program 
      if (isNaN(dividend) || isNaN(divider)) {
          console.error("Critical error: Invalid input detected", new Error().stack);
          document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
          return;
      }
      
      const num1 = parseFloat(dividend);
      const num2 = parseFloat(divider);

//An invalid division should log an error in the console
      if (num2 === 0) {
          console.error("Division by zero error", new Error().stack);
          result.innerText = "Division not performed. Invalid number provided. Try again";
          return;
      }
      
      let output = num1 / num2;
      output = Number.isInteger(output) ? output : Math.floor(output);
      
      result.innerText = output;
  });
});

