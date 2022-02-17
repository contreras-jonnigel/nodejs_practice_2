# nodejs_practice_2

Installed NPM Packages and NPM commands:
1. npm init -y
2. npm install express mssql cors body-parser
3. npm install fs-extra
4. npm install nodemon --save-dev
5. npm install dotenv

Edit package.json under "scripts"
1. "start": "nodemon index.js"

.env sample:
NODE_ENV=development

#express serve config
PORT=5000
HOST=localhost
HOST_URL=http://localhost:5000

#sql server config
SQL_USER=
SQL_PASSWORD=
SQL_DATABASE=
SQL_SERVER=localhost
SQL_ENCRYPT=false
