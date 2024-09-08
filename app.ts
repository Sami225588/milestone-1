document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
    const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement | null;
    const skillsSection = document.getElementById('skills') as HTMLElement | null;
    const educationSection = document.getElementById('education') as HTMLElement | null;

    // Helper function to toggle visibility
    function toggleVisibility(element: HTMLElement | null) {
        if (element) {
            // Check if the element is currently visible
            const isCurrentlyVisible = element.style.display === 'block' || element.style.display === '';
            // Set the element's display property based on its current visibility
            element.style.display = isCurrentlyVisible ? 'none' : 'block';
        }
    }

    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', () => {
            toggleVisibility(skillsSection);
        });
    }

    if (toggleEducationButton) {
        toggleEducationButton.addEventListener('click', () => {
            toggleVisibility(educationSection);
        });
    }
});
