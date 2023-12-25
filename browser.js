var B64chromium = require("./index.js").B64chromium;
if(typeof window !== "undefined"){
    window.B64chromium = B64chromium;
}else {
    self.B64chromium = B64chromium;
}