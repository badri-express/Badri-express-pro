
function togglePassword() {
  const input = document.getElementById('password');
  input.type = input.type === 'password' ? 'text' : 'password';
}
document.addEventListener('DOMContentLoaded', () => {
  console.log("الواجهة جاهزة.");
});
