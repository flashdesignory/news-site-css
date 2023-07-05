const sheet = new CSSStyleSheet();
sheet.replaceSync(`:root {
        --color-utils-red: #c00;
    --color-utils-black: #0c0c0c;
    --color-utils-white: #fff;
    --color-utils-gray-dark: #2c2c2c;
    --color-utils-gray: #404040;
    --color-utils-gray-light: #6e6e6e;
    --color-utils-gray-lighter: #b1b1b1;
    --color-utils-offwhite: #e6e6e6;
    --color-utils-red-light: #f50000;
    --color-opacity-black-50: rgb(0 0 0 / 50%);
    --color-opacity-black-75: rgb(0 0 0 / 75%);
    --color-opacity-black-100: rgb(0 0 0 / 100%);
    --theme-advertisement-copy: #b1b1b1;
    --theme-advertisement-icon-fill: #00aecd;
    --theme-advertisement-icon-background: #fff;

        --border-radius-xsmall: 2px;
    --border-radius-small: 4px;
    --border-radius-medium: 8px;
    --border-radius-large: 16px;
    --border-width-none: 0;
    --border-width-xsmall: 2px;
    --border-radius-50: 50%;
    --border-width-small: 1px;
    --border-width-medium: 2px;
    --border-width-large: 4px;
    --content-spacing-xsmall: 4px;
    --content-spacing-small: 8px;
    --content-spacing-medium: 12px;
    --content-spacing-large: 16px;
    --content-spacing-xlarge: 24px;
    --content-spacing-xxlarge: 32px;
    --content-spacing-xxxlarge: 40px;

        --header-advertising-width: 970px;
    --header-advertising-height: 250px;
    --article-advertising-width: 300px;
    --article-advertising-height: 250px;
    --nav-height: 40px;
    --nav-button-height: 32px;
    --nav-button-height-mobile: 40px;
    --footer-height: 32px;
    --icon-size: 32px;
    --icon-size-small: 24px;
    --icon-size-tiny: 16px;

        --font-size-small: 12px;
    --font-size-medium: 16px;
    --font-size-large: 20px;
    --font-size-xlarge: 24px;
    --font-size-xxlarge: 32px;
    --font-size-xxxlarge: 40px;
    --font-weight-less-bold: 400;
    --font-weight-bold: 500;
    --font-weight-more-bold: 600;
    --font-family-default: sans-serif;

        --transition-default: all 0.3s ease;

        --index-important: 1000;
    --index-advertisement: 400;
    --index-somewhatimportant: 600;
    --index-content: 80;
    --indxe-content-title: 90;
    --index-nav: 100;
    --index-nav-input: 101;
    --index-nav-label: 102;
    --index-nav-mobile: 500;
    --index-header: 100;
    --index-header-button: 101;
    --index-dropdown: 200;
    --index-dropdown-input: 201;
    --index-dropdown-label: 202;

        --theme-border-width-small: 0;
    --theme-border-width-medium: 0;
    --theme-small-border: none;
    --theme-medium-border: none;
    --theme-text-decoration: none;
    --theme-ui-background: var(--color-utils-white);
    --theme-ui-foreground: var(--color-utils-black);
    --theme-dialog-background: var(--color-utils-white);
    --theme-toast-background: var(--color-opacity-black-75);
    --theme-message-background: var(--color-utils-red);
    --theme-modal-background: var(--color-opacity-black-50);
    --theme-toggle-switch: var(--color-utils-red);
    --theme-toggle-background: var(--color-utils-gray-lighter);
    --theme-toggle-foreground: var(--color-utils-gray);
    --theme-link-highlight: var(--color-utils-red);
    --theme-link-color: var(--color-utils-black);
    --theme-link-hover: var(--color-utils-gray-light);
    --theme-link-background: var(--color-utils-offwhite);
    --theme-text-highlight: var(--color-utils-red-light);
    --theme-text-lighter: var(--color-utils-white);
    --theme-text-light: var(--color-utils-offwhite);
    --theme-text-medium: var(--color-utils-gray-light);
    --theme-text-dark: var(--color-utils-black);
    --theme-image-placeholder: var(--color-utils-offwhite);
    --theme-tag-background-red: var(--color-utils-red);
    --theme-tag-background-gray: var(--color-utils-gray);
    --theme-icon-fill-lighter: var(--color-utils-white);
    --theme-icon-fill-light: var(--color-utils-offwhite);
    --theme-icon-fill-medium: var(--color-utils-gray-light);
    --theme-icon-fill-dark: var(--color-utils-black);
    
    --theme-button-color-lighter: var(--color-utils-white);
    --theme-button-color-light: var(--color-utils-offwhite);
    --theme-button-color-medium: var(--color-utils-gray-light);
    --theme-button-color-dark: var(--color-utils-black);

    --theme-button-light-text: var(--color-utils-black);
    --theme-button-light-text-hover: var(--color-utils-gray-light);
    --theme-button-light-background: var(--color-utils-offwhite);
    --theme-button-light-background-hover: var(--color-utils-white);

    --theme-button-dark-text: var(--color-utils-offwhite);
    --theme-button-dark-text-hover: var(--color-utils-white);
    --theme-button-dark-background: var(--color-utils-black);
    --theme-button-dark-background-hover: var(--color-utils-gray-light);

    --theme-navigation-text: var(--color-utils-offwhite);
    --theme-navigation-text-hover: var(--color-utils-white);
    --theme-navigation-background: transparent;
    --theme-navigation-background-hover: var(--color-utils-gray); 
    --theme-navigation-background-active: var(--color-utils-gray-light);

        --color-system-linktext: #00009f;
    --color-system-linkface: #e6e6e6;
    --color-system-buttontext: #000000;
    --color-system-buttonface: #efefef;
    --color-system-canvas: var(--color-utils-white);
    --color-system-neutral: var(--color-utils-black);

            --high-contrast-border-width-small: 1px;
    --high-contrast-border-width-medium: 2px;
    --high-contrast-small-border: var(--high-contrast-border-width-small) solid var(--color-utils-black);
    --high-contrast-medium-border: var(--high-contrast-border-width-medium) solid var(--color-utils-black);
    --high-contrast-text-decoration: underline;
    --high-contrast-link-background: Canvas;
    --high-contrast-modal-background: var(--color-utils-white);
    --high-contrast-toggle-switch: LinkText;
    --high-contrast-toggle-background: var(--color-utils-white);
    --high-contrast-toggle-foreground: var(--color-utils-white);
    --high-contrast-icon-fill-lighter: LinkText;
    --high-contrast-icon-fill-light: LinkText;
    --high-contrast-icon-fill-medium: LinkText;
    --high-contrast-icon-fill-dark: LinkText;
    --high-contrast-button-color-lighter: LinkText;
    --high-contrast-button-color-light: LinkText;
    --high-contrast-button-color-medium: Canvas;
    --high-contrast-button-color-dark: Canvas;
    --high-contrast-color-active: Canvas;

    --high-contrast-navigation-text: LinkText;
    --high-contrast-navigation-text-hover: LinkText;
    --high-contrast-navigation-background: transparent;
    --high-contrast-navigation-background-hover: transparent;
    --high-contrast-navigation-background-active: transparent;
}

:root.forced-colors {
        --theme-border-width-small: 1px;
    --theme-border-width-medium: 2px;
    --theme-small-border: var(--theme-border-width-small) solid var(--color-system-neutral);
    --theme-medium-border: var(--theme-border-width-medium) solid var(--color-system-neutral);
    --theme-text-decoration: underline;
    --theme-ui-background: var(--color-system-canvas);
    --theme-ui-foreground: var(--color-system-canvas);
    --theme-dialog-background: var(--color-system-canvas);
    --theme-toast-background: var(--color-system-canvas);
    --theme-message-background: var(--color-system-canvas);
    --theme-toast-background: var(--color-system-canvas);
    --theme-toggle-switch: var(--color-system-linktext);
    --theme-toggle-background: var(--color-system-canvas);
    --theme-toggle-foreground: var(--color-system-canvas);
    --theme-link-highlight: var(--color-system-linktext);
    --theme-link-color: var(--color-system-linktext);
    --theme-link-hover: var(--color-system-linktext);
    --theme-link-background: var(--color-system-canvas);
    --theme-text-highlight: var(--color-system-linktext);
    --theme-text-lighter: var(--color-system-neutral);
    --theme-text-light: var(--color-system-neutral);
    --theme-text-medium: var(--color-system-neutral);
    --theme-text-dark: var(--color-system-neutral);
    --theme-image-placeholder: var(--color-system-canvas);
    --theme-tag-background-red: var(--color-system-canvas);
    --theme-tag-background-gray: var(--color-system-canvas);
    --theme-icon-fill-lighter: var(--color-system-linktext);
    --theme-icon-fill-light: var(--color-system-linktext);
    --theme-icon-fill-medium: var(--color-system-linktext);
    --theme-icon-fill-dark: var(--color-system-linktext);

    --theme-button-color-lighter: var(--color-system-linktext);
    --theme-button-color-light: var(--color-system-linktext);
    --theme-button-color-medium: var(--color-system-canvas);
    --theme-button-color-dark: var(--color-system-canvas);

    --theme-button-light-text: var(--color-system-canvas);
    --theme-button-light-text-hover: var(--color-system-canvas);
    --theme-button-light-background: var(--color-system-linktext);
    --theme-button-light-background-hover: var(--color-system-linktext);

    --theme-button-dark-text: var(--color-system-canvas);
    --theme-button-dark-text-hover: var(--color-system-canvas);
    --theme-button-dark-background: var(--color-system-linktext);
    --theme-button-dark-background-hover: var(--color-system-linktext);

    --theme-navigation-text: var(--color-system-linktext);
    --theme-navigation-text-hover: var(--color-system-linktext);
    --theme-navigation-background: transparent;
    --theme-navigation-background-hover: transparent;
    --theme-navigation-background-active: transparent;
}
`);
export default sheet;
