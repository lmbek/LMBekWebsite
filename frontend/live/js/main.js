const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    alert("Jeg beklager, men kontaktformularen kommer først til at virke i uge 26. Du kan kontakte mig på lars@beksoft.dk eller gennem min linkedin profil: https://www.linkedin.com/in/lmbek/");
})