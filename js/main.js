// opdracht 1a

const jsonperson = `
{
    "firstname": "Judeska",
    "email": "Judeska@example.com"
}
`;

const objectPerson = JSON.parse(jsonperson);

console.log("Voornaam is :", objectPerson.firstname);
console.log("email is:", objectPerson.email);

// opdracht 1b
const profile = `{
    "id": 1,
    "firstname": "joe",
    "lastname": "mama",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
  }
  `;

const objectProfile = JSON.parse(profile);

console.log("id :", objectProfile.id);
console.log("first name :", objectProfile.firstname);
console.log("last name:", objectProfile.lastname);

// opdracht 2
const Jason = `{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }
  `;

const objectJason = JSON.parse(Jason);

console.log(objectJason.title);
console.log(objectJason.content);
console.log(objectJason.publishedAt);

// opdracht 3
const fullProfile = `{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }`;

const fullProfileObject = JSON.parse(fullProfile);

console.log(fullProfileObject.email);
console.log(fullProfileObject.address.city);
console.log(fullProfileObject.company);

// opdracht 4

const opdracht4 = `{
  "id": 11,
  "postId": 3,
  "userId": 2,
  "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
}`;
const opdracht4json = JSON.parse(opdracht4);

console.log(opdracht4json);
// opdracht 5

const jsonString = `[
  {
    "id": 1,
    "postId": 1,
    "userId": 1,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "id": 2,
    "postId": 1,
    "userId": 1,
    "comment": "Nulla quis libero vel orci rutrum suscipit."
  },
  {
    "id": 3,
    "postId": 3,
    "userId": 2,
    "comment": "Cras ac elit sit amet mi placerat bibendum."
  }
]`;

// JSON naar JS object
const jsonArray = JSON.parse(jsonString);

// Toon de 'comment' van elk object in console.log()
console.log(jsonString.comment);

// opdravht 6

const pdr6 = `[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  }
]`;

const opdr6json = JSON.parse(pdr6);

const photoList = document.querySelector(".photolist");

opdr6json.forEach((obj) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="${obj.url}">${obj.title}</a>`;
  photoList.appendChild(listItem);
});

// opdracht 7

const data = {
  name: "John",
  age: 20,
  marks: {
    science: 70,
    math: 75,
  },
};

const jsonData = JSON.stringify(data);

console.log(jsonData);

// opdracht 7

const final = `[
	{ 
		name: 'Wolverine', 
		age: 38,
		marks: {
			science: 20,
			math: 15
		}
	},
	{ 
		name: 'Xavier', 
		age: 64,
		marks: {
			science: 95,
			math: 90
		}
	},
	{ 
		name: 'Magneto', 
		age: 68,
		marks: {
			science: 90,
			math: 85
		}
	}
]`;

const jsonfinal = JSON.parse(final);


console.log(jsonfinal);


