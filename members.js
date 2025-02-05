// Mailto function for members page. Anti-spam protection with username in base64.
function ml(clickedElement, username){
    clickedElement.href = "mail"+"to:" + window.atob(username)+"@emi"+"ch.edu";
}

// Create a LinkedIn badge in the specified column div that links to the specified LinkedIn profile.
// This is necessary because LinkedIn badges don't adjust to dark mode automatically.
function createLinkedinBadge(linkedinBadgeColumn, linkedinProfile) {
    // linkedinBadgeColumn is the column div that the badge will be appended to.
    // linkedinProfile is the profile name of the LinkedIn profile that the badge will link to.
    if (linkedinBadgeColumn) {
        const badgeContainer = document.createElement('div');
        // These attributes came from the LinkedIn badge generator.
        badgeContainer.className = 'badge-base LI-profile-badge';
        badgeContainer.dataset.locale = 'en_US';
        badgeContainer.dataset.size = 'large';
        badgeContainer.dataset.type = 'HORIZONTAL';
        badgeContainer.dataset.vanity = linkedinProfile;
        badgeContainer.dataset.version = 'v1';

        // For theme consistency with Bulma: https://bulma.io/documentation/features/dark-mode/#force-dark-mode-within-a-page
        // By default, use the theme of the user's preference.
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            badgeContainer.dataset.theme = 'dark';
        } else {
            badgeContainer.dataset.theme = 'light';
        }
        // Force theme if an ancestor has a theme class or data-theme attribute.
        linkedinBadgeAncestor = linkedinBadgeColumn;
        while (linkedinBadgeAncestor) {
            if (linkedinBadgeAncestor.classList && linkedinBadgeAncestor.classList.contains('theme-dark') || linkedinBadgeAncestor.dataset && linkedinBadgeAncestor.dataset.theme && linkedinBadgeAncestor.dataset.theme === 'dark') {
                badgeContainer.dataset.theme = 'dark';
                break;
            } else if (linkedinBadgeAncestor.classList && linkedinBadgeAncestor.classList.contains('theme-light') || linkedinBadgeAncestor.dataset && linkedinBadgeAncestor.dataset.theme && linkedinBadgeAncestor.dataset.theme === 'light') {
                badgeContainer.dataset.theme = 'light';
                break;
            }
            linkedinBadgeAncestor = linkedinBadgeAncestor.parentNode;
        }

        const badgeLink = document.createElement('a');
        badgeLink.className = 'badge-base__link LI-simple-link';
        badgeLink.href = 'https://www.linkedin.com/in/' + linkedinProfile + '?trk=profile-badge';

        badgeContainer.appendChild(badgeLink);

        linkedinBadgeColumn.appendChild(badgeContainer);
    } else {
        console.error('Could not create LinkedIn badge: Column div not found.');
    }
}
