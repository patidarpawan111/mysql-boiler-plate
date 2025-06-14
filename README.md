<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

<p align="center">A clean and extensible NestJS + MySQL boilerplate project built for scalability and maintainability.</p>

<p align="center">
  <a href="https://github.com/patidarpawan111/mysql-boiler-plate"><img src="https://img.shields.io/github/license/patidarpawan111/mysql-boiler-plate" alt="License" /></a>
  <a href="https://github.com/patidarpawan111/mysql-boiler-plate"><img src="https://img.shields.io/github/stars/patidarpawan111/mysql-boiler-plate" alt="Stars" /></a>
  <a href="https://github.com/patidarpawan111/mysql-boiler-plate"><img src="https://img.shields.io/github/forks/patidarpawan111/mysql-boiler-plate" alt="Forks" /></a>
</p>

---

## 🚀 Features

- ⚙️ NestJS project structure
- 🧱 TypeORM + MySQL integration
- 🔐 Centralized `.env` config
- ♻️ Soft delete-ready BaseEntity
- 📃 Global response/error interceptors
- 📚 Auto-generated Swagger docs (`/docs`)
- 🧪 DTO validation with `class-validator`
- 🧼 Clean, minimal start with **no auth or preloaded modules**

---

## 🛠️ Tech Stack

- **NestJS** – Backend framework
- **TypeORM** – ORM for database handling
- **MySQL** – Relational DB
- **Swagger** – API documentation
- **class-validator** – DTO validation
- **dotenv** – Environment management

---

## 🧑‍💻 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/patidarpawan111/mysql-boiler-plate.git
cd mysql-boiler-plate

# 2. Install dependencies
npm install

# 3. Create a .env file from example
cp .env.example .env

# 4. Configure your MySQL credentials and DB name inside .env

# 5. Run the project in dev mode
npm run start:dev
```

---

## 📚 Swagger API Docs

Once the app is running:

```
http://localhost:3000/docs
```

Explore, test, and share APIs using Swagger UI.

---

## 📁 Folder Structure

```
src/
├── common/                # BaseEntity, interceptors, enums, utils
├── config/                # Swagger + env loader
├── database/              # TypeORM config
├── main.ts                # Entry file
└── app.module.ts          # Root module
```

---

## 🧾 License

This project is [MIT licensed](https://github.com/patidarpawan111/nestjs-mysql-boiler-plate/blob/main/LICENSE).
You are free to use, modify, and distribute it.

---

## ✨ Author

Made with ❤️ by [Pawan Patidar](https://github.com/patidarpawan111)  
📫 Connect with me on [LinkedIn](https://www.linkedin.com/in/impawanpatidar/)

> Want to contribute or customize? Fork the repo and go wild ⚡
