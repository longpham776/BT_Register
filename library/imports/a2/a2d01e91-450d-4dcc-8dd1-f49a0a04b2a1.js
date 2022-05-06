"use strict";
cc._RF.push(module, 'a2d016RRQ1NzI3R9JoKBLKh', 'ActiveRegisterForm');
// Script/ActiveRegisterForm.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        registerForm: cc.Layout,
        richText: cc.RichText,
        laBel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    activeRegisterForm: function activeRegisterForm() {
        this.node.active = false;
        this.registerForm.node.active = true;
        this.richText.node.active = true;
        this.laBel.node.active = true;
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();