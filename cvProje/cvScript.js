function generateCV() {
    
    document.getElementById("nameOutput").textContent = document.getElementById("nameInput").value || "Ad Soyad";
    document.getElementById("aboutOutput").textContent = document.getElementById("description").value || "Hakkınızda kısa bir açıklama";
    document.getElementById("emailOutput").textContent = document.getElementById("email").value || "-";
    document.getElementById("phoneOutput").textContent = document.getElementById("phone").value || "-";
    document.getElementById("locationOutput").textContent = document.getElementById("location").value || "-";
    document.getElementById("githubOutput").textContent = document.getElementById("github").value || "-";
    document.getElementById("linkedinOutput").textContent = document.getElementById("linkedin").value || "-";
    document.getElementById("skillsOutput").textContent = document.getElementById("skill").value || "-";
    document.getElementById("worksOutput").textContent = document.getElementById("work").value || "-";
    document.getElementById("educationsOutput").textContent = document.getElementById("education").value || "-";
    document.getElementById("achievementsOutput").textContent = document.getElementById("achievement").value || "-";

    const cvDiv = document.getElementById("cvTemplate");
    cvDiv.style.display = "block";

    
    requestAnimationFrame(() => {
        setTimeout(() => {
            html2pdf()
                .from(cvDiv)
                .set({
                    margin: 0.5,
                    filename: "cv.pdf",
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
                })
                .save()
                .then(() => {
                    setTimeout(() => {
                        cvDiv.style.display = "none";
                    }, 500);
                });


           
            console.log("İş Deneyimi:", document.getElementById("worksOutput").textContent);
            console.log("Eğitim:", document.getElementById("educationsOutput").textContent);
            console.log("Başarılar:", document.getElementById("achievementsOutput").textContent);

            cvDiv.style.display = "block";
            cvDiv.scrollIntoView({ behavior: "auto", block: "start" }); 

        }, 500);
    });
}
