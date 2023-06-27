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
    --theme-advertisement-copy: #b1b1b1;
    --theme-advertisement-icon-fill: #00aecd;
    --theme-advertisement-icon-background: #fff;
    --theme-image-placeholder: #e5e5e5;

        --border-radius-xsmall: 2px;
    --border-radius-small: 4px;
    --border-radius-medium: 8px;
    --border-radius-large: 16px;
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
}
`);
export default sheet;
