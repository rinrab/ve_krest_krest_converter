String.prototype.замѣнiть = String.prototype.replace;
Node.prototype.ящерскоеПолѣ = Node.prototype.innerHTML;
Node.prototype.найтиЯщера =  Node.prototype.querySelector;
Node.prototype.найтиВсехЯщеров = Node.prototype.querySelectorAll;

const русь = { };
русь.молвить = console.log;

const странiца = {};
странiца.найтиЯщера = (selector) => document.querySelector(selector);
странiца.найтиВсехЯщеров = (selectors) => document.querySelectorAll(selectors);

const ЛовитѣльЯщеров = RegExp;

const укротитѣльЯщеровъ = {}
укротитѣльЯщеровъ.укротить = hljs.highlight;

