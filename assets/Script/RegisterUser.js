// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const user = {username:"",password:"",email:""};
var users = [];
cc.Class({
    extends: cc.Component,

    properties: {
        username: {
            default: null,
            type: cc.EditBox,
        },
        password: {
            default: null,
            type: cc.EditBox,
        },
        email:{
            default: null,
            type: cc.EditBox,
        },
        layoutRegister: cc.Layout,
        loadingProgressBar: cc.Layout,
        richText: cc.RichText,
        laBel: cc.Label,
        content: cc.Node,
        items: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },
    addUser: function(){
        this.node.active = true;
        if(!this.username.string && !this.password.string && !this.email.string) return alert('Please try enter your information!');
        else if(!this.username.string) return alert('Please enter your username!'); 
        else if(!this.password.string) return alert('Please enter your password!');
        else if(!this.email.string) return alert('Please enter your email!');
        else{
            if(!this.checkEmail()) return alert('Wrong email!');
            cc.log(user);
            user.username = this.username.string;
            user.password = this.password.string;
            user.email = this.email.string;
            users.push(user);
            // for(let i=0;i<this._users.length;i++){
            //     cc.sys.localStorage.setItem('user'+i, JSON.stringify(this._users[i]));
            // }
            this.showUser();
            this.loadingRegister();
            this.addListView();
        }
    },
    addListView: function(){
        this.content.removeAllChildren();
        for(let i=0;i<users.length;i++){
            let item = cc.instantiate(this.items);
            item.parent = this.content;
            item.y = -30-(i*60);
            item.getChildByName("item").getComponent(cc.Label).string = users[i].username;
            this.content.height += 10;
        }
    },
    resizeFont:function(slide){
        
    },
    deleteListView: function(){
        this.content.removeAllChildren();
        this.content.height = 220;
    },
    checkEmail: function(){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)$/;
        if(this.email.string.match(validRegex)) return true;
        return false;
    },
    loadingRegister(){
        this.layoutRegister.node.active = false;
        this.richText.node.active = false;
        this.laBel.node.active = false;
        this.loadingProgressBar.node.active = true;
    },
    showUser: function(){
        cc.log('username:'+this.username.string);
        cc.log('password:'+this.password.string);
        cc.log('email:'+this.email.string);
        cc.log(users);
    },
    start () {
        
    },

    // update (dt) {},
});
