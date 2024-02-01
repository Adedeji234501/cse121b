/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* LESSON 3 - Programming Tasks */
/* Profile Object  */
let myProfile = {
  name: "Azeez Adedeji",
  photo: {
    src: "images/placeholder.jpg",
    alt: "Profile Picture"
  },
  favoriteFoods: ["Jollof Rice", "Yam", "Salad", "Pepper Soup", "Egusi Soup"],
  hobbies: ['Singing', 'Coding', "Soccer", ],
  placesLived: []
};
    
myProfile.placesLived.push(
  {

    place: 'Nairobi, Kenya',
    length: '3 year'
  }
);

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Ondo, Nigeria',
    length: '6 years'
  },
  {
    place: 'Lagos, Nigeria',
    length: '20 years'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');
  dt.textContent = place.place;
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});

