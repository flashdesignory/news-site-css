const sheet = new CSSStyleSheet();
sheet.replaceSync(".animated-icon {\n    --animated-icon-background: #333;\n    --animated-icon-color: #ccc;\n    --animated-icon-hover: #fff;\n    --animated-icon-width: 32px;\n    --animated-icon-height: 4px;\n    --animated-icon-width-half: calc(var(--animated-icon-width) / 2);\n    --animated-icon-height-half: calc(var(--animated-icon-height) / 2);\n    --animated-icon-height-half-negative: calc(var(--animated-icon-height-half) * -1);\n    --animated-icon-center: calc(var(--animated-icon-width-half) - var(--animated-icon-height-half));\n    --animated-icon-center-negative: calc(var(--animated-icon-center) * -1);\n    --animated-icon-bar-spacing: calc(((var(--animated-icon-width) - 3 * var(--animated-icon-height)) / 4) + var(--animated-icon-height));\n    --animated-icon-bar-spacing-negative: calc(var(--animated-icon-bar-spacing) * -1);\n\n    --language-direction-adjustment: 1;\n\n    width: var(--animated-icon-width);\n    height: var(--animated-icon-width);\n    background-color: var(--animated-icon-background);\n}\n\nhtml[dir=\"rtl\"] .animated-icon {\n    --language-direction-adjustment: -1;\n}\n\n.animated-icon-inner {\n    display: block;\n    position: absolute;\n    transform-origin: calc(var(--animated-icon-width-half) * var(--language-direction-adjustment)) var(--animated-icon-height-half);\n    transform: translate(0, var(--animated-icon-center)) rotate(0deg);\n    transition: all 0.3s ease;\n}\n\n.animated-icon-inner span {\n    width: var(--animated-icon-width);\n    height: var(--animated-icon-height);\n    display: block;\n    background-color: var(--animated-icon-color);\n    position: absolute;\n    transition: all 0.3s ease;\n}\n\n.animated-icon:hover .animated-icon-inner span {\n    background-color: var(--animated-icon-hover);\n}\n\n.close-icon .animated-icon-inner span:nth-child(1) {\n    transform: rotate(45deg);\n}\n\n.close-icon .animated-icon-inner span:nth-child(2) {\n    transform: rotate(-45deg);\n}\n\n.close-icon.hover:hover .animated-icon-inner {\n    transform: translate(0, var(--animated-icon-center)) rotate(90deg);\n}\n\n.hamburger-icon .animated-icon-inner {\n    transform: translate(calc(var(--animated-icon-center) * var(--language-direction-adjustment)), var(--animated-icon-center)) rotate(0deg);\n}\n\n.hamburger-icon .animated-icon-inner span {\n    left: var(--animated-icon-center-negative);\n}\n\n.hamburger-icon .animated-icon-inner span:nth-child(1) {\n    transform: translate(0, var(--animated-icon-bar-spacing-negative));\n}\n\n.hamburger-icon .animated-icon-inner span:nth-child(3) {\n    transform: translate(0, var(--animated-icon-bar-spacing));\n}\n\n.hamburger-icon.hover:hover .animated-icon-inner span:nth-child(2) {\n    transform: scale(0);\n}\n\n.hamburger-icon.hover:hover .animated-icon-inner span:nth-child(1) {\n    transform: rotate(45deg);\n}\n\n.hamburger-icon.hover:hover .animated-icon-inner span:nth-child(3) {\n    transform: rotate(-45deg);\n}\n\n.arrow-icon .animated-icon-inner span {\n    width: calc(var(--animated-icon-width) / 2);\n}\n\n.arrow-icon .animated-icon-inner span:nth-child(1) {\n    transform: translate(calc(var(--animated-icon-height-half) * var(--language-direction-adjustment)), 0) rotate(35deg);\n}\n\n.arrow-icon .animated-icon-inner span:nth-child(2) {\n    transform: translate(calc(var(--animated-icon-center) * var(--language-direction-adjustment)), 0) rotate(145deg);\n}\n\n.arrow-icon.hover:hover .animated-icon-inner span:nth-child(1) {\n    transform: translate(calc(var(--animated-icon-height-half) * var(--language-direction-adjustment)), 0) rotate(-35deg);\n}\n\n.arrow-icon.hover:hover .animated-icon-inner span:nth-child(2) {\n    transform: translate(calc(var(--animated-icon-center) * var(--language-direction-adjustment)), 0) rotate(215deg);\n}\n\n.hamburger-icon .animated-icon-inner span {\n    left: var(--animated-icon-center-negative);\n}\n\nhtml[dir=\"rtl\"] .hamburger-icon .animated-icon-inner span {\n    right: var(--animated-icon-center-negative);\n    left: unset;\n}\n\nhtml[dir=\"rtl\"] .arrow-icon {\n    transform: rotate(180deg);\n}\n");
export default sheet;
