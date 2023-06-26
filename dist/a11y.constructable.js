const sheet = new CSSStyleSheet();
sheet.replaceSync(".visually-hidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n}\n\n.reduced-motion *,\n.reduced-motion *::before,\n.reduced-motion *::after {\n    animation-delay: -1ms !important;\n    animation-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n    background-attachment: initial !important;\n    scroll-behavior: auto !important;\n    transition-duration: 0s !important;\n    transition-delay: 0s !important;\n}\n\n@media (prefers-reduced-motion: reduce) {\n    *,\n    ::before,\n    ::after {\n        animation-delay: -1ms !important;\n        animation-duration: 1ms !important;\n        animation-iteration-count: 1 !important;\n        background-attachment: initial !important;\n        scroll-behavior: auto !important;\n        transition-duration: 0s !important;\n        transition-delay: 0s !important;\n    }\n}\n\n.skip-link {\n    background: var(--color-utils-red);\n    color: var(--color-utils-white);\n    font-weight: var(--font-weight-more-bold);\n    font-family: var(--font-family-default);\n    left: 50%;\n    padding: var(--content-spacing-medium);\n    border-radius: var(--border-radius-small);\n    position: absolute;\n    transform: translate(-50%, -100%);\n    z-index: var(--index-somewhatimportant);\n    text-decoration: none;\n}\n\n.skip-link:focus {\n    transform: translate(-50%, 0%);\n    transition: transform 0.3s ease;\n}\n\nimg {\n    display: block;\n}\n\nimg::before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-utils-gray);\n    position: absolute;\n    top: 0;\n    left: 0;\n    font-size: 0;\n}\n\nimg::after {\n    content: \"\\2639\"\" \" attr(alt);\n    font-size: var(--font-size-medium);\n    color: var(--color-utils-white);\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n");
export default sheet;
