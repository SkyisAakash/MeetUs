
MeetUs is a single page web-app clone of meetup.com as of June 2018. The site is a social meeting platform where users can create groups and
events to share their interest with people with same interests.

![DashBoard](https://res.cloudinary.com/df4s95pqa/image/upload/v1529011512/mainpage.png)

* Design:

The MeetUs app wasdesigned and built from scratch in 10 days. The proposal was prepared to implement MVPs to get site functional. More details about proposal can be viewed here.

* Technologies used:


This full stack project employs ruby on rails v 5.1.6 for implementing back-end. Databases are managed by PostgreSQL.
The backend is implemented to provide RESTful APIs and ahndle and respond with JSON data.

The front end and UI are implemented using React/Redux and JavaScript.
Using react allows the state of the project to be normalized to reflect database and hence making
the flow of one-page application smooth.
The back-end uses SQL queries for filtering data and front end uses VanillaDOM manipulation.
The webpage designing was done using css and scss and icons were used from awesomefonts.com.
Babel was used for transpiling JSX into JavaScript.
* More Technologies used:
Jbuilder, NodeJs, AJAX, npm(Node package manager), webpack, React DOM, React Router, React History to manipulating the browser history
The site is hosted on heroku and can be viewed [here](https://meetus-meetup.herokuapp.com/#/):

* Functionalities:

 - Users:

    Create user accounts with secure authentication.
    The site allows its users to create public groups for different kind of activities. Users can create or join groups.
    Users can edit or delete already existing groups if they are the organizer of that group.
    The organizer can create events for his group and let people RSVP for those events. Users can RSVP for events or cancel existing RSVP
    for any of his events. Users can view their profile in the profile option in dropdown menu.

  -Groups:

    The group show page shows user all of his/her groups along with more groups that they can join.
    Users can create new groups or update existing groups or delete created groups if they are the organizer.
    Groups show page displays most recent event of group in a card along with coming event in smaller cards which can take user to event show page.
    Group show page also shows the members of group and updates memberlist in realtime on joining or leaving group action from any user.

  -Events:

    The event show page shows user all of his/her events along with more events that they can join.
    Group organizers can create new events or update existing events or delete created events if they are the organizer.
    Event show page also contains link to the group it belongs to and updates attendees list in realtime on RSVP action from any user.

  -Search:

    User can use the searchbar to search both groups and events by selecting one of the options Groups/Calander.
    The search updates the result in real-time as the user types. Event search results are sorted by date in fashion of most recent first.

* Current challenges and future implementations:

  -Add calendar to search events by date:
    * The selector functionality has already been done using VanillaJavascript and I shall make the functionality available on UI as soon as
        I find a suitable calendar widget for datepicker.
  -Map on event page:
    * The current challenge is to get the coordinates for google maps API from the address of the events so they can be fed to the map element to show exact address
    of the event on map.
