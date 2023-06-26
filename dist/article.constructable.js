const sheet = new CSSStyleSheet();
sheet.replaceSync(".article-header {\n    font-weight: bold;\n    font-size: var(--font-size-small);\n    text-transform: uppercase;\n    position: relative;\n    padding-top: var(--content-spacing-small);\n    padding-bottom: var(--content-spacing-large);\n    pointer-events: none;\n}\n\n.article-header::before,\n.article-header::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.article-header::before {\n    background-color: var(--color-utils-red);\n    width: var(--content-spacing-large);\n    height: 4px;\n    transition: var(--transition-default);\n}\n\n.article-header:hover::before {\n    width: 100%;\n}\n\n.article-header::after {\n    border-top: 1px solid var(--color-utils-offwhite);\n    right: 0;\n    width: 100%;\n}\n\n/* stylelint-disable */\n.article-header a {\n    display: flex;\n    text-decoration: none;\n    color: var(--color-utils-black);\n    pointer-events: auto;\n}\n/* stylelint-enable */\n\n.article-body {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n/* stylelint-disable */\n.article-body a {\n    text-decoration: none;\n    color: var(--color-utils-black);\n    transition: var(--transition-default);\n    display: flex;\n}\n\n.article-body a:hover {\n    color: var(--color-utils-gray-light);\n    text-decoration: underline;\n}\n/* stylelint-enable */\n\n.article-image-container {\n    display: flex;\n    width: 100%;\n    height: auto;\n    flex-direction: column;\n    flex-shrink: 0;\n    position: relative;\n    background-color: var(--theme-image-placeholder);\n}\n\n.article-image {\n    display: flex;\n    width: 100%;\n    height: auto;\n    line-height: 0;\n}\n\n.article-image img {\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n    width: 100%;\n}\n\n.article-image-captions {\n    font-size: var(--font-size-small);\n    margin-top: var(--content-spacing-xsmall);\n}\n\n.article-image-tag {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    font-size: var(--font-size-small);\n    background-color: var(--color-utils-gray);\n    color: var(--color-utils-white);\n    padding: var(--content-spacing-xsmall) var(--content-spacing-small);\n    text-transform: uppercase;\n}\n\n.article-image-tag.breaking {\n    background-color: var(--color-utils-red);\n}\n\n.article-image-tag.watch {\n    background-color: var(--color-utils-gray);\n}\n\n.article-image-tag svg {\n    width: var(--icon-size-tiny);\n    height: var(--icon-size-tiny);\n    margin-right: var(--content-spacing-small);\n}\n\n/* stylelint-disable */\n.article-image-tag svg path {\n    fill: var(--color-utils-white);\n}\n/* stylelint-enable */\n\n.article-title {\n    display: flex;\n    flex-direction: row;\n    font-weight: bold;\n    line-height: var(--font-size-xlarge);\n    margin-top: var(--content-spacing-large);\n    font-size: var(--font-size-large);\n}\n\n.article-content {\n    display: flex;\n    flex-direction: column;\n    font-size: var(--font-size-medium);\n    line-height: var(--font-size-xlarge);\n    margin-top: var(--content-spacing-large);\n    white-space: pre-wrap;\n}\n\n/* remove margin-top from first element */\n.article-content:first-child {\n    margin-top: 0;\n}\n\n.article-list {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.article-list-item {\n    display: flex;\n    position: relative;\n}\n\n.horizontal .article-list-item {\n    flex-direction: row;\n}\n\n.vertical .article-list-item {\n    flex-direction: column;\n}\n\n.article-list-item:not(:last-child) {\n    margin-bottom: var(--content-spacing-medium);\n    padding-bottom: var(--content-spacing-medium);\n    border-bottom: 1px solid var(--color-utils-offwhite);\n}\n\n.article-list.bullets {\n    list-style-type: disc;\n    padding-inline-start: 1em;\n}\n\n.article-list.bullets .article-list-item {\n    display: list-item;\n}\n\n.article-list.bullets .article-list-item:not(:last-child) {\n    padding-bottom: 0;\n    border-bottom: none;\n}\n\n/* excerpt start */\n.article-list-item .article-hero {\n    display: flex;\n    width: 33.33%;\n    flex-direction: column;\n    flex-shrink: 0;\n    min-width: 130px;\n    position: relative;\n}\n\n.article-list-item .article-content {\n    margin-top: 0;\n    margin-left: var(--content-spacing-large);\n    width: 66.66%;\n}\n\n/* excerpt end */\n\n/* article-list start */\n.article-list-content {\n    display: flex;\n    flex-direction: column;\n    font-size: var(--font-size-medium);\n    line-height: var(--font-size-xlarge);\n}\n\n.article-list-content .article-title {\n    margin-top: 0;\n    margin-bottom: var(--content-spacing-large);\n}\n\n/* article-list end */\n\n/** RTL ARTICLE START **/\nhtml[dir=\"rtl\"] .article-header::before,\nhtml[dir=\"rtl\"] .article-header::after {\n    right: 0;\n    left: unset;\n}\n\nhtml[dir=\"rtl\"] .article-image-tag {\n    right: 0;\n    left: unset;\n}\n\nhtml[dir=\"rtl\"] .article-list-item .article-content {\n    margin-right: var(--content-spacing-large);\n    margin-left: unset;\n}\n\nhtml[dir=\"rtl\"] .article-image-tag svg {\n    margin-left: var(--content-spacing-small);\n    margin-right: unset;\n}\n\n");
export default sheet;
