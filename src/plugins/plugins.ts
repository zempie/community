

const existsInDOM = function (selector: any) {
    
    console.log(selector,document.querySelectorAll(selector))
    return document.querySelectorAll(selector).length;
};

const plugins = {

    createDropdown: function (options: any) {
        console.log(options)
        if ((
            (existsInDOM(options.container) || typeof options.containerElement !== 'undefined') && options.controlToggle) || ((existsInDOM(options.trigger) || typeof options.triggerElement !== 'undefined') && (existsInDOM(options.container) || typeof options.containerElement !== 'undefined'))) {
            console.log("?")
            //@ts-ignore
            return new XM_Dropdown(options);
        }
    },
}

export default plugins;