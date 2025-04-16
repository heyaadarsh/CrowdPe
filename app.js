console.log("Crowdfund App Loaded 🚀");


document.getElementById("title").addEventListener("input", (e) => {
    document.getElementById("previewTitle").textContent = e.target.value || "Your Campaign Title";
  });
  
  document.getElementById("description").addEventListener("input", (e) => {
    document.getElementById("previewDescription").textContent = e.target.value || "Campaign description will appear here.";
  });
  
  document.getElementById("goal").addEventListener("input", (e) => {
    document.getElementById("previewGoal").textContent = `Goal: ₹${e.target.value || 0}`;
  });
  
  document.getElementById("imageUpload").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const previewImage = document.getElementById("previewImage");
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.style.display = "none";
    }
  });
  