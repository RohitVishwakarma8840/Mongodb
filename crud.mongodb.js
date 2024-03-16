use("CrudDb")

console.log(db);

db.createCollection("courses")

db.courses.insertOne({

name: "Rohit Vishwakarma web dev",
price:0,
assignments: 13,
project:8

}
)


db.courses.insertMany([
    
        {
          "name": "Rohit Vishwakarma web dev",
          "price": 0,
          "assignments": 13,
          "project": 8
        },
        {
          "name": "Rohit's Web Services",
          "price": 0,
          "assignments": 15,
          "project": 10
        },
        {
          "name": "Vishwakarma Web Solutions",
          "price": 0,
          "assignments": 10,
          "project": 6
        },
        {
          "name": "Rohit's Digital Development",
          "price": 0,
          "assignments": 18,
          "project": 12
        },
        {
          "name": "Vishwakarma Tech Creations",
          "price": 0,
          "assignments": 12,
          "project": 9
        }
      
])


let a=db.courses.find({assignments:{$gt:12}})

console.log(a)