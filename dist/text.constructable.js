const sheet = new CSSStyleSheet();
sheet.replaceSync(".truncate-singleline {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block !important;\n}\n\n.truncate-multiline {\n    display: -webkit-box !important;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    width: 100%;\n    overflow: hidden;\n}\n\n.truncate-multiline-3 {\n    -webkit-line-clamp: 3;\n}\n");
export default sheet;
