export var index = "login";

module.exports = {
  "login": {
    component(next) {
      require(["./view/login.rgl"], function(Login) {
        next(Login);
      });
    },
    config: {
      title: "登录界面"
    }
  },
  "app": {
    component(next) {
      require(["./view/app.rgl"], function(APP) {
        next(APP);
      });
    },
    config: {
      title: "测试应用"
    }
  }
};