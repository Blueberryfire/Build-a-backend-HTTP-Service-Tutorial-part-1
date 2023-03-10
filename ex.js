const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Hello theree');
});
const courses = [
    {id:1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];
//http GET requests route
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});
//request course by id
app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID wasn't found");
        return;
    }
        res.send(course);
})

//http post requests
app.post('api/courses', (req,res) => {
    // you write the if code here
    //add an if statement so that the name of the course you post is .min(3) characters 
        console.log(req.body.name);
        const course ={
            //we assign an ID and a name property
            id: course.length +1,
            name:req.body.name
    }
            //YOU WRITE THE NEXT LINES OF code
          //next step: push it to the array
            //next step: the server should return the new resource to the client in the body of the response
    
      
    });
    



app.listen(3000,()=>{
    console.log("Listening on port 3000 ...");
})