document.querySelector(".get-jokes").addEventListener("click", getJokes);




function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    let output = "";
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);


      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`
        })
      } else {
        output += `<li>${response.type} - something went wrong<li>`;
      }
    }
    document.querySelector(".jokes").innerHTML = output;
  }
  xhr.send();
  e.preventDefault();
}