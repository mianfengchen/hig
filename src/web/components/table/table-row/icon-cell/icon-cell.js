import "./icon-cell.scss";


var Template = require("./icon-cell.html");
var Interface = require("interface.json");
var Core = require("_core.js");

/**
 * Creates an Table
 *
 * @class
 */

class IconCell extends Core {
  constructor(options = {}) {
    super(options);
    this._render(Template, options, undefined, "tr");
  }

  setIcon(icon) {
    debugger;
    this.el.innerHTML = this._renderIcon(icon);
  }

  setWidth(width) {
    this.el.style.width = width;
  }
}

IconCell._interface =
  Interface["components"]["Table"]["partials"]["TableRow"]["partials"][
    "IconCell"
  ];
IconCell._defaults = {};

module.exports = IconCell;
