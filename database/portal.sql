-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 20, 2025 at 06:12 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggotas`
--

CREATE TABLE `anggotas` (
  `id` bigint UNSIGNED NOT NULL,
  `nim` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prodi` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `angkatan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('aktif','pasif') COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `anggotas`
--

INSERT INTO `anggotas` (`id`, `nim`, `nama`, `prodi`, `angkatan`, `status`, `foto`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '2010036', 'Pramudito Metra', 'MI', 'Lenovo', 'pasif', 'anggota/fYhFyFetnejgqcfM5nyUHK8lrRPYuW9BBbIWocIO.jpg', 2, '2025-05-21 02:13:18', '2025-05-21 02:47:31');

-- --------------------------------------------------------

--
-- Table structure for table `beritas`
--

CREATE TABLE `beritas` (
  `id` bigint UNSIGNED NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal` date NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `beritas`
--

INSERT INTO `beritas` (`id`, `judul`, `isi`, `gambar`, `tanggal`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'ISMA BAHARI AJAK MAHASISWA BARU GABUNG ORGANISASI KAMPUS JAYANUSA', 'Padang, 20 Juni 2025 — Isma Bahari, salah satu mahasiswa aktif di STMIK Jayanusa, mengajak seluruh mahasiswa baru untuk ikut berperan aktif dalam organisasi kemahasiswaan yang ada di lingkungan kampus. Melalui ajakan terbuka ini, Isma berharap semangat kebersamaan dan jiwa kepemimpinan dapat tumbuh sejak dini di kalangan mahasiswa.\r\n\r\n“Organisasi bukan sekadar tempat kumpul-kumpul. Di sinilah tempat kita belajar memimpin, bekerja sama, dan menghadapi berbagai tantangan di luar perkuliahan,” ujar Isma saat ditemui usai kegiatan pengenalan kampus.\r\n\r\nMenurutnya, banyak keuntungan yang bisa didapatkan mahasiswa jika aktif dalam organisasi, seperti memperluas relasi, meningkatkan kemampuan komunikasi, serta menambah pengalaman yang akan sangat berguna di dunia kerja nantinya.\r\n\r\nBerbagai organisasi mahasiswa di Jayanusa, seperti BEM, HIMA, UKM, dan komunitas kreatif lainnya, siap menampung minat dan bakat mahasiswa dari berbagai jurusan. Isma juga menegaskan bahwa organisasi terbuka untuk siapa saja yang ingin berkembang, tanpa memandang latar belakang.\r\n\r\n“Kalau kalian ingin jadi mahasiswa yang tidak hanya datang, duduk, dengar, dan pulang, maka ikutlah organisasi. Karena di sana kalian akan merasakan pengalaman yang berbeda dan penuh makna,” tambahnya.\r\n\r\nAjakan ini diharapkan dapat membuka mata para mahasiswa baru untuk lebih aktif dalam kehidupan kampus dan ikut serta membangun semangat solidaritas serta prestasi di Jayanusa.', 'berita/8oTVyQ3kpWdw7NmKiSnBXUMTM3UDgu3Mpm0ub5XI.jpg', '2025-05-21', 2, '2025-05-21 02:54:58', '2025-06-20 11:07:00'),
(2, 'FARHAN ADHA ARAHKAN MAHASISWA JAYANUSA UNTUK AKTIF BERORGANISASI: “JANGAN JADI MAHASISWA KUPU-KUPU!”', 'Padang, 20 Juni 2025 — Farhan Adha, salah satu mahasiswa aktif di STMIK Jayanusa, mengajak rekan-rekan mahasiswa, khususnya mahasiswa baru, untuk tidak ragu bergabung ke dalam organisasi kemahasiswaan di lingkungan kampus.\r\n\r\nDalam sebuah kesempatan diskusi santai usai acara pengenalan kampus, Farhan menekankan pentingnya peran organisasi sebagai wadah pengembangan diri di luar kelas.\r\n\r\n“Kalau cuma kuliah, pulang, kuliah, pulang terus, kita akan kehilangan banyak kesempatan berharga. Di organisasi, kita belajar hal-hal yang nggak kita dapat di kelas—mulai dari kerja tim, kepemimpinan, sampai cara menyelesaikan masalah,” ujar Farhan.\r\n\r\nIa juga menambahkan bahwa keterlibatan dalam organisasi seperti BEM, HIMA, dan berbagai UKM akan memperkaya pengalaman mahasiswa, memperluas jaringan, dan bahkan menjadi nilai plus saat masuk dunia kerja nantinya.\r\n\r\n“Jangan takut nggak bisa. Kita semua belajar dari nol. Justru di sinilah tempat kita salah, mencoba, dan akhirnya berkembang. Organisasi itu bukan buat orang yang sudah hebat, tapi untuk yang mau jadi hebat,” tambahnya.\r\n\r\nDengan semangat positif, Farhan berharap lebih banyak mahasiswa Jayanusa yang terlibat aktif, berkontribusi nyata, dan menjadikan masa kuliah mereka sebagai momen pertumbuhan yang menyeluruh—bukan sekadar mengejar IPK.', 'berita/rfaflst73FrSZtgvGVQvBhw7uXhsdxqXvVQbEhtC.jpg', '2025-06-20', 1, '2025-06-20 04:15:05', '2025-06-20 11:08:15');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('simawa_cache_admin@jayanusa.id|127.0.0.1', 'i:1;', 1748927114),
('simawa_cache_admin@jayanusa.id|127.0.0.1:timer', 'i:1748927114;', 1748927114),
('simawa_cache_uko@jayanusa.ac.id|127.0.0.1', 'i:1;', 1747821520),
('simawa_cache_uko@jayanusa.ac.id|127.0.0.1:timer', 'i:1747821520;', 1747821520);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_05_19_121408_create_beritas_table', 1),
(5, '2025_05_20_073337_create_model_anggotas_table', 1),
(6, '2025_05_21_100052_modify_gambar_column_in_beritas_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('A4MqJkw2uGtknnvlEOIfQ7934CJu6Eurn73IybPQ', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiWWtjd2JkWGVaQjMxa0d0dEEwemhyWlAxU1U2dE9tWktPa2Nna0x3TiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1750443033),
('pGVtjMvOxNQ1jr7wCAb8jre5ocnktsaFapqE2KsP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiT2dKZWs1NkZvTDdRWG80MUVlS2NUcmFLMFRwVVl2TE0yOUJTdmVKeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1750439093);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@jayanusa.ac.id', '2025-05-21 02:02:34', '$2y$12$A.YQ.suCKDq.q5V7eJyI3Ob.IXZWldpLmgogkIyBeAVL9sQ8.6mji', 'admin', 'YG9FIhL7lWIhjR0ay9WoE9CPk65CIr3uE0BO64jKXa1CmLj9XhPHcJX2hohA', '2025-05-21 02:02:35', '2025-05-21 02:02:35'),
(2, 'UKM Senja', 'senja@jayanusa.ac.id', '2025-05-21 02:02:35', '$2y$12$e577vx83qe0tRR.PmriL4ewUZH.enNk87lDEpUICQuYON.T3fmIVu', 'ukm', 'XsTXlrv5JvedQYtUFbEwTaZaNmq129TVaiMRwx0o1EcYoJfssaApeYVtg3nN', '2025-05-21 02:02:35', '2025-05-21 02:02:35'),
(3, 'UKM Robotik', 'robotik@jayanusa.ac.id', '2025-05-21 02:02:35', '$2y$12$iejytA/6FJN5ua6QGB4Ut.CvyWpFF9iu9rqmG1jRkOOsnUuMXM6Wi', 'ukm', 'TeW6pP9JfRHtYsHPnE36FdGPzSHd87R1T1c6j8u6FhyezZ93PIDQmf54NBwk', '2025-05-21 02:02:35', '2025-05-21 02:02:35'),
(4, 'MAPALA', 'mapala@jayanusa.ac.id', '2025-05-21 02:02:35', '$2y$12$.50u/r2DirrZhd2Q2RpcE.A..RSVkYhwEQDoiiPtvYua8bJ.IpOgi', 'ukm', 'CBKPYszDmh', '2025-05-21 02:02:35', '2025-05-21 02:02:35'),
(5, 'FSI', 'fsi@jayanusa.ac.id', '2025-05-21 02:02:35', '$2y$12$X8yBIT3rJ/XEiOdzLdRjB.R9CtGnXlTFiJw9tlIN9suUKmAEisZP.', 'ukm', 'TEkrJQDsWK', '2025-05-21 02:02:35', '2025-05-21 02:02:35'),
(6, 'UKM KWU', 'kwu@jayanusa.ac.id', '2025-05-21 02:02:36', '$2y$12$oRsEANcCzvrYSZtG5kSMIOFj1u3g5n5CEghYsG.Q4iufbiZKPEVOS', 'ukm', 'VCpg6yzApB', '2025-05-21 02:02:36', '2025-05-21 02:02:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggotas`
--
ALTER TABLE `anggotas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `anggotas_user_id_foreign` (`user_id`);

--
-- Indexes for table `beritas`
--
ALTER TABLE `beritas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `beritas_user_id_foreign` (`user_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anggotas`
--
ALTER TABLE `anggotas`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `beritas`
--
ALTER TABLE `beritas`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `anggotas`
--
ALTER TABLE `anggotas`
  ADD CONSTRAINT `anggotas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `beritas`
--
ALTER TABLE `beritas`
  ADD CONSTRAINT `beritas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
