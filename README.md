Product Requirements Document (PRD): Personal Portfolio Web
1. Product Overview
Nama Produk: Galih Pradityo - Personal Portfolio

Tujuan: Membangun online presence yang profesional untuk menonjolkan spesialisasi di ranah backend development, API architecture, dan database modeling, guna menarik peluang internship atau kolaborasi proyek.

Target Audiens: Tech Recruiter, Engineering Manager, dan sesama developer.

2. Tech Stack & Infrastructure
Framework: Next.js (App Router untuk performa SSR/SSG dan routing optimal).

Styling & UI: Tailwind CSS dikombinasikan dengan Framer Motion (untuk animasi transisi yang smooth).

Deployment & Hosting: Vercel (integrasi CI/CD langsung dari GitHub).

Analytics/SEO: Next.js Metadata API.

3. Core Features & Requirements
A. Global UI/UX

Theme Toggle: Implementasi fitur Dark Mode / Light Mode yang responsif. Transisi antar tema harus mulus dan sistem otomatis membaca preferensi OS pengunjung saat pertama kali muat.

Responsive Design: Antarmuka mobile-first yang rapi dan proporsional di semua ukuran layar (HP, tablet, desktop).

Navigation: Navbar model sticky atau floating dengan akses cepat ke menu utama (About, Skills, Projects, Experience, Contact).

B. Halaman Utama (Single Page Architecture)

1. Hero Section:

Headline utama yang lugas: "Software Engineering Student | Backend & API Architecture Specialist".

Deskripsi singkat yang punchy.

Tombol Call-to-Action (CTA) ganda: "Unduh Resume" (mengarahkan langsung ke akses download CV_Raden Mas Galih Pradityo.pdf) dan "Lihat Proyek".

Ikon tautan eksternal ke LinkedIn dan GitHub.

2. About Me:

Ringkasan naratif tentang latar belakang sebagai mahasiswa semester 5 di IPB, minat kuat pada penulisan clean code, dan fokus saat ini mencari backend internship.

3. Skills & Competencies:

Tampilan visual berbasis grid atau badge yang dikategorikan dengan jelas:

Backend & APIs: Laravel, FastAPI, Next.js, REST API Design.

Databases: PostgreSQL, MySQL, MongoDB, Firebase.

Tools & Integrations: Google Gemini API, OpenCV, TensorFlow Lite, Docker, Railway, Postman.

4. Featured Projects (Seksi Paling Krusial):

Tampilan card interaktif untuk proyek kunci. Setiap card wajib memuat: Judul, Peran (Backend/Fullstack), Tech Stack chips, deskripsi arsitektur, dan tautan (GitHub/Demo).

MediGo: Highlight sistem MVC, implementasi token authentication Laravel Sanctum, dan cara integrasi Google Gemini API via HTTP POST.

Agrivision: Tonjolkan desain RESTful API menggunakan FastAPI di Railway, pipeline Computer Vision (OpenCV), dan manajemen PostgreSQL dengan Row-Level Security (RLS).

Ba-Yu & QLC: Fokuskan pada pemodelan NoSQL (MongoDB), Role-Based Access Control (RBAC), dan arsitektur full-stack.

5. Experience & Achievements:

Desain Timeline view minimalis untuk menampilkan rekam jejak organisasi (PJK SITE 2025, Logistik SRD, BEM SV IPB) dan prestasi (YPLI Scholarship, juara kompetisi film pendek, semifinalis business plan).

6. Contact Section:

Formulir kontak sederhana (nama, email, pesan) yang dihubungkan melalui Next.js API Routes (misal menggunakan Resend atau Nodemailer) atau cukup sediakan tombol "Say Hello" yang membuka mailto langsung ke email lu.

4. Non-Functional Requirements (NFR)
Performance: Skor Lighthouse harus menembus angka 90+ untuk metrik Performance, Accessibility, Best Practices, dan SEO.

Optimization: Wajib memanfaatkan komponen bawaan <Image/> dari Next.js untuk lazy loading dan kompresi format gambar (WebP/AVIF).

Security: Semua kunci pihak ketiga (seperti API email atau analitik) harus diamankan menggunakan Environment Variables (.env.local) dan tidak terekspos ke client-side.

5. Future Iterations (Fase Selanjutnya)
Integrasi CMS headless atau sistem markdown (MDX) untuk menambahkan fitur blog. Sebagai spesialis backend, lu bisa nulis technical breakdown tentang cara lu ngedesain database atau integrasi API di proyek-proyek lu.