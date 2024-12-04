import express from "express";

const app = express();

const PORT = 5100;

// Middleware to parse JSON
app.use(express.json());

//data
const users =[
    {
        id: "1", 
        firstName: "Anshika", 
        lastName: "Agarwal", 
        hobby: "Teaching",
    },
  
];

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

// Middleware for CheckDetails
const checkUser = (req, res, next) => {
    const { id, firstName, lastName, hobby } = req.body;
    if (!id || !firstName || !lastName || !hobby) {
        return res.status(400).json({ error: 'All fields are required: id, firstName, lastName, hobby' });
    }
    next();
};


//Fetch the list of all users
app.get("/users",(req,res)=>{
    res.status(200).json(users);
});

//Fetch details of specific user by id

app.get("/users/:id",(req,res)=>{
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if(!user){
        return res.status(404).json({message:"User with id does not exist"});
    }else{
        return res.status(200).json(user); 
    }
});

//Add a new User
app.post("/user",checkUser,(req,res)=>{
      const { id, firstName, lastName, hobby } = req.body;

    const userExists = users.find(user => user.id === id);
    if (userExists) {
        return res.status(400).json({ message: "User not found" });
    }

    const newUser = { 
        id:id,
        firstName:firstName, 
        lastName:lastName, 
        hobby:hobby,
     };
    users.push(newUser);
    res.status(201).json(users);   
    
});

//Update details of an existing user
app.put("/user/:id", checkUser,(req,res)=>{
    const userId = req.params.id;
    const user = users.find(user=>user.id == userId);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const { firstName, lastName, hobby } = req.body;
    Object.assign(user, { firstName, lastName, hobby });
    res.status(200).json(users);
});

//Delete a user by id
app.delete("/user/:id",(req,res)=>{
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const filtereduser = users.filter(user => user.id != userId);
    res.status(200).json({ message: 'User deleted successfully' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
  