📆 Task App
A full-stack platform for creating, organizing, and managing tasks efficiently, with tasks associated with specific projects. Built with Ruby on Rails for the backend, PostgreSQL for the database, Angular with TypeScript for the frontend, and styled with SaaS. The backend is tested with RSpec.
    
🌟 Features

Create and manage tasks with titles, descriptions, due dates, and completion status.
Organize tasks under specific projects with customizable names and colors.
Responsive frontend built with Angular and TypeScript.
RESTful API powered by Rails.
Database management with PostgreSQL.
Tested with RSpec for reliable backend functionality.
Styled with SaaS for a modern, clean UI.

📋 Models
Task

Belongs to: Project
Attributes:
title (string): Task title.
description (string): Task details.
done (boolean): Completion status.
due_date (datetime): Task deadline.
project_id (object): Reference to associated project.



Project

Has many: Tasks
Attributes:
name (string): Project name.
color (string): Project color for UI display.



🛠️ Prerequisites
Before setting up the project, ensure you have:

Git: For cloning the repository.
Ruby (3.0+): Install via rbenv or RVM.
Rails (7.0+): Install with gem install rails.
PostgreSQL (12+): Ensure the server is running.
Node.js (16+): Required for Angular.
Angular CLI: Install with npm install -g @angular/cli.
Yarn (optional): Install with npm install -g yarn.

Verify installations:
git --version
ruby --version
rails --version
psql --version
node --version
ng --version
yarn --version

🚀 Installation
1. Clone the Repository
git clone https://github.com/username/todoist.git
cd todoist


Replace https://github.com/username/todoist.git with the actual repository URL.

2. Set Up the Backend
Navigate to the backend directory:
cd backend-todoist

Install Dependencies
bundle install

Configure PostgreSQL
Ensure PostgreSQL is running. Create a database user if needed:
psql -U postgres
CREATE ROLE todoist_user WITH LOGIN PASSWORD 'your_password';
ALTER ROLE todoist_user CREATEDB;
\q

Update config/database.yml with your credentials:
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: todoist_user
  password: your_password
  host: localhost

development:
  <<: *default
  database: todoist_development

Set Up the Database
rails db:create
rails db:migrate
rails db:seed

Start the Rails Server
rails server

The backend API will be available at http://localhost:3000.
3. Set Up the Frontend
Navigate to the frontend directory:
cd ../frontend-todoist

Install Dependencies
npm install


Or use yarn install if preferred.

Configure API URL
Verify the API URL in src/environments/environment.ts:
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

Start the Angular Server
ng serve

The frontend will be available at http://localhost:4200.
4. Run Tests
For backend tests with RSpec:
cd backend-todoist
rspec

For frontend tests with Angular:
cd frontend-todoist
ng test

📂 Project Structure

Backend (backend-todoist):
app/models/task.rb: Task model definition.
app/models/project.rb: Project model definition.
config/database.yml: Database configuration.
db/seeds.rb: Sample data for projects and tasks.


Frontend (frontend-todoist):
src/app: Angular components, services, and modules.
src/environments: API configuration.



🧪 API Endpoints

GET /projects: List all projects.
POST /projects: Create a new project.
GET /tasks: List all tasks.
POST /tasks: Create a new task.
(Add more endpoints as implemented.)

🎨 Usage

Access the app at http://localhost:4200.
Create projects with unique names and colors.
Add tasks, assign them to projects, and set due dates.
Mark tasks as done or update their details.

🤝 Contributing

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m 'Add feature').
Push to the branch (git push origin feature-name).
Open a Pull Request.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
📬 Contact
For questions or feedback, open an issue or contact your-email@example.com.
