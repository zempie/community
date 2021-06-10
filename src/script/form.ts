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
}
export default Form;
