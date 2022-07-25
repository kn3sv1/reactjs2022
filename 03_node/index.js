const user = {
  id: 5,
  age: 33,
  firstName: 'Tom',
  lastName: 'Smit',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
const userClassName = "user-info";
const styleObj = {
  color: 'red',
  fontFamily: 'Verdana'
};
ReactDOM.createRoot(document.getElementById("app")).render( /*#__PURE__*/React.createElement("div", {
  className: userClassName,
  style: styleObj
}, /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F: ", user.getFullName()), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", user.age)));
