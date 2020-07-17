// Since the execution of this `app.js` script will be long finished by the time the following `fetch()` call returns data, we need to put our loop inside the second .then(). Check out this CSS Tricks article for the details about what's going on here. 
// https://css-tricks.com/using-fetch/
fetch('https://animals-heroku-atlas.herokuapp.com/api/animals')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    const imgList = data;

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgList.forEach(function(item){
      imgTemplate += 
        `<figure>
        <a href="${item.id}">
          <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
        </a>
        <figcaption>Hello ${item.title}!</figcaption>
        </figure>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;
});


