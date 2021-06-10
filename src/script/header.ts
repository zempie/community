import plugins from '@/plugins/plugins'
// export default class Header{

const querySelector = function (selector: any, callback: any) {
    const el = document.querySelectorAll(selector);

    if (el.length) {
        callback(el);
    }
}

querySelector('.content-grid', (el: any) => {
    const breakpointWidth = 1366;
    const updateGridPosition = function (contentGrid: { offsetWidth: number; style: { transform: string; }; }) {
        if (window.innerWidth > breakpointWidth) {
            const availableWidth = document.body.clientWidth - contentGrid.offsetWidth,
                offsetX = (availableWidth / 2);

            contentGrid.style.transform = `translate(${offsetX}px, 0)`;
        } else {
            contentGrid.style.transform = `translate(0, 0)`;
        }
    };

    const updateGridPositions = () => {
        for (const grid of el) {
            updateGridPosition(grid);
        }
    };


    querySelector('.navigation-widget-trigger', (el: any[]) => {
        const navigationTrigger = el[0],
            topOffset = 80,
            navigationWidget = document.querySelector('#navigation-widget'),
            navigationWidgetSmall = document.querySelector('#navigation-widget-small'),
            activeClass = 'active',
            hiddenClass = 'hidden',
            delayedClass = 'delayed';

        const setNavigationWidgetDimensions = function () {
            (navigationWidget as HTMLElement).style.height = `${window.innerHeight - topOffset}px`;
        };

        const toggleNavigationWidget = function () {
            navigationTrigger.classList.toggle(activeClass);

            (navigationWidget as HTMLElement).classList.toggle(delayedClass);
            (navigationWidget as HTMLElement).classList.toggle(hiddenClass);
            (navigationWidgetSmall as HTMLElement).classList.toggle(delayedClass);
            (navigationWidgetSmall as HTMLElement).classList.toggle(hiddenClass);


            updateGridPositions();
        };

        navigationTrigger.addEventListener('click', toggleNavigationWidget);

        setNavigationWidgetDimensions();
        window.addEventListener('resize', setNavigationWidgetDimensions);
    });

    querySelector('.navigation-widget-mobile-trigger', function (el: any[]) {
        const navigationMobileTrigger = el[0],
            navigationWidgetMobile = document.querySelector('#navigation-widget-mobile'),
            navigationWidgetMobileCloseButton = (navigationWidgetMobile as HTMLElement).querySelector('.navigation-widget-close-button'),
            hiddenClass = 'hidden';

        const overlay = document.createElement('div');

        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        //@ts-ignore
        overlay.style.zIndex = 99998;
        overlay.style.backgroundColor = 'rgba(21, 21, 31, .96)';
        //@ts-ignore
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
        overlay.style.transition = 'opacity .3s ease-in-out, visibility .3s ease-in-out';

        document.body.appendChild(overlay);

        const showOverlay = function () {
            //@ts-ignore
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        };

        const hideOverlay = function () {
            //@ts-ignore
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
        };

        const setNavigationWidgetMobileDimensions = function () {
            (navigationWidgetMobile as HTMLElement).style.height = `${window.innerHeight}px`;
        };

        const toggleNavigationWidgetMobile = function () {
            (navigationWidgetMobile as HTMLElement).classList.toggle(hiddenClass);

            const toggleOverlay = (navigationWidgetMobile as HTMLElement).classList.contains(hiddenClass) ? hideOverlay : showOverlay;
            toggleOverlay();
        };

        navigationMobileTrigger.addEventListener('click', toggleNavigationWidgetMobile);
        (navigationWidgetMobileCloseButton as HTMLElement).addEventListener('click', toggleNavigationWidgetMobile);
        overlay.addEventListener('click', toggleNavigationWidgetMobile);

        setNavigationWidgetMobileDimensions();
        window.addEventListener('resize', setNavigationWidgetMobileDimensions);
    });
});

export default querySelector;