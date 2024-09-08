"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills');
    const toggleEducationButton = document.getElementById('toggle-education');
    const skillsSection = document.getElementById('skills');
    const educationSection = document.getElementById('education');
    // Helper function to toggle visibility
    function toggleVisibility(element) {
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
