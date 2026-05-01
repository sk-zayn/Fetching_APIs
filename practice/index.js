const express = require ("express");
const jwt = require ("jsonwebtoken");
const jwtPassword = "123123";

const app = express();
app.use(express.json())

const all_users = [
  {
    username: "zain@gmail.com",
    password: "121212",
    name: "zain",
  },
  {
    username: "zaid@gmail.com",
    password: "123123123",
    name: "zaid",
  },
  {
    username: "zainab@gmail.com",
    password: "131313",
    name: "zainab",
  },
];

function userExist(username, password) {
  let userExist = false;
  for (let i = 0; i < all_users.length; i++){
    if(all_users[i].username == username && all_users[i].password == password){
      userExist = true
    };
  };
  return userExist
};

app.post("/signin",  function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  if(!userExist(username, password)){
    return res.status(403).json({
      msg: "invalid inputs"
    });
  };
  var token = jwt.sign({username: username}, password)
  return res.json({
    token,
  });
});

app.get('/',(req,res)=>{
  console.log(req);
  res.json({
    message:"dsdfsdf"
  })

})
app.get("/users", function(req, res){
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.usernam
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token"
    });
  };
});

userExist();

app.listen(3000,()=>{
  console.log("logdgf");

});
