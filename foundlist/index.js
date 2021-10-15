// const sampleData = [
//   {
//     imageUrl:
//       "https://images.unsplash.com/photo-1521774971864-62e842046145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
//     title: "Blue Sneakers",
//     description:
//       "Found these sneakers outside of the wilk. They are blue and I think they're adidas",
//   },
//   {
//     imageUrl:
//       "https://images.unsplash.com/photo-1521774971864-62e842046145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
//     title: "Blue Sneakers",
//     description:
//       "Found these sneakers outside of the wilk. They are blue and I think they're adidas",
//   },
//   {
//     imageUrl:
//       "https://images.unsplash.com/photo-1521774971864-62e842046145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
//     title: "Blue Sneakers",
//     description:
//       "Found these sneakers outside of the wilk. They are blue and I think they're adidas",
//   },
// ];


  let temp = function(url) {
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
          console.log(json);
          let remainingHTML = "";

          remainingHTML += "<div class='card'><img src='" + json.fields.imgURL.stringValue
            + "' class='card-img-top' alt='...' style='height: 150px; object-fit: cover; width: 100%'/>"
          remainingHTML += "<div class='card-body'><h5 class='card-title'>" + json.fields.name.stringValue + "</h5>"
          remainingHTML += "<p class='card-text'>" + json.fields.description.stringValue + "</p>"
          remainingHTML += "<a href='#' class='btn btn-primary'>Claim</a></div></div>"

          let cardTemplate = document.createElement('div');
          cardTemplate.classList.add("p-2");
          cardTemplate.classList.add("col-12");
          cardTemplate.classList.add("col-sm-6");

          cardTemplate.innerHTML = remainingHTML;
          document.getElementById("cardTemplate").appendChild(cardTemplate);
            console.log(remainingHTML);
      });
  }
  
  temp("https://firestore.googleapis.com/v1/projects/lost-and-found-24934/databases/(default)/documents/lost/CaKMeHk4JUUiBzP3RGt0/entries/entry1");
  temp("https://firestore.googleapis.com/v1/projects/lost-and-found-24934/databases/(default)/documents/lost/CaKMeHk4JUUiBzP3RGt0/entries/entry2");
  temp("https://firestore.googleapis.com/v1/projects/lost-and-found-24934/databases/(default)/documents/lost/CaKMeHk4JUUiBzP3RGt0/entries/entry3");
  temp("https://firestore.googleapis.com/v1/projects/lost-and-found-24934/databases/(default)/documents/lost/CaKMeHk4JUUiBzP3RGt0/entries/entry4");
        
        




// // convert a card to a template
// // grab the template and box by id.



// // grab the box and clear it

// // append(card)

// //get from the firebase api the link

// // format it

// // convert to cards

// // append
// const clampedCards = (document.getElementById("clampedCards").innerHtml = null);
// const clampedCards = document.getElementById("clampedCards").append(cards);
