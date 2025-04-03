const videos = document.querySelectorAll('.hover-video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    console.log("Video hover started");
    video.play(); // Start the video when hovered
  });

  video.addEventListener('mouseleave', () => {
    console.log("Video hover ended");
    video.pause(); // Pause the video when the hover ends
    video.currentTime = 0; // Optionally reset the video to the beginning
  });
});
