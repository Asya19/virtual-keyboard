// // Массив знаков на два языка
// const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];
// const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];

// // Массив знаков, когда зажат SHIFT
// const en_shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];
// const ru_shift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];

// const keyCodes = ['apostrophe', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
// const classForLengthBnt = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', ' specialBtn', '', '', '', '', '', '', '', '', '', '', '', '', '', 'last specialBtn', 'twoBtnLength specialBtn', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', 'twoBtnLength specialBtn', '', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', 'twoBtnLength specialBtn', 'specialBtn', 'specialBtn', 'spaceBtn', 'specialBtn', 'twoBtnLength specialBtn', '', '', 'last'];

// Массив знаков на два языка
const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

// Массив знаков, когда зажат SHIFT
const en_shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
const ru_shift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const keyCodes = ['Apostrophe', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const classForLengthBnt = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', ' specialBtn', '', '', '', '', '', '', '', '', '', '', '', '', '', 'last specialBtn', 'twoBtnLength specialBtn', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', 'twoBtnLength specialBtn', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', 'twoBtnLength specialBtn', 'specialBtn', 'specialBtn', 'spaceBtn', 'specialBtn', '', '', '', 'specialBtn last'];

const BODY = document.querySelector('body');
const KEYBOARD = document.querySelector('keyboard');

let shiftState = false;
let capsState = false;

let lang;

if (localStorage.getItem('cur_language') !== undefined) lang = localStorage.getItem('cur_language'); else lang = 'en';



function CreateKeyboard() {
  let content = `<textarea></textarea>
                 <div class="keyboard"></div>`;
                //  console.log(content);

  BODY.insertAdjacentHTML('afterbegin', content);
  let KEYBOARD = document.querySelector('.keyboard');


  for (let i in classForLengthBnt) {
    const addClass = classForLengthBnt[i];
    let content = `<div class="oneBtn ${addClass}">
                <span data-code="${keyCodes[i]}">${getLayOutKeyboard(i)}</span>
              </div>`;
    KEYBOARD.insertAdjacentHTML('beforeend', content);
  };
  let mes = `<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe Shift + Ctrl<\p>`;
  BODY.insertAdjacentHTML('beforeend', mes);
}


function changeKeyboardLayout() {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = getCurrentKeyByCode(i);
    // console.log(spans.length);
  }
}

function getCurrentKeyByCode(i) {
  // const len = KEY_CODES.length;
  let index = 0;
  for (let i in keyCodes) {
    if (keyCodes[i] === i) {
      index = i;
      break;
    }
  }
  return getLayOutKeyboard(index);
}





function getLayOutKeyboard(i) {
  if (shiftState === true || capsState === true) {
    if (lang === 'en') return en_shift[i];
    return ru_shift[i];
  }
  if (lang === 'en') return en[i];
  return ru[i];
}

window.onload = () => {
  CreateKeyboard();
  // changeKeyboardLayout();
  if (localStorage.getItem('cur_language') !== undefined) lang = localStorage.getItem('cur_language'); else lang = 'en';
};

  // console.log(ru_shift.length);