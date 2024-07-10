The website idea:

- USER CAN SELECT A SOLAR SYSTEM PLANET AND LEAVE A COMMENT OR A FACT THEY KNOW ABOUT THAT SPECIFIC PLANET.

    - USER SHOULD BE ABLE TO OPEN THE CATEGORY AND SEE ALL POSTS LEFT ABOUT THAT SELECTED PLANET.
    - USER SHOULD BE ABLE TO VIEW ALL POSTS IN "POSTS" PAGE.
    - USER SHOULD BE ABLE TO DELETE POSTS.
    - USER SHOULD BE ABLE TO NAVIGATE MULTIPLE PAGES.


Requirements
Make in the order:

Database (Supabase), 

Server (Express),

Client (React)

 ** Remember to create 2 folders in your project root. One named "server" and one named "client". **

🎯 Design a database schema with relationships between tables
    -Design done, but could not implement it fully with my app. It only adds posts to the database and retrieves / updates one page, same page where the form is submitted.

🎯 Create a new application with a React client and an Express server
(again, remember the client and the server should be separate)
    - Done

🎯 Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file. (if you use the Supabase editor, save the scripts you run in a file in your project, in case you need to rerun them, or we need to duplicate the project)
    -Done

🎯 Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.
    - Done

🎯 Create multiple pages using react-router-dom
    - Done

🎯 Create a home page.
    - Done

🎯 Create a page to show all the posts and use fetch to call your server to get your data.
    - not done - couldn't implement it, struggled and broke my code few times, then eventually restored it and gave up because of time restraints.

🎯 Create a page where users can create new posts using a form.
    - Sort of done, posts added will appear on the same page and it will be also added to database.



Stretch Goals
🏹 Allow users to "Like" posts and increase the likes
    - Not done
🏹 Allow users to DELETE posts
    - Done

🏹 Allow users to filter posts in a specific category. Use either a query string like /posts?category=education or a dedicated route for the categories at /posts/:categoryName.
    - Not done

(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.
    - Managed to do most of the requirements, written "-Done" on each one in the list above.
🎯 Were there any requirements or goals that you were not quite able to achieve?
    - Couldn't add posts by category.
    - Couldn't make all posts / category posts appear on seperate page.
    - Did not attempt the "Like" button stretch code.
    - Tried to make "Edit" post button work, did not succeed.
🎯 If so, could you please tell us what was it that you found difficult about these tasks?
    - Database relations were by far the most confusing of the tasks, struggled to understand how everything connects and how to then implement everything together on the server / client.

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.
 
What went really well and what could have gone better?
    - Surprisingly making page routes work was easier than predicted, was very happy when i got it to work.

    - Database creating table / inserting data on the Editor is easy, but using all the data back and forth, adding / removing / editing via UI form is where i felt lost.
    
    - Understanding how to design the database was also a major struggle, how to join tables and onwards.

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
Requesting feedback about a specific part of your submission.



