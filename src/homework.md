-create a repo
- Initialize the repo
- node_modules,package.json,package-lock.json
- Install express
- Create a server
- Listen to port 1111
- Write request handlers for /test , /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Diff between Caret and tilde (^ vs ~)

- initialize git
- .gitignore
- create a remote repo on github
- push all code to remote origin
- play with routes and route extensions ex /hello / / , hello/2, /xyz
- order of the routes matter a lot
- install postman app and make a workspace/collections > test api call
- write logic to handle GET POST PATCH DELETE API calls and test them on postman

// app.get("/ab?c) -> b is optional /ac also works
// app.get("/ab+c) -> can add b as much as u want it will work only a and c should be proper first and last
-> /abc -> works
-> /abbbc -> works
-> /abbcc -> not works

// app.get("/ab*cd) and add anything in between ab and cd

-> abcd -> works
-> /abccdcd -> works
-> /abcdc -> not works


READING THE PARAMS AND QUERY 

path in postman -> http://localhost:1111/user?userId=101&password=testing
-> req.query -> in code

path in postman -> http://localhost:1111/user/:userId/:userName
http://localhost:1111/user/101/kunal
-> req.param -> in obj userId:101 , userName:kunal
