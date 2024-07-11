document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.getElementById("profile-image");
    const profileDescription = document.getElementById("profile-description");
    const editProfileButton = document.getElementById("edit-profile-button");
    const profileImageUpload = document.getElementById("profile-image-upload");
    const charCount = document.getElementById("char-count");

    // Load saved profile data
    const savedImage = localStorage.getItem("profileImage");
    const savedDescription = localStorage.getItem("profileDescription");

    if (savedImage) {
        profileImage.src = savedImage;
    }

    if (savedDescription) {
        profileDescription.value = savedDescription;
    }

    profileDescription.addEventListener("input", () => {
        const textLength = profileDescription.value.length;
        charCount.textContent = `${textLength}/40 caracteres`;

        if (textLength > 40) {
            profileDescription.value = profileDescription.value.slice(0, 40);
            charCount.textContent = "Limite de 40 caracteres atingido!";
        }
    });

    editProfileButton.addEventListener("click", () => {
        profileImageUpload.click();
    });

    profileImageUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImage.src = e.target.result;
                localStorage.setItem("profileImage", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    profileDescription.addEventListener("blur", () => {
        localStorage.setItem("profileDescription", profileDescription.value);
    });
});
