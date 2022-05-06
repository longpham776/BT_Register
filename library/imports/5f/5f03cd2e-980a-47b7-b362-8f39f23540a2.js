"use strict";
cc._RF.push(module, '5f03c0umApHt7NijznyNUCi', 'LoadingRegister');
// Script/LoadingRegister.js

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
        registerProgressBar: cc.ProgressBar,
        listViewLayout: cc.Layout
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.registerProgressBar.progress = 0;
    },
    start: function start() {},
    update: function update() {
        if (Math.floor(this.registerProgressBar.progress) == 1) {
            this.node.active = false;
            return this.listViewLayout.node.active = true;
        }
        this.registerProgressBar.progress += 0.015;
    }
});

cc._RF.pop();