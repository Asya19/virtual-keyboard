window.onload = () => {

  // Массив знаков на два языка
  const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
  const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

  // Массив знаков, когда зажат SHIFT
  const en_shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];
  const ru_shift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'Shift', 'Ctrl', 'Win', 'Alt', '__________', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

  const keyCodes = ['Apostrophe', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
  const classForLengthBnt = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', ' specialBtn', '', '', '', '', '', '', '', '', '', '', '', '', '', 'last specialBtn', 'twoBtnLength specialBtn capsButton', '', '', '', '', '', '', '', '', '', '', '', 'twoBtnLength last specialBtn', 'twoBtnLength specialBtn key_leftShift', '', '', '', '', '', '', '', '', '', '', 'arrow', 'twoBtnLength last specialBtn key_rightShift', 'twoBtnLength specialBtn', 'specialBtn', 'specialBtn', 'spaceBtn arrow', 'specialBtn', 'arrow', 'arrow', 'arrow', 'specialBtn last'];

  const BODY = document.querySelector('body');

  let shiftState = false;
  let capsState = false;
  
  let lang = 'en';
  let caps = 'off';
  let shift = false;

  CreateKeyboard();
  let textArea = document.querySelector('textarea');

  // должно быть в классе
  function CreateKeyboard() {
    languageCheck();
    let content = `<textarea class="textArea"></textarea>
                  <div class="keyboard"></div>`;
    BODY.insertAdjacentHTML('afterbegin', content);

    let KEYBOARD = document.querySelector('.keyboard');

    for (let i in classForLengthBnt) {
      const addClass = classForLengthBnt[i];
      // let content = `<div class="oneBtn key ${addClass}" data-code="${keyCodes[i]}" data-ru-shift="${ru[i]}" data-en-shift="${en[i]}">
      //                   <span>${getLayOutKeyboard(i)}</span>
      //               </div>`;
      let content = `<div class="oneBtn key ${addClass}" data-code="${keyCodes[i]}" data-ru-shift="${ru_shift[i]}" data-en-shift="${en_shift[i]}" data-ru="${ru[i]}" data-en="${en[i]}">
      ${getLayOutKeyboard(i)}
                    </div>`;
      KEYBOARD.insertAdjacentHTML('beforeend', content);
    };
    let mes = `<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe Shift + Alt<\p>`;
    BODY.insertAdjacentHTML('beforeend', mes);
  }

  function languageCheck() {
    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
    } else {
      localStorage.setItem('lang', lang);
    }
  }

  function getLayOutKeyboard(i) {
    if (shiftState === true || capsState === true) {
      if (lang === 'en') return en_shift[i];
      return ru_shift[i];
    }
    if (lang === 'en') return en[i];
    return ru[i];
  }

  function languageChange(event) {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    localStorage.setItem('lang', lang);
    updateKeyboard(event);
  }
  function keyPress(event, button, dataCode) {
    let text = '';
    let cursor = textArea.selectionStart;
    event.preventDefault();
    textArea.focus();

    if (dataCode === 'CapsLock') changeCapsLock(event);
    if (dataCode === 'Tab') text = '    ';
    if (dataCode === 'Space') text = ' ';
    if (dataCode === 'Enter') text = '\n';
    if (dataCode === 'Backspace') text = '-1';
    if (dataCode === 'Delete') text = '1-';
    if (dataCode === 'ShiftLeft' || dataCode === 'ShiftRight') updateKeyboard(event);
    if (dataCode === 'ArrowLeft' && cursor > 0) textArea.setSelectionRange(cursor - 1, cursor - 1);

    if ((dataCode === 'AltLeft' && (event.shiftKey || shift)) || (dataCode === 'AltRight' && (event.shiftKey || shift)) || 
        (dataCode === 'ShiftLeft' && event.altKey) || (dataCode === 'ShiftRight' && event.altKey)) {
      languageChange(event);
      removeShift(event);
    }

    if (dataCode === 'ArrowRight') {
      console.log('ArrowRight');
      cursor = textArea.selectionEnd;
      textArea.setSelectionRange(cursor + 1, cursor + 1);
    }

    if (dataCode === 'ArrowUp') {
      const textBeforeCursor = textArea.value.substring(0, cursor).split('\n');

      // если нет вводов или строка длиннее 57 символов
      if (textBeforeCursor.length === 1 || textBeforeCursor[textBeforeCursor.length - 1].length >= 57) 
        cursor = -57;

      // если предыдущая строка длиннее позиции курсора в текущей строке
      else if (textBeforeCursor[textBeforeCursor.length - 1].length <= textBeforeCursor[textBeforeCursor.length - 2].length % 57)
        cursor -= (textBeforeCursor[textBeforeCursor.length - 2].length % 57) + 1;
      
      else
        cursor -= textBeforeCursor[textBeforeCursor.length - 1].length + 1
      
      if (cursor < 0) cursor = 0;
      textArea.setSelectionRange(cursor, cursor);
    }

    if (dataCode === 'ArrowDown') {
      cursor = textArea.selectionEnd;

      const textBeforeCursor = textArea.value.substring(0, cursor).split('\n');
      const textAfterCursor = textArea.value.substring(textArea.selectionEnd).split('\n');

      // если нет вводов или следующая строка длиннее 57 символов
      if (textAfterCursor.length === 1 || textAfterCursor[0].length >= 57) cursor += 57;

      // если следующая строка короче позиции курсора
      else if ((textBeforeCursor[textBeforeCursor.length - 1].length % 57) > textAfterCursor[1].length)
        cursor += textAfterCursor[0].length + textAfterCursor[1].length + 1;

      // если текущая строка очень длинная
      else if ((((textBeforeCursor[textBeforeCursor.length - 1].length) + textAfterCursor[0].length) > 57))
        cursor += textAfterCursor[0].length;

      // если следующая строка длиннее позиции курсора
      else
        cursor += (textBeforeCursor[textBeforeCursor.length - 1].length % 57) + textAfterCursor[0].length + 1;

      textArea.setSelectionRange(cursor, cursor);

    }

    if ((!button.classList.contains('specialBtn')) && (!button.classList.contains('arrow'))) {
      text = button.textContent.trim();
      removeShift(event);
    }

    if (text) {
      let textAfterCursor = textArea.value.substring(textArea.selectionEnd);
      let textBeforeCursor = textArea.value.substring(0, cursor);

      if (text === '-1') {
        text = '';
        if (cursor === textArea.selectionEnd) {
          textBeforeCursor = textBeforeCursor.slice(0, -1);
          cursor -= (cursor > 0) ? 2 : 1;
        } else cursor -= 1;
      }

      if (text === '1-') {
        text = '';
        if (cursor === textArea.selectionStart) {
          console.log(cursor);
          textAfterCursor = textAfterCursor.slice(1);
          cursor -= (cursor > 0) ? 1 : 1;
        } else cursor -= 1;
      }
      
      textArea.value = textBeforeCursor + text + textAfterCursor;
      textArea.setSelectionRange(cursor + 1, cursor + 1);
      if (text === '    ') textArea.setSelectionRange(cursor + 4, cursor + 4);
    }
    
  }
  // должно быть в классе
  function changeCapsLock(event) {
    if (caps === 'on') caps = 'off';
    else caps = 'on';

    capsLock();
    updateKeyboard(event);
  }

  function updateKeyboard(event) {
    if (event.shiftKey || shift) {
      document.querySelectorAll('.key').forEach((e) => {

        if (e.dataset[`${lang}Shift`] && !(e.classList.contains('specialBtn'))) {
          if (caps === 'on' && !(e.classList.contains('specialBtn'))) e.innerHTML = e.dataset[`${lang}Shift`].toLowerCase();
          else e.innerHTML = e.dataset[`${lang}Shift`];
        }
        else if (e.dataset[lang] && !(e.classList.contains('specialBtn'))) e.innerHTML = e.dataset[lang];
      });
    }
    else {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset[lang] && !(e.classList.contains('specialBtn'))) {
          if (caps === 'on' && !(e.shiftKey || shift) && !(e.classList.contains('specialBtn'))) 
            e.innerHTML = e.dataset[lang].toUpperCase();
          else e.innerHTML = e.dataset[lang];
        }
      });
    }
  }

  function removeShift(event) {
    if (shift) {
      shift = !shift;
      document.querySelector('.key_leftShift').classList.remove('active');
      document.querySelector('.key_rightShift').classList.remove('active');
      updateKeyboard(event);
    }
  }

  // меняет цвет текста capsLock в зависимости от того, вкл или выкл
  function capsLock() {
    if (caps === 'on') document.querySelector('.capsButton').classList.add('capsOn');
    else document.querySelector('.capsButton').classList.remove('capsOn');
  }



  document.addEventListener('keydown', (event) => {
    const currentButton = document.querySelector(`[data-code=${event.code}]`);
    if (currentButton) {
      currentButton.classList.add('active');
      keyPress(event, currentButton, event.code);
    }
  });

  document.addEventListener('keyup', (event) => {
    const currentButton = document.querySelector(`[data-code=${event.code}]`);
    if (currentButton) {
      currentButton.classList.remove('active');
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        removeShift(event);
        updateKeyboard(event);
      }
    }
  });
  document.querySelector('.keyboard').addEventListener('click', (event) => {
    if (event.target.closest('.key')) {
      const currentButton = event.target.closest('.key');

      if (currentButton.dataset.code === 'ShiftLeft' || currentButton.dataset.code === 'ShiftRight') {
        shift = !shift;
        currentButton.classList.toggle('active');
      }
      keyPress(event, currentButton, currentButton.dataset.code);
    }
  });

};