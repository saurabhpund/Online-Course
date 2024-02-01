// router.js
const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://saurabhpund:Mypassward8%40@cluster0.88fso5d.mongodb.net/?retryWrites=true&w=majority"
);

router.get("/", (req, res) => {
  res.json({ message: "Hello" });
}); 

router.get("/fetchData", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("courses");
    const courseCollection = database.collection("Course_Collection");

    const data = await courseCollection.find({}).toArray();

    res.json({ data });
  }
  catch(err) {
    console.log(err)
    client.close();
  }
});

router.get("/fetchData/:id", async (req,res) =>{
  
  try {
    const courseId  = req.params.id
    await client.connect();
    const database = client.db("courses");
    const courseCollection = database.collection("Course_Collection");

    const data = await courseCollection.find({id: courseId}).toArray();

    res.json({ data });
  }
  catch(err) {
    console.log(err)
    client.close();
  }
})

module.exports = router;
