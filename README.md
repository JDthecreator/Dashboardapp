# Dashboardapp
Dashboard app using typescript, react, nextjs, postgreSQL 


Basic setup

1. You wil first need to open this app and run the 'pnpm dev' command to load up the frontend 

2. click the url for your localhost:

3. Login to Vercel and create a new project.

4. import your github repo to your project.

5. In Vercel under the storage tab, create a database (supabase) next.js

6. connect the database to your deployment

Day 1

I am having issues with the total pending and total collected numbers on the homepage dashboard. Quotes are showing
around the currency formatted figure.

Resolved: Json stringify function used on in the page.tsx file for the dashboard was the cause.

Day 4

Decided to repurpose the app as a Saas tool for Coaching. 


Started laying out the the new table schemas for the data that will be held in the database.


Day 6

Used Supabase table editor to create and modify existing tables to more clearly reflect the use case. 

Day 7 

Ui back up pushed commit, working on creating submenu in sidnav to move invoice ui
submenu for invoice search completed. Dashboard for invoices moved to invoice page
created invoice search page and submenu option.

Day 8

Design and update Home dashboard.

