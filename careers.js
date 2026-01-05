// Careers Page JavaScript

let currentPosition = '';

// Clear all job filters
function clearAllJobFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Show all position boxes
    document.querySelectorAll('.position-box').forEach(box => {
        box.style.display = 'flex';
    });
}

// Apply job filters
function applyJobFilters() {
    // Get selected filters
    const selectedLocations = Array.from(document.querySelectorAll('input[name="location"]:checked')).map(cb => cb.value);
    const selectedDepartments = Array.from(document.querySelectorAll('input[name="department"]:checked')).map(cb => cb.value);
    const selectedRoleTypes = Array.from(document.querySelectorAll('input[name="role-type"]:checked')).map(cb => cb.value);
    const selectedExperience = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(cb => cb.value);
    
    // Get all position boxes
    const positionBoxes = document.querySelectorAll('.position-box');
    
    positionBoxes.forEach(box => {
        const location = box.getAttribute('data-location');
        const department = box.getAttribute('data-department');
        const roleType = box.getAttribute('data-role-type');
        const experience = box.getAttribute('data-experience');
        
        // Check if box matches all selected filters
        const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(location);
        const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(department);
        const matchesRoleType = selectedRoleTypes.length === 0 || selectedRoleTypes.includes(roleType);
        const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(experience);
        
        // Show or hide based on filter match
        if (matchesLocation && matchesDepartment && matchesRoleType && matchesExperience) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
}

// Open application modal for specific position
function openApplicationModal(position) {
    currentPosition = position;
    const modal = document.getElementById('applicationModal');
    const positionNameElement = document.getElementById('positionName');
    
    if (modal && positionNameElement) {
        positionNameElement.textContent = position;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Open general application modal
function openGeneralApplicationModal() {
    currentPosition = 'General Application';
    const modal = document.getElementById('applicationModal');
    const positionNameElement = document.getElementById('positionName');
    
    if (modal && positionNameElement) {
        positionNameElement.textContent = 'General Application';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close application modal
function closeApplicationModal() {
    const modal = document.getElementById('applicationModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        const form = document.getElementById('applicationForm');
        if (form) {
            form.reset();
        }
    }
}

// Initialize careers page
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyJobFilters);
    });
    
    // Handle form submission
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(applicationForm);
            const data = {
                position: currentPosition,
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                experience: formData.get('experience'),
                portfolio: formData.get('portfolio'),
                coverLetter: formData.get('coverLetter'),
                resume: formData.get('resume')
            };
            
            // Here you would typically send this data to your server
            console.log('Application submitted:', data);
            
            // Show success message
            alert(`Thank you for applying for ${currentPosition}! We'll review your application and get back to you within 3 business days.`);
            
            // Close modal
            closeApplicationModal();
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('applicationModal');
            if (modal && modal.classList.contains('active')) {
                closeApplicationModal();
            }
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
