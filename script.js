document.addEventListener('DOMContentLoaded', function () {
    // Set the target date for the countdown (April 30, 2024)
    const targetDate = new Date('April 30, 2024').getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        // Get the current date and time
        const currentDate = new Date().getTime();

        // Calculate the difference between the target date and current date
        const timeDifference = targetDate - currentDate;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Check if the target date has passed
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'Expired';
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const text = "Coming Soon...";
    const typingContainer = document.querySelector('.typing-text');

    function typeWriter(text, i, callback) {
      if (i < text.length) {
        typingContainer.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(text, i, callback);
        }, 150);
      } else {
        setTimeout(callback, 1000); // Wait for 1 second before removing text
      }
    }

    function removeText(callback) {
      const currentText = typingContainer.innerHTML;
      const length = currentText.length;
      if (length > 0) {
        typingContainer.innerHTML = currentText.slice(0, -1);
        setTimeout(function() {
          removeText(callback);
        }, 100);
      } else {
        setTimeout(callback, 1000); // Wait for 1 second before typing again
      }
    }

    function startTyping() {
      typeWriter(text, 0, function() {
        removeText(startTyping);
      });
    }

    startTyping();
  });