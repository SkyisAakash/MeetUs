# Welcome to MeetUs
MeetUs is a single page web-app clone of meetup.com as of June 2018. The site is a social meeting platform where users can create groups and
events to share their interest with people with same interests.

[MeetUs Live!](https://meetus-meetup.herokuapp.com/#/)

![DashBoard](https://res.cloudinary.com/df4s95pqa/image/upload/v1529011512/mainpage.png)

## Design:

The MeetUs app was designed and built from scratch in 10 days. The proposal was prepared to implement MVPs to get site functional. More details about proposal can be viewed [here.](https://github.com/SkyisAakash/MeetUs/wiki)

## Technologies used:

* Backend

   - This full stack project employs ruby on rails v 5.1.6 for implementing back-end.
   - Databases are managed by PostgreSQL.
   - The backend is implemented to provide RESTful APIs and handle and respond with JSON data.

* Front-end

   - The front end and UI are implemented using React/Redux and JavaScript.
   - Using react allows the state of the project to be normalized to reflect database and hence making the flow of one-page application smooth.
   - The back-end uses SQL queries for filtering data and front end uses VanillaDOM manipulation.
   - The webpage designing was done using css and scss and icons were used from awesomefonts.com.
   - Babel was used for transpiling JSX into JavaScript.

* More Technologies used:
   - Jbuilder
   - NodeJs
   - AJAX
   - npm(Node package manager)
   - webpack
   - React DOM
   - React Router
   - React History to manipulate the browser history.
   - Cloudinary API for uploading/storing images (Trials also performed with AWS and paperclip)

* The site is hosted on heroku and can be viewed [here.](https://meetus-meetup.herokuapp.com/#/)

## Functionalities:

  * Search:

    - User can use the searchbar to search both groups and events by selecting one of the options Groups/Calander.
    - The search updates the result in real-time as the user types. Event search results are sorted by date in fashion of most recent first.
    - Search results shows the groups/events of the user on top of more public groups/events
    - The search results of the event are sorted by the start_date of the event.

    ![Search-Demo](https://res.cloudinary.com/df4s95pqa/image/upload/v1529092268/searchdemofinal.gif)


 * Users:

   - Create user accounts with secure authentication.
   - View their user profile in the profile option in dropdown menu.

   ![User-Profile-Dropdown-Demo](https://res.cloudinary.com/df4s95pqa/image/upload/v1529022955/Peek_2018-06-14_17-34.gif)

 * Groups:

   - Create, Edit and Delete public groups.

   Check out the create group demo [here.](https://res.cloudinary.com/df4s95pqa/image/upload/v1529093101/create_group.gif)

   - Appropriate validations and error rendering on create group and edit group forms.
      Redux history property was used to redirect user to the group show page on successful creation of group.

      ```javascript  
          this.props.submitGroup(this.state).then((payload) => {
          this.props.history.push(`/groups/${payload.group.id}`);
        });
      ```

   - Groups show page displays most recent event of group in a card along with coming event in smaller cards which can take user to event show page.
   - Group show page also shows the members of group and updates memberlist in realtime on joining or leaving group action from any user.
      This was achieved by code some of which is as follows:

      ```JavaScript
        let user_id = this.props.currentUser.id;
        let group_id = this.props.group.id;
        let object = {group_id, user_id};
        let hash = this.props.groupmemberships;
        let target = Object.keys(hash).filter(function(key) {
        return JSON.stringify(hash[key]) === JSON.stringify(object)})[0];
        let numtar = parseInt(target);

        this.props.deleteGroupMember(this.props.group.id,numtar)
        .then(this.props.requestgroupmembers)
        .then(this.setState({
          memberships: "false"
        }));
      ```

 * Events:

   - Create, Edit and Delete events from group show page.
   - Appropriate validations and error rendering on create event and edit event forms.
   - The event show page shows user all of his/her events along with more events that they can join.

      Following is the code snippet that filters event for users in selector

      ```javascript
      export const selectMemberEvents = (state) => {
        let result = [];
        let userId = state.session.currentUser.id;
        let memberEvents = Object.values(state.entities.eventmembers).map(object => {
            if(object.user_id === userId && state.entities.events[object.event_id]){
              result.push(state.entities.events[object.event_id]);
            }
        });
        Object.values(state.entities.events).map(event => {
          if  (event.organizer_id === userId) {
            result.push(event);
          }
        });
        return result;
      };
      ```

   - Event show page also contains link to the group it belongs to and updates attendees list in realtime on RSVP action from any user.

## Current challenges and future implementations:

 * Add calendar to search events by date:
    - The selector functionality has already been done using VanillaJavascript and I shall make the functionality available on UI as soon as
        I find a suitable calendar widget for datepicker.
 * Map on event page:
    - The current challenge is to get the coordinates for google maps API from the address of the events so they can be fed to the map element to show exact address
    of the event on map.

* Your suggestions and feedback are always welcome.
