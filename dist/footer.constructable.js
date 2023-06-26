const sheet = new CSSStyleSheet();
sheet.replaceSync(".page-footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    width: 100%;\n    min-height: var(--footer-height);\n    padding: var(--content-spacing-small) 0;\n    font-size: var(--font-size-small);\n    background-color: var(--color-utils-black);\n    color: var(--color-utils-gray-lighter);\n}\n\n.footer-row {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    min-width: 300px;\n    max-width: 1440px;\n    width: 100%;\n    min-height: var(--content-spacing-xxlarge);\n    padding-left: var(--content-spacing-xlarge);\n    padding-right: var(--content-spacing-xlarge);\n    position: relative;\n}\n\n.footer-row:not(:last-child) {\n    margin-bottom: var(--content-spacing-large);\n}\n\n.footer-column-left,\n.footer-column-center,\n.footer-column-right {\n    height: inherit;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer-column-left {\n    justify-content: flex-start;\n}\n\n.footer-column-right {\n    justify-content: flex-end;\n}\n\n.footer-column-center {\n    flex: 1;\n}\n\n.footer-links .footer-links-list {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.footer-links .footer-links-item {\n    position: relative;\n}\n\n.footer-links .footer-links-item:not(:last-child) {\n    margin-right: var(--content-spacing-large);\n}\n\n.footer-links .footer-links-item a {\n    color: var(--color-utils-offwhite);\n    transition: fill 0.3s ease;\n    text-decoration: none;\n}\n\n.footer-links .footer-links-item a:hover {\n    color: var(--color-utils-white);\n}\n\n@media (max-width: 767px) {\n    .page-footer {\n        padding: var(--content-spacing-large) 0 0 0;\n    }\n\n    .footer-row {\n        flex-direction: column;\n    }\n\n    .footer-row:not(:last-child) {\n        margin-bottom: 0;\n    }\n\n    .footer-column-center,\n    .footer-column-left,\n    .footer-column-right {\n        padding-bottom: var(--content-spacing-large);\n        margin-bottom: var(--content-spacing-large);\n        border-bottom: 1px solid var(--color-utils-gray);\n        width: 100%;\n        justify-content: center;\n        line-height: 24px;\n    }\n\n    .footer-links .footer-links-list {\n        flex-direction: column;\n    }\n\n    .footer-links .footer-links-item:not(:last-child) {\n        margin-right: 0;\n        margin-bottom: var(--content-spacing-large);\n    }\n}\n\nhtml[dir=\"rtl\"] .footer-links .footer-links-item:not(:last-child) {\n    margin-left: var(--content-spacing-large);\n    margin-right: unset;\n}\n\n");
export default sheet;
