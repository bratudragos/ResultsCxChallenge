# Results Cx Challenge

### Frontend

Start the front-end by running 'npm start' in the 'src' folder.

Structured in 2 components : main App component and the Cat component for every individual cat

On running and entering the app, the cats from the external api are shown and you can search by name and breed and order them by name or origin.

Used CSS and react-bootstrap for styling

useState and useEffect hooks used to handle state and changes.

### Backend

Start the backend by running 'npm run server' in the 'cat-app' folder.

Express + node + JsonDB

Structured in server, router, controller.

Controller - implemented here are the CRD operations working on the JsonDB.

Router - routing the controller functions to api's.

to get all cats, GET http://localhost:5000/cats

to get a cat by name, GET http://localhost:5000/cats?name=yourCatNameToSearch

to get a cat by id, GET http://localhost:5000/cats/catId

to add a new cat, POST http://localhost:5000/cats 
example body for add: 

{
    "name": "testName",
    "id": "testid",
    "breed": "testBreed",
    "weight": "testWeight"
}

to delete a cat, DELETE http://localhost:5000/cats/catId

to sort the cats by name, GET http://localhost:5000/cats/sortCats
