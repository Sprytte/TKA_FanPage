# The King's Avatar Fan Page
This was my final project for my "Java Web Programming" class.

## Description: 
The application is a fan site that allows users to learn more about the light novel and its adaptations, as well as the best moments in the novel to allow readers
to reread their favorite moments without having to search desperately for hours (as I have done).

The project was built using a full REST API using springboot on IntelliJ and ReactJS as the front-end. I also used the 'toast' and
'stackable panes' libraries available on github.

## Running the project 
This project was made in two parts. This repositry is only the ReactJS front-end. To run the whole thing, you would need to clone both repositories.

Once that's done, you can run the JPA project in IntelliJ, after which you can post all initial data using Postman (or anything similar) and, finally, run the project in Visual Studio Code using the "npm start" command. <br> 

The initial data is available in the "TKA_Requests.json" file in the repository, exported directly from Postman.

## Design
Each page (story, arc, and favorite) is inside of the HomePage in a const which is switched out using onClick functions in the nav and a useState to switch
between the pages. The items returned by getRequests are returned inside their corresponding page and then called in the HomePage by their function.

## End-Points:
/TKA/ADAPTATIONS  ->  This allows get and post requests into the Story table. <br>
/TKA/ADAPTATIONS/<id>  -> This allows get, put, and delete requests in the Story table. <br>
/TKA/ADAPTATIONS/<storyId>/Arcs  -> This allows get, post, and delete requests in the Arc table. <br>
/TKA/Arcs/<arcId>  -> This allows get, put and delete requests in the Arc table. <br>
/TKA/Favorites/<favoriteId>  -> This allows for get and put requests in the Favorite table. <br>
/TKA/Adaptations/<storyId>/Favorites  -> This allows get, post, and delete requests in the Favorite table.
