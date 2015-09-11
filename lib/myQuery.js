function myQuery(selector) {
  if (!(this instanceof myQuery)) return new myQuery(selector);

  this.element = getElement(selector);
  this.elementArr = []['slice'].call(this.element)

  function getElement(selector) {
    switch (selector[0]) {
      case '.':
        return document.getElementsByClassName(selector.substr(1));

      case '#':
        return document.getElementById(selector.substr(1));

      default:
        return document.getElementsByTagName(selector);
    }
  }
}

myQuery.prototype.css = function (property, value) {
  this.elementArr.forEach(function (element) {
    element.style[property] = value;
  })
};

myQuery.prototype.remove = function () {
  this.elementArr.forEach(function (element) {
    element.parentNode.removeChild(element);
  })
};

myQuery.prototype.append = function (string) {
  this.elementArr.forEach(function (element) {
    element.insertAdjacentHTML('beforeend', string)
  })
};

// Primative version...
// myQuery.prototype.append = function (string) {
//   var html = document.createElement(string.match(/\w+/));
//   html['innerText'] = string.match(/<.+>(.+)<.+>/)[1];
//
//   this.elementArr.forEach(function (element) {
//     element.appendChild(html.cloneNode(true));
//   })
// };
