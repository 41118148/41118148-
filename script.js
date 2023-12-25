function adjustText() {
    const studentInfo = document.getElementById('student-info');
    studentInfo.style.fontSize = '20px';
    studentInfo.style.color = 'blue';
  }
  
  function adjustProfile() {
    const profilePic = document.getElementById('profile-pic');
    profilePic.style.borderRadius = '50%';
    profilePic.style.borderWidth = '4px';
    profilePic.style.borderColor = 'red';
  }
  
  function changePhoto() {
    const profilePic = document.getElementById('profile-pic');
    profilePic.src = 'lifestyle.jpg';
  }
  