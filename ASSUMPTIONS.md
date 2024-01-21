In our website we took a few assumptions:
1. The website should be opened in fullscreen mode for the best functionality. The site may need to be zoomed out on laptops with smaller screen sizes(for example: on mac 16" it works on 100% but on mac 13" you might need to zoom out to 80% for full functionality).
2. Some images have been taken from the internet and some have been added in the repository as they were not available on the internet or were edited for decoration purposes.
3. We took the top songs of the albums of the different artists instead of taking all the songs.
4. You can hover over the songs but they are not clickable as specified in the pdf.
5. On minimising the about page the text overlaps.
6. On the search page, when the user clicks on the "Apply Filters" or "Clear Filters", it will apply/clear all the filters and display the search results without the need to click the search button.
7. If the user wants to check the search results for a new set of filters, we suggest them to clear the previous filters first and then add the necessary filters to see updated search results.
8. The maximum range for duration filter is from 1 to 60 mins and the user can only add values corresponding to this range of values.
9. In the database we are creating we have taken id as a primary key with autoincrement which generates a unique id everytime we add an entry. 
10. The playlist is page is displayed once the flask code is running.
11. We've made use of libraries like jsonify, json, flask_cors and request to link and run the site.
12. On adding to the playlist we add the name of the song, name of the artist and the duration of the song.
