const express = require("express");
const cors = require("cors");
const { randomFill } = require("crypto");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const axios = require('axios');

app.get("http://localhost:4000/api/compliment/", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("http://localhost:4000/api/fortune/", (req, res) => {
  const fortune = ["A friend is a present you give yourself.", "A good time to finish up old tasks.", "A lifetime of happiness lies ahead of you.", "A person of words and not deeds is like a garden full of weeds.", "All your hard work will soon pay off.",
];

let randomIndex = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex];

res.status(200).send(randomFortune);

});

let body = {
  username: "",
  firstName: "",
  lastName: "",

}

app.post('/api/user', (req, res) => {
  console.log(req.body)
  let username = req.body.username
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  res.status(200).send(`You're the best, ${username}! Thanks for signing in ${firstName} ${lastName}.`)
})

app.delete("/api/user/", delete_password ) 
  .then((res) => { 
    console.log(res.data.message); 
    alert("UserDeleted!"); 
  }) 
    
    .catch((error) => { 
      alert(error.response.data.message);
  
  });


app.listen(4000, () => console.log("Server running on 4000"));
