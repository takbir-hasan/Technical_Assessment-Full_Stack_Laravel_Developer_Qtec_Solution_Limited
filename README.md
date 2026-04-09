# Simple Task Management System

This project is a clean, intuitive, and modern Task Management application developed as a Full Stack Laravel assessment for Qtec Solution Limited.

## Features Let’s Check Out

- **Clean & Intuitive UI:** Built with React, Inertia.js, and Tailwind CSS, presenting a responsive Kanban-style dashboard.
- **Robust Backend:** Powered by Laravel 11 with built-in Breeze authentication. Validations and authorization strictly enforce security.
- **Dynamic Interactions:** Tasks can be created, updated (status changing, renaming), and deleted without page reloads.
- **Testing Coverage:** Core CRUD and validations mapped through Pest feature tests.

## Technologies Used

- **Framework:** Laravel 11
- **Database:** SQLite (chosen for rapid and zero-config testing by evaluators).
- **Frontend Layer:** React 18 & Inertia.js (Using Laravel Breeze setup)
- **Styling:** Vanilla Tailwind CSS with dynamic custom configurations.
- **Testing:** Pest & PHPUnit for Feature Testing.

## Assumptions & Decisions Made

- Added basic Multi-User compatibility initially through Laravel Breeze. Security is configured so users can only manage and see their *own* tasks.
- For the aesthetics, I chose a Kanban-style layout consisting of three pillars (Pending, In Progress, Completed), allowing clear visibility and an obvious way to track task progression.
- Handled routing purely through `TaskController`, converting the standard `/dashboard` page into our master Task Board.
- Selected SQLite to ensure evaluators can run the project out-of-the-box without firing up MySQL containers or editing `.env` for database credentials.

## Setup Instructions

Ensure you have PHP 8.2+, Node.js (v20+), and Composer installed.

1. **Clone & Setup Environment**
   ```bash
   git clone <repo_link>
   cd "Task Management System"
   cp .env.example .env
   ```

2. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

4. **Run Migrations & Seeding**
   The seeding provides a default `Test User` for quick testing.
   ```bash
   php artisan migrate:fresh --seed
   ```
   *Test User Credentials:*
   - **Email:** test@example.com
   - **Password:** password

5. **Compile Frontend & Run Development Server**
   Run the following commands in two separate terminal windows:
   ```bash
   npm run build # or npm run dev
   php artisan serve
   ```

## Testing Protocol

Tests have been thoroughly enforced for robust functional behavior.
You can run the test suite to verify:

```bash
php artisan test
```

### Coverage:
- Validating missing properties on Task Creation.
- Successfully updating task states.
- Rejection of task updates if manipulated by another user.
- Complete creation and deletion lifecycles.
