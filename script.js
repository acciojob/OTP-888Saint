//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Automatically focus on the next input when typing
codes.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    // Handle backspace to focus the previous input
    input.addEventListener('keydown', (event) => {
        if (event.key === "Backspace" && input.value.length === 0 && index > 0) {
            codes[index - 1].focus();
        }
    });
});
