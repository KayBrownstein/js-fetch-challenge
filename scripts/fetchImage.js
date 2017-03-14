ready().then(() => {
  fetch('/images/logo.png')
  .then((response) => {
    return response.blob();
  })
  .then((myBlob) => {
    let mainDiv = document.getElementById('main');
    let objectURL = URL.createObjectURL(myBlob);
    let imageElement = document.createElement('img');
    imageElement.src = objectURL;
    mainDiv.appendChild(imageElement);

  });
});
