import XM_Dropdown from "@/js/vendor/xm_dropdown.min.js";

const existsInDOM = function (selector: any) {
    return document.querySelectorAll(selector).length;
};

const plugins = {

    createDropdown: function (options: any) {
        if ((
            (existsInDOM(options.container) || typeof options.containerElement !== 'undefined') && options.controlToggle) || ((existsInDOM(options.trigger) || typeof options.triggerElement !== 'undefined') && (existsInDOM(options.container) || typeof options.containerElement !== 'undefined'))) {
            //@ts-ignore       
            return new XM_Dropdown(options);
        }
    },
}

export default plugins;