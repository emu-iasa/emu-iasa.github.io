# emu-iasa.github.io
<a class="btn btn-primary" href="https://emu-iasa.github.io/" role="button">IASA Website Link</a>
Student run cyber security interest group at Eastern Michigan University 

~~Edit the calendar file with the latest weekly meeting minutes. Every Week (calendar.html)~~
The calendar now has a Google Calendar embed. The webmaster Google account has access to this.

~~Replace the weekly meeting minute on the main page. Every week (index.html)~~
We now take meeting minutes in Google Docs or Word docs in Sharepoint.

## LinkedIn Embeds
To generate regular LinkedIn profile embeds, get the name in each profile URL:
```
https://www.linkedin.com/in/PROFILE-NAME-HERE/
```

Replace the name into the following URL:
```
https://www.linkedin.com/badges/profile/create?vanityname=PROFILE-NAME-HERE&preferredlocale=en_US&trk=public_profile-settings_badge
```

To support dark mode, we now create LinkedIn embeds dynamically with JavaScript. If something breaks, check createLinkedinBadge() in members.js.
Use createLinkedinBadge() and set the corresponding ID to the column in the member's card in members.html.
Within each member card, you'll see something like this:
```
    <script>
    createLinkedinBadge(
        document.querySelector('#linkedin-badge-MEMBER-NAME-HERE'), // The member card div column to embed the badge in.
        'PROFILE-NAME-HERE' // LinkedIn profile name from URL.
    );
    </script>
```
It worked best to use script tags within the cards. Having this code inside member.js wasn't working.