Live Link to View Project here:
https://jcloeter.github.io/hotel-message-app/

This project gives hotel staff the ability to create custom greetings for their guests. Users may choose from a list of greeting templates or add their own. Company and guest information is stored in a JSON file.

I chose React.js, javascript, HTML, and CSS for this project because I wanted an application with a user-friendly interface. The project can be divided into two main components: DataGroups and ResultsMessage. DataGroups listens for user input and sends information about the selection up the component tree. When a user has selected an item from all three categories, ResultMessage combines the data into a message which is rendered to the UI.

In writing the logic to parse the template string, I wanted a solution that was easily scalable and changeable. In the ResultMessage folder, CaculatedMessage.js contains most of this logic. More template variables may be added by inserting an object to the varData array. To change the way variables are delineated, a single chamge to the split() method will allow experimentation with other characters. Time helper functions are imported rather than declared locally to avoid clutter.

To ensure a working solution, I experimented with several different test templates using variables in different ways. The first problem I encountered was my parsing function either eliminating punctuation next to a variable, or not recognizing that variable at all. After trying a combination of regex and the replace() method, nothing was quite correct until I decided to add \*\* around variable names. I could then split up the string no matter the surrounding punctuation and check if the new segment was equal to a variable name.

In the future I would like to add the ability to delete custom templates, as well as remember new ones across page reloads with the localStorage API. As guest and companies lists grow larger in a real world version, a sorting button would be nice to help users find their target faster.

To run this react application locally, download the files, install local dependencies with 'npm i', and start the server with 'npm start'.
