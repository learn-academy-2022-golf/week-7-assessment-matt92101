# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

An association must be created by linking the Cohort model with the Student model. This can be done using a foreign key. The foreign key needs to be established in the Student model. The Cohort model will associated the Student model using its primary key and referencing the foreign id of the student model.

Researched answer:

The has_many association is to set up many connections with another model. I must first assign a variable to Cohort in order to create a student within the cohort. For example golf = Cohort.first. Now I can assign a student to golf by using golf.students.create name "John Doe"

2. Which RESTful routes must always be passed params? Why?


Your answer:
I believe the index route does not need params because the index is the gatekeeper for all of the data. I would defineately like to research this further and get back to you.

Researched answer:

Strong params can be used to increase security when a user passes data through a form. A developer can create strong params in the controller and  specify which fields a user is allowed to pass data through.

3. Name three rails generator commands. What is created by each?

Your answer:
Rails g controller - This creates a controller in the application
Rails g model - This creates a new model
Rails g resource - This does everything the g model plus adds routes to the application


Researched answer:
Rails g migration - gives the developer a way of evolving a database schema. A schema begins empty, however over time each migration alters it by adding or removing tables and columns. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

action: "POST" location: /students
students#create - creates a new student
action: "GET" location: /students/new
student#new - returns a form for creating a new student
action: "GET" location: /students/2
student#show - displays a specific student
action: "GET" location: /students/2/edit
student#edit - returns a form for editing a student
action: "PATCH" location: /students/2
student#update - updates a specific student
action: "DELETE" location: /students/2
student#destroy - deletes a specific student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. Add categories to the to-do list. I.e Work, Home, School
2. Categories will be color coded. 
2. The to do list will have options for unlimited tasks within each category.
3. The to do list will have an approximate completion data
4. The to do list can be prioritzed from top-down
5. The to do list will have a check box when completed
6. The to do list will have a time stamp when actually completed
7. The to do list will give reminders when tasks due dates are approaching
8. The to do list can be shared with others for visibility
9. The to do list can provide completion metrics over time
10. The to do list provides motivating messages once the task is completed.