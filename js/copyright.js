const date = new Date();
const year = date.getFullYear();

const copyRight = document.getElementById("copyright");
copyRight.innerHTML = "&copy; " + year + ". Сергей Цепилов";
