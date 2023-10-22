<p>create a user <a href="http:localhost:5000/create">http:localhost:5000/create</a></p>
<p>get all user <a href="http:localhost:5000/">http:localhost:5000/</a></p>
<p>get a user <a href="http:localhost:5000/user/:userId">http:localhost:5000/user/:userId</a></p>
<p>update a user <a href="http:localhost:5000/user/:userId">http:localhost:5000/user/:userId</a></p>
<p>search apt <a href="http:localhost:5000/search/?q=facebook">http:localhost:5000/search/?q=facebook</a></p>

# Project Setup #
1. Clone the repository
2. Setup a Firebase account
3. Configure Firestore in Project
4. Install dependencies
5. Start the server
6. Access the API

# 1. Clone the repository #
- Repository link <https: //github.com/arunvbiradar/marketwiz>
  - Clone the project using command *git clone https://github.com/arunvbiradar/marketwiz.git*
  - Using cd command go inside the marketwix directory that got created with the previous command

# 2. Setup a Firebase account #
- Go to
<https: //firebase.google.com /> and login with ur gmail account, if not logged in
- Click on get started and then click on the add project
- Follow the steps to create a new project
- Give project name, click continue
- Google analytics steps, click continue
- Configure google analytics, create new account if required
- Click create project

# 3. Configure Firestore in Project #
- On the project page in firebase, Go to Cloud Firestore
- Click on Create database, click on Next, Enable buttons
- Your firestore database is created
- Click on Gear icon nest to project overview on top left and go to project settings
- On general tab scrolldown and copy below propeties
  - apiKey: "..apiKey.."
  - authDomain: "..authDomain.."
  - projectId: "..projectId.."
  - storageBucket: "..storageBucket.."
  - messagingSenderId: "..messagingSenderId.."
  - appId: "..appId.."
  - measurementId: "..measurementId.."
- In the local project root directory which is cloned create .env file with the exact same name mentioned below
  - APIKEY = ..apiKey..
  - AUTHDOMAIN = ..authDomain..
  - PROJECTID = ..projectId..
  - STORAGEBUCKET = ..storageBucket..
  - MESSAGINGSENDER = ..messagingSenderId..
  - APPID = ..appId..
  - MESUREMENTID = ..measurementId..
- Note the values in the above env files are without quotes.

# 4. Install dependencies #
- In the command prompt make sure you are in the project root
- run command *npm install* or you can install the below node packages
  - express @types/express typescript nodemon ts-node dotenv firebase-admin firebase-tools
- At this stage you will be able to run the server and check the api

# 5. Start server *
- In the command prompt make sure you are in the project root
- Run command *npm start *
- Once the server started you should be able to see message "Server is running on port 3000"
- Now you can access the APIs /create, /, /user/:userId', /search

# 6. Access the API *
- You have to use postman for this
- Import "MarketWiz.postman_collection.json" collection in post man or do the following
  - For /create, go to <localhost:3000/create>
    - Create is a POST request
    - In body of the enter email, password and display name in json format to create a user
    - Create multiple users
  - For getting all the users, go to <localhost:3000/>
    - This is a GET request
    - Once you hit sebd you will be able to get all the users create above
  - For getting one user, go to <localhost:3000/user/oPTtgy3LGGwu6h7gmKdz>
   - *oPTtgy3LGGwu6h7gmKdz* is a user id
   - This is a GET request
   - once you hit the above url with correct user id you will get the user details
  - For updating user details, go to <localhost:3000/user/oPTtgy3LGGwu6h7gmKdz>
    - *oPTtgy3LGGwu6h7gmKdz* is a user id
    - This is a PUT request and enter the fields to update in body in json format
    - once you hit the above url with correct user id you will update the user details
  - For the search wikipedia api
   - Copy *EXT_URL = https://en.wikipedia.org/w/api.php?action=query&list=search&format=json* in the .env file
   - Since you have updated the .env file you have to restart the server
   - Once server is started, go to <http://localhost:3000/search?q=facebook> in postman
   - here *facebook* is the query search term in the wikipedia api
   - once you hit send you will get the response in the json format with numberOfHits and the query content