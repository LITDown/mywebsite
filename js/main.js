<script>
document.addEventListener("DOMContentLoaded", function() {
    // Function to animate counting
    function animateCount(element) {
        const endValue = parseInt(element.getAttribute('data-count'), 10);
        const duration = 2000; // Duration of the animation in milliseconds
        const stepTime = Math.abs(Math.floor(duration / endValue));
        let currentValue = 0;

        function updateCount() {
            currentValue += 1;
            element.innerText = currentValue;
            if (currentValue < endValue) {
                setTimeout(updateCount, stepTime);
            } else {
                element.innerText = endValue; // Ensure it ends exactly at data-count
            }
        }

        updateCount();
    }

    // Initialize count animation for each .stat element
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        animateCount(stat);
    });
});
</script>
