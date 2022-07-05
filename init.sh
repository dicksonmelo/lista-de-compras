npm install
npm run build
cat init.sql | heroku pg:psql postgresql-clean-14556 --app app-feirinha
npm start
