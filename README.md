# 📆 Task App	

A fullstack platform that allows users to create, organize, and manage their tasks efficiently, associating them with specific projects. 
See how website works in this link

# Builds
<img src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png" alt="Rails logo" width="70" height="70"> <img src="https://w7.pngwing.com/pngs/657/27/png-transparent-postgresql-original-wordmark-logo-icon-thumbnail.png" alt="[Rails logo" width="70" height="70">  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__DpLyuRUlYIwSXn8MGy4bIU-RdXhtYCkSeSKtkrmxQ&s" alt="[Rails logo" width="70" height="70">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="[Rails logo" width="70" height="70">  <img src="https://gitlab.spritecloud.com/uploads/-/system/project/avatar/461/rspec.png" alt="[Rails logo" width="70" height="70">

`Rails | PostgreSQL | Angular | Typescript | Saas | Rspec`

# Model 

### Task                                            
belongs_to: project

| Attribute   | Type |
| ----------- | ----------- |
| Title      | string       |
| Description   | string        |
| done | boolean |
| due_date| datetime| 
| project_id | object|

### Project
has_many: tasks

| Attribute   | Type |
| ----------- | ----------- |
| name      | Type       |
| color   | string        |

# Instalation 
`git clone todoist.git`

`cd todoist`

`cd backend-todoist`

`rails db:create db:migrate db:seed`
