# Instructions
* Setup database
	1. __Install Postgresql__: 
		* [https://www.postgresql.org/download](https://www.postgresql.org/download)
		* Or user docker to do it.
	2. __Create a table__
	
* Clone the project
	```
	git clone git@github.com:higorbelem/WhatToDo-API.git
	```
	
* Install dependencies
	```
	npm i 
	or 
	yarn install
	```

*   Add the .env file to the root of the project, and set the database info on it. Example:
    
    ```
    DATABASE_TYPE=postgres
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=user-name
    DATABASE_PASS=password
    DATABASE_NAME=database-name
    ```

*  Run the project
    
    ```
   npm run start
    or
    npm run start:dev
    ```

# Possible improvements
    
* Implement unity tests.
* Remove "deviceId" from the Task entity and create a relation to a user entity.
