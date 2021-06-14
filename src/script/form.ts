import app from "@/script/utils/app";

class Form {
    static formInput() {
        app.querySelector(".form-input", function (elements: any) {
            for (const el of elements) {
                if (el.classList.contains("always-active")) continue;

                const input = el.querySelector("input"),
                    textarea = el.querySelector("textarea"),
                    activeClass = "active";

                let inputItem:
                    | {
                        addEventListener: (
                            arg0: string,
                            arg1: { (): void; (): void }
                        ) => void;
                        value: string;
                    }
                    | undefined = undefined;

                if (input) inputItem = input;
                if (textarea) inputItem = textarea;

                if (inputItem) {
                    inputItem.addEventListener("focus", function () {
                        el.classList.add(activeClass);
                    });

                    inputItem.addEventListener("blur", function () {
                        if (inputItem!.value === "") {
                            el.classList.remove(activeClass);
                        }
                    });
                }
            }
        })
    }

    static formSwitch(){
        app.querySelector('.form-switch', function (switchInputs) {
            for (const switchInput of switchInputs) {
              const toggleSwitch = function () {
                switchInput.classList.toggle('active');
              };
          
              switchInput.addEventListener('click', toggleSwitch);
            }
          });
    }

    static interactiveInput(){
        app.querySelector('.interactive-input', function (elements) {
            for (const el of elements) {
              const input = el.querySelector('input'),
                    inputResetIcon = el.querySelector('.interactive-input-action'),
                    activeClass = 'active';
          
              if (input) {
                let previousValue = '';
          
                const resetInputOnKey = (e: { keyCode: number; }) => {
                    // ESC key pressed
                    if (e.keyCode === 27) {
                        input.value = '';
                        setActiveClass();
                        window.removeEventListener('keydown', resetInputOnKey);
                    }
                };
          
                const setActiveClass = function () {
                  if (previousValue === '' && input.value !== '') {
                    el.classList.add(activeClass);
                    window.addEventListener('keydown', resetInputOnKey);
                  } else if (input.value === '') {
                    el.classList.remove(activeClass);
                    window.removeEventListener('keydown', resetInputOnKey);
                  }
                };
          
                input.addEventListener('input', setActiveClass);
          
                if (inputResetIcon) {
                  inputResetIcon.addEventListener('click', function () {
                    input.value = '';
                    input.focus();
                    setActiveClass();
                  });
                }
              }
            }
          });
    }
    
}
export default Form;
