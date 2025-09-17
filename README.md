The cvForm.html file contains a form where the user can enter information (name, email, phone number,
location, GitHub, LinkedIn, about you, skills, work experience, education, and achievements).
After completing the form, the user clicks the ”Save CV as PDF” button. The generateCV() function in
the cvScript.js file is activated. This function:
Takes the information from the form and places it in the CV template (cvTemplate) at the bottom of the
page.
Converts this template to PDF using the html2pdf library and downloads it to the computer.
