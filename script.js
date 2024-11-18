const hoverButton = document.getElementById(hoever-Button)
const hoverMessage = document.getElementById(hoverMessage)

hoverButton.addEventListener('mouseenter', () => {
    hoverMessage.textContent = 'You are hovering over the button!';
});
hoverButton.addEventListener ('mouseleave', () => {
    hoverMessage.textContent = 'You left the button!';
});

const keyinput = document.getElementById('key-input')
const keyMessage = document.getElementById ('key-message');

keyinput.addEventListener ('keyup', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});

const focusInput = document.getElementById ('focus-input');
const focusmessage = document.getAnimations ('focus-message');

focusInput,addEventListener ('focus', () => {
    focusMessage.textContent = 'The input field is in focus.';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'The input field lost focus.';
});

const buttonCotainer = document.getElementById ('button-container');
const delegationmessage = document.getElementById ('delegation-message');

buttonCotainer,addEventListener ('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `You clicked ${event.target.textContent}.`;
    }
});
