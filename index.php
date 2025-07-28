<?php
if (file_get_contents('function.php') == '') {
	header('Location: '.'/install/');
} 
require_once('function.php');
session_start();

if (is_user()) {
	redirect('home.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Admin Login</title>

	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

	<!-- Bootstrap 5 -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

	<!-- Icons -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

	<!-- AOS (optional for fade-in animation) -->
	<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

	<!-- Custom CSS -->
	<style>
		body {
			background: linear-gradient(135deg, #74ebd5, #ACB6E5);
			font-family: 'Poppins', sans-serif;
			min-height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.login-card {
			background: rgba(255, 255, 255, 0.9);
			padding: 40px 30px;
			border-radius: 15px;
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
			max-width: 400px;
			width: 100%;
			backdrop-filter: blur(10px);
		}
		.login-card h2 {
			font-weight: 600;
			margin-bottom: 20px;
			text-align: center;
		}
		.login-card .form-control {
			height: 50px;
			border-radius: 10px;
			padding-left: 15px;
		}
		.login-card .btn-custom {
			background-color: #6C63FF;
			color: #fff;
			font-weight: 500;
			border-radius: 10px;
			height: 50px;
			transition: background 0.3s ease;
		}
		.login-card .btn-custom:hover {
			background-color: #4e46d4;
		}
		.login-icon {
			font-size: 48px;
			color: #6C63FF;
			text-align: center;
			display: block;
			margin-bottom: 10px;
		}
		.form-control {
			border: 1px solid #ccc;
		}
		.form-control:focus {
    		border-color: #ced4da !important; 
    		box-shadow: none !important;      
		}
		.error-box {
			margin-bottom: 15px;
		}
	</style>
</head>
<body>
	<div class="login-card" data-aos="fade-up">
		<div class="login-icon">
			<i class="fas fa-user-lock"></i>
		</div>
		<h2>Admin Login</h2>

		<?php if (!empty($_GET['error'])): ?>
			<div class="alert alert-danger error-box alert-dismissible fade show" role="alert">
				<?php echo $_GET['error']; ?>
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		<?php endif ?>

		<form action="signin_post.php" method="post">
			<div class="mb-3">
				<input type="text" name="username" class="form-control" placeholder="Username" required>
			</div>
			<div class="mb-4">
				<input type="password" name="password" class="form-control" placeholder="Password" required>
			</div>
			<div class="d-grid">
				<button type="submit" id="loginBtn" class="btn btn-custom">
					<span class="spinner-border spinner-border-sm d-none" id="spinner" role="status" aria-hidden="true"></span>
					<span id="btn-text">Sign In</span>
				</button>
			</div>

		</form>
	</div>

	<!-- Bootstrap Bundle -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

	<!-- AOS Animation -->
	<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
	<script>
		AOS.init({ duration: 1000 });
	</script>
	<script>
		const loginBtn = document.getElementById('loginBtn');
		const spinner = document.getElementById('spinner');
		const btnText = document.getElementById('btn-text');

		document.querySelector('form').addEventListener('submit', function () {
			loginBtn.disabled = true;
			spinner.classList.remove('d-none');
			btnText.textContent = 'Logging in...';
		});
	</script>
</body>
</html>
