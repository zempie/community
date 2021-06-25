import plugins from './plugins'

export default class Popup {
    init() {
        plugins.createPopup({
            container: '.popup-video',
            trigger: '.popup-video-trigger',
            sticky: true,
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-picture',
            trigger: '.popup-picture-trigger',
            sticky: true,
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-album-creation',
            trigger: '.popup-album-creation-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-event-creation',
            trigger: '.popup-event-creation-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96,
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });


        plugins.createPopup({
            container: '.popup-container',
            trigger: '.popup-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-event-information',
            trigger: '.popup-event-information-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-manage-group',
            trigger: '.popup-manage-group-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-manage-item',
            trigger: '.popup-manage-item-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

        plugins.createPopup({
            container: '.popup-review',
            trigger: '.popup-review-trigger',
            overlay: {
                color: '21, 21, 31',
                opacity: .96
            },
            animation: {
                type: 'translate-in-fade',
                speed: .3,
                translateOffset: 40
            }
        });

    }

}