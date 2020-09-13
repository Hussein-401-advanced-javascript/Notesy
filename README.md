# Notesy
 - A terminal based (CLI) application allowing users to easily create and manage a list of categorized notes

## Business Requirements
 - Using only the terminal, a user should be able to perform the following actions:

   - List the notes in the database

        - All Notes: `node notes.js --list`
        - Notes in a category: `node notes.js --list school`
   - Add a note to the database.  - EX:     
        -  `node notes.js --add "This is fun" --category school`
   - Users should be able to delete a single note

        - `node notes.js --delete id`