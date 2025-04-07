<?php
$host = 'localhost';
$db   = 's202011190';
$user = 's202011190';
$pass = 'dssc137!!@';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("DB 연결 실패: " . $conn->connect_error);
}

if (isset($_FILES['image'])) {
  $fileName = basename($_FILES['image']['name']);
  $targetDir = "uploads/";
  $targetFile = $targetDir . $fileName;

  if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
    $stmt = $conn->prepare("INSERT INTO images (file_name) VALUES (?)");
    $stmt->bind_param("s", $fileName);
    $stmt->execute();
    echo "이미지 업로드 성공!";
  } else {
    echo "업로드 실패!";
  }
}
?>
