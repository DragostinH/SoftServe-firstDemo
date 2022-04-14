const contactUs = (() => {
    const contactUsForm = document.querySelector('.contact-us-form');
    const submitBtn = document.querySelector('.submit-btn');
    const messageBox = document.querySelector('.message-box');
    const nameField = document.getElementById('name');
    const emailAddressField = document.getElementById('email-address');
    const commentField = document.getElementById('comment');


    submitBtn.addEventListener('click', async () => {
        if (nameField.value.trim() !== '' &&
            emailAddressField.value.trim() !== '' &&
            commentField.value.trim() !== '') {
            toggleSubmitMsg(messageBox);
            contactUsForm.reset();
        }
    })

})();

function toggleSubmitMsg(messageBox) {
    messageBox.style.display = 'flex';
    setTimeout(() => {
        messageBox.style.opacity = 1;

    }, 0);

    setTimeout(() => {
        messageBox.style.opacity = 0;
    }, 2000);
}
