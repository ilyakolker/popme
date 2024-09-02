document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const userImage = document.getElementById('userImage');
            userImage.src = e.target.result;
            userImage.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    const userImage = document.getElementById('userImage');
    userImage.style.display = 'none';
    userImage.src = '';
    document.getElementById('imageUpload').value = '';
});
