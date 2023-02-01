const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const search_Btn = document.getElementById('search-btn');


document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

search_Btn.addEventListener('click', function () {
  const word = document.getElementById('inp-word').value;

  fetch(`${url}${word}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      result.innerHTML = `
                    <div class="word">
                             <h3>${word}</h3>
                           
                           
                         </div>
                         <div class="details">
                         <p>${data[0].meanings[0].partOfSpeech}</p>
                         <p>/${data[0].phonetic}/</p>
                         </div>
                         <p class="word-meaning">
                            ${data[0].meanings[0].definitions[0].definition}
                         </p>
                         <p class="word-example">
                             ${data[0].meanings[0].definitions[0].example || ""}
                         </p>`; })

    .catch(() => {
      if (!window.navigator.onLine) {
        result.innerHTML = `<h3 class="error">You are offline</h3>
            `;;
      }
      else {
        result.innerHTML = `<h3 class="error">Opps! Couldn't Find The Word</h3>`;
      }

    });


})


