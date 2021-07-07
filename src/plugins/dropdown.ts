import plugins from './plugins'

export default class dropdown {
  init() {
    plugins.createDropdown({
      trigger: '.widget-box-post-settings-dropdown-trigger',
      container: '.widget-box-post-settings-dropdown',
      offset: {
        top: 30,
        right: 9
      },
      animation: {
        type: 'translate-top',
        speed: .3,
        translateOffset: {
          vertical: 20
        }
      }
    });

    plugins.createDropdown({
      trigger: '.reaction-item-dropdown-trigger',
      container: '.reaction-item-dropdown',
      triggerEvent: 'hover',
      offset: {
        bottom: 38,
        left: -16
      },
      animation: {
        type: 'translate-bottom',
        speed: .3,
        translateOffset: {
          vertical: 20
        }
      }
    });

    plugins.createDropdown({
      trigger: '.reaction-options-dropdown-trigger',
      container: '.reaction-options-dropdown',
      triggerEvent: 'click',
      offset: {
        bottom: 54,
        left: -16
      },
      animation: {
        type: 'translate-bottom',
        speed: .3,
        translateOffset: {
          vertical: 20
        }
      },
      closeOnDropdownClick: true
    });

    plugins.createDropdown({
      trigger: '.reaction-options-small-dropdown-trigger',
      container: '.reaction-options-small-dropdown',
      triggerEvent: 'click',
      offset: {
        bottom: 30,
        left: -80
      },
      animation: {
        type: 'translate-bottom',
        speed: .3,
        translateOffset: {
          vertical: 16
        }
      },
      closeOnDropdownClick: true
    });

    plugins.createDropdown({
      trigger: '.post-settings-dropdown-trigger',
      container: '.post-settings-dropdown',
      offset: {
        bottom: 30,
        right: 0
      },
      animation: {
        type: 'translate-bottom',
        speed: .3,
        translateOffset: {
          vertical: 16
        }
      }
    });

    //header

    plugins.createDropdown({
      trigger: '.header-dropdown-trigger',
      container: '.header-dropdown',
      offset: {
        top: 64,
        right: 6
      },
      animation: {
        type: 'translate-top'
      }
    });

    plugins.createDropdown({
      trigger: '.header-settings-dropdown-trigger',
      container: '.header-settings-dropdown',
      offset: {
        top: 64,
        right: 22
      },
      animation: {
        type: 'translate-top'
      }
    });

    //community
    plugins.createDropdown({
      trigger: '.group-setting-dropdown-trigger',
      container: '.header-settings-dropdown',
      offset: {
        top: 64,
        right: 22
      },
      animation: {
        type: 'translate-top'
      }
    });

  }
}

