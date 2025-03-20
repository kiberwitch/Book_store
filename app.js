function toggleHeart(icon) {
    const heartId = icon.getAttribute('data-id'); 
    icon.classList.toggle('active'); 
  
    
    const isActive = icon.classList.contains('active');
    localStorage.setItem(`heartActive-${heartId}`, isActive);
  }


  function loadHeartsState() {
    const heartIcons = document.querySelectorAll('.heart-icon');
  
    heartIcons.forEach((icon) => {
      const heartId = icon.getAttribute('data-id');
      const isActive = localStorage.getItem(`heartActive-${heartId}`) === 'true';
  
      if (isActive) {
        icon.classList.add('active');
      }
    });
  }
  

  document.addEventListener('DOMContentLoaded', loadHeartsState);