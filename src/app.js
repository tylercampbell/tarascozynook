import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

// const formElement = document.querySelector('form[name="contact"]');
// const messageInput = document.getElementById('message');
// const senderInput = document.getElementById('sender');
// const submitButton = document.getElementById('submit');
// const promptElement = document.getElementById('prompt');
// const successElement = document.getElementById('success');
// const canvasElement = document.createElement('canvas');

// function enableSubmitButton() {
//   submitButton.disabled = (messageInput.value.trim() === '' || senderInput.value.trim() === '');
// }

// function getTextWidth(el) {
//   const context = canvasElement.getContext('2d');
//   const font = window.getComputedStyle(el, null).getPropertyValue('font');
//   const text = el.value;
//   context.font = font;
//   const textMeasurement = context.measureText(text);
//   return textMeasurement.width;
// }

// function setSenderInputWidth() {
//   const width = Math.floor(getTextWidth(senderInput)) + 30; // add 30px to pad the input
//   senderInput.style.width = `${width}px`;
// }

// function getBaseScrollHeight(textarea) {
//   const savedValue = textarea.value;
//   textarea.value = '';
//   const scrollHeight = textarea.scrollHeight;
//   textarea.value = savedValue;
//   textarea._baseScrollHeight = scrollHeight;
//   return scrollHeight;
// }

// function setMessageTextareaHeight(e) {
//   const textarea = e.target;
//   if (textarea.classList.contains('autoExpand') && textarea.nodeName === 'TEXTAREA') {
//     const rows = parseInt(textarea.getAttribute('data-min-rows'), 10);
//     textarea.rows = rows;
//     const baseScrollHeight = textarea._baseScrollHeight || getBaseScrollHeight(textarea);
//     const currentScrollHeight = textarea.scrollHeight;
//     textarea.rows = currentScrollHeight < baseScrollHeight ? rows : rows + Math.ceil((currentScrollHeight - baseScrollHeight) / 16);
//   }
// }

// formElement.addEventListener('input', (e) => {
//   if (e.target === message || e.target === sender) {
//     enableSubmitButton();
//     if (e.target === sender) {
//       setSenderInputWidth(e);
//     } else {
//       setMessageTextareaHeight(e);
//     }
//   }
// });

// formElement.addEventListener('submit', handleFormSubmission);

// function handleFormSubmission(e) {
//   e.preventDefault();

//   const form = e.target;
//   const { action } = form;

//   const headers = {
//     'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
//     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//   };

//   const formData = new FormData(form);
//   const body = new URLSearchParams(formData).toString();

//   fetch(action, { method: 'POST', headers, body })
//     .then(handleResponse)
//     .catch(handleError);
// }

// function handleResponse(response) {
//   if (response.ok) {
//     handleFormSubmissionSuccess();
//   } else {
//     throw new Error(`Network response was not ok. Response status: ${response.status}`);
//   }
// }

// function handleFormSubmissionSuccess() {
//   promptElement.classList.add('opacity-0');
//   formElement.classList.add('hidden');
//   successElement.classList.replace('hidden', 'grid');
// }

// function handleError(error) {
//   console.error('Error:', error);
// }
