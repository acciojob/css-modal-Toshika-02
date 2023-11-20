//your JS code here. If required.
document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
});

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none';
  }
};

