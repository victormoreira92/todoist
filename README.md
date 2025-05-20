# 📆 Task App

Task App is a **fullstack task management platform** that allows users to **create, organize, and manage tasks**, associating them with specific projects for better productivity and planning.

---

## 🎥 Demo

<video width="640" height="360" controls>
  <source src="video_aplication.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 🛠️ Built With

<div style="display: flex; gap: 10px; align-items: center;">
  <img src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png" alt="Rails" width="50" />
  <img src="https://w7.pngwing.com/pngs/657/27/png-transparent-postgresql-original-wordmark-logo-icon-thumbnail.png" alt="PostgreSQL" width="50" />
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="50" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="50" />
  <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="SaaS" width="50" />
  <img src="https://gitlab.spritecloud.com/uploads/-/system/project/avatar/461/rspec.png" alt="RSpec" width="50" />
</div>

`Rails | PostgreSQL | Angular | TypeScript | Sass | RSpec`

---

## ✨ Features

* 📌 Create and manage tasks with titles, descriptions, due dates, and status.
* 📂 Group tasks by projects with customizable names and colors.
* 📱 Responsive UI built with Angular and TypeScript.
* ⚙️ RESTful API built with Ruby on Rails.
* 🗃️ Data stored and managed using PostgreSQL.
* 🧪 Backend tested with RSpec.
* 🎨 Modern design styled with Sass.

---

## 🔌 API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/projects`      | List all projects    |
| POST   | `/projects`      | Create a new project |
| GET    | `/tasks`         | List all tasks       |
| POST   | `/tasks`         | Create a new task    |
| GET    | `/task/today`    | Get tasks due today  |
| GET    | `/task/upcoming` | Get upcoming tasks   |
| DELETE | `/task`          | Delete a task        |
| DELETE | `/project`       | Delete a project     |

> *More endpoints coming soon...*

---

## 🧩 Data Models

### 🗂️ Project

* **Associations**: `has_many :tasks`

| Attribute | Type   |
| --------- | ------ |
| name      | string |
| color     | string |

### ✅ Task

* **Associations**: `belongs_to :project`

| Attribute   | Type     |
| ----------- | -------- |
| title       | string   |
| description | string   |
| done        | boolean  |
| due\_date   | datetime |
| project\_id | integer  |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-user/todoist.git
cd todoist
```

### 2. Backend Setup (Rails API)

```bash
cd backend-todoist
bundle install
rails db:create db:migrate db:seed
rails s
```

### 3. Frontend Setup (Angular)

```bash
cd ../frontend-todoist
npm install
ng serve
```

### 4. Access the App

Navigate to `http://localhost:4200` in your browser.

---

## 📌 Notes

* Ensure you have **Ruby**, **Rails**, **PostgreSQL**, **Node.js**, and **Angular CLI** installed.
* Recommended for development: use tools like **Postman** or **Insomnia** to test the API.
* Keep environment variables for database access and Rails secrets safe.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 🧑‍💻 Author

**Your Name** – [@yourhandle](https://github.com/yourhandle)
*This project was developed as part of a study in fullstack development.*

---


