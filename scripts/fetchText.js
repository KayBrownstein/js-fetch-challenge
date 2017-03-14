ready()
.then(() => {
  
  links_list = document.getElementsByTagName("a");

  for (let i = 0; i < links_list.length; i++) {
    links_list[i].addEventListener("click", function(event) {
      event.preventDefault();
      url = links_list[i].getAttribute("href");
      fetchText(url);
    });
  }
});

let fetchText = (url) => {fetch(`${url}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.text())
    .then(body => {
      textDiv = document.createElement("div");
      textDiv.innerHTML = body;
      document.getElementById("main").appendChild(textDiv);
    });
  };
