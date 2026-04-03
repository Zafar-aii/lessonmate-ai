document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lesson-plan-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const resultDiv = document.getElementById('lesson-plan-result');
            const formData = new FormData(form);
            const lessonDetails = {
                class: formData.get('class'),
                subject: formData.get('subject'),
                topic: formData.get('topic'),
                duration: formData.get('duration'),
                date: formData.get('date'),
            };

            // For now, we'll just display the collected data.
            // In a real application, you would send this data to a server-side AI to generate the lesson plan.
            resultDiv.innerHTML = `
                <h2>Generated Lesson Plan Details</h2>
                <p><strong>Class:</strong> ${lessonDetails.class}</p>
                <p><strong>Subject:</strong> ${lessonDetails.subject}</p>
                <p><strong>Topic:</strong> ${lessonDetails.topic}</p>
                <p><strong>Duration:</strong> ${lessonDetails.duration} minutes</p>
                <p><strong>Date:</strong> ${lessonDetails.date}</p>
            `;
        });
    }
});
