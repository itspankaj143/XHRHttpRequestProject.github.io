const image = document.querySelector("img");
const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       image.src = data.message;
//     });
// });

button.addEventListener("click", () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       image.src = json.message;
  //     });

  const xhr = new XMLHttpRequest();

  console.log(xhr);

  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    image.src = xhr.response.message;
    console.log(xhr);
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
