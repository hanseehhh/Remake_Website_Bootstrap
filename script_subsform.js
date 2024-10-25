/* Form Subs */
document.getElementById('liveAlertBtn').addEventListener('click', function () {
    showAlert('Transaction Successful', 'success');
});

function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    alertPlaceholder.append(wrapper);

    setTimeout(() => {
        wrapper.remove();
    }, 3000);
}



