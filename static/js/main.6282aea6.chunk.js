(this.webpackJsonplockey=this.webpackJsonplockey||[]).push([[0],{160:function(e,n,t){e.exports=t.p+"static/media/password.2a000309.png"},162:function(e,n,t){e.exports=t.p+"static/media/password_isometric.283af409.png"},163:function(e,n,t){e.exports=t.p+"static/media/finger_print.d49ba66e.png"},166:function(e,n,t){e.exports=t(395)},171:function(e,n,t){},294:function(e,n){},296:function(e,n){},329:function(e,n){},330:function(e,n){},395:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(64),o=t.n(i),c=t(9),s=(t(171),t(31)),l=t(12),u=t(14),m=t(15),d=t(19),p=t(100),f={authenticated:!1,msp:""},b=t(40),h=(t(185),{apiKey:"AIzaSyCnSZ7sKc9X98oJMn3rMH-tLFDIlSNyUqk",authDomain:"lockey-d41ff.firebaseapp.com",databaseURL:"https://lockey-d41ff.firebaseio.com",projectId:"lockey-d41ff",storageBucket:"lockey-d41ff.appspot.com",messagingSenderId:"1071401807862",appId:"1:1071401807862:web:425716a2def6c586fbe1d7"});b.initializeApp(h),b.auth().setPersistence(b.auth.Auth.Persistence.SESSION);var g=b.auth(),v=b.database().ref(),E=b,w=function(e){return{type:"SET_USER",user:e}};function y(){var e=Object(u.a)(['\n  background-color: white;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n  .logo {\n    color: #005ce6;\n    font-size: 1.2em;\n    font-family: "Monoton", cursive;\n    user-select: none;\n  }\n\n  .nav-items {\n    display: flex;\n    float: right;\n    .nav-item {\n      color: #005ce6;\n      font-size: 1em;\n      font-family: "Montserrat", sans-serif;\n      padding: 0.25rem 1rem;\n      border-bottom: 1px solid transparent;\n      transition: all 300ms ease-in-out;\n      &:hover {\n        border-bottom: 1px solid #005ce6;\n      }\n    }\n  }\n']);return y=function(){return e},e}var O=Object(m.b)((function(e){var n=e.className,t=g.currentUser,a=Object(d.b)();return r.a.createElement("nav",{className:n},r.a.createElement("span",{className:"logo"},"LOCKEY"),t&&r.a.createElement("ul",{className:"nav-items"},r.a.createElement(s.b,{className:"nav-item btn",to:"/"},"Home"),r.a.createElement(s.b,{className:"nav-item btn",to:"/myvault"},"My Vault"),r.a.createElement("li",{className:"nav-item btn",onClick:function(e){e.preventDefault(),window.confirm("Are you sure you want to logout?")&&g.signOut().then((function(){a(w(null)),a({type:"DEAUTHENTICATE"})}))}},"Logout")))}))(y()),j=t(98),N=t.n(j),x=t(158),k=(t(188),t(161)),S=t.n(k),A=t(46),C=t.n(A),T=t(47),z=t(93),R=t(160),U=t.n(R);function I(){var e=Object(u.a)(['\n  position: relative;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  max-width: 40rem;\n  background-color: white;\n  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);\n  .password-image {\n    width: 15rem;\n    user-select: none;\n  }\n  .login-form {\n    flex: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem 2rem;\n    font-family: "Montserrat", sans-serif;\n    .login-msg {\n      font-size: 1.5em;\n      font-weight: bold;\n      user-select: none;\n      color: #005ce6;\n      margin: 0 auto 1rem auto;\n      text-align: center;\n    }\n    label {\n      width: 100%;\n      font-size: 1em;\n      margin-bottom: 0.5rem;\n      user-select: none;\n    }\n    .input-row {\n      width: 100%;\n      display: flex;\n      .text-input {\n        width: 100%;\n        font-size: 1em;\n        padding: 0.5rem;\n        margin-bottom: 1rem;\n        border: none;\n        border-bottom: 1px solid lightgray;\n        &:last-child {\n          margin-bottom: 0;\n        }\n        &:focus {\n          outline: none;\n        }\n      }\n      .check-icon {\n        position: relative;\n        font-size: 1.2em;\n        right: 1.5rem;\n        color: #28a745;\n      }\n    }\n    .register-inputs {\n      width: 100%;\n      .phone-number-input {\n        input {\n          border: none;\n          margin-left: 0.5rem;\n          &:focus {\n            outline: none;\n          }\n        }\n      }\n      .send-code {\n        display: inline-block;\n        margin-bottom: 0.5rem;\n        font-size: 0.8em;\n        color: #009fb7;\n      }\n    }\n    .login-btn {\n      width: 100%;\n      padding: 0.5rem;\n      font-size: 1em;\n      border: none;\n      border-radius: 0.125rem;\n      background-color: #005ce6;\n      color: white;\n      margin-top: 2rem;\n      font-family: "Montserrat", sans-serif;\n\n      &:disabled {\n        background-color: gray;\n        &:hover {\n          cursor: not-allowed;\n        }\n      }\n    }\n    .btm-container {\n      display: flex;\n      justify-content: center;\n      padding: 1rem;\n      .register-label {\n        color: gray;\n        font-size: 1em;\n        user-select: none;\n      }\n      .register-btn {\n        margin-left: 1rem;\n        color: #005ce6;\n        user-select: none;\n        font-size: 1em;\n\n        &:hover {\n          font-weight: bold;\n        }\n      }\n    }\n  }\n']);return I=function(){return e},e}var M=Object(m.b)(Object(l.g)((function(e){var n=e.className,t=E.auth(),i=Object(a.useState)(!0),o=Object(c.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(""),m=Object(c.a)(u,2),p=m[0],f=m[1],b=Object(a.useState)(""),h=Object(c.a)(b,2),g=h[0],v=h[1],y=Object(a.useState)(""),O=Object(c.a)(y,2),j=O[0],k=O[1],A=Object(a.useState)(!1),R=Object(c.a)(A,2),I=R[0],M=R[1],D=Object(a.useState)(!1),L=Object(c.a)(D,2),P=L[0],W=L[1],q=Object(a.useState)(!1),F=Object(c.a)(q,2),H=F[0],_=F[1],B=Object(a.useState)(!1),K=Object(c.a)(B,2),Y=K[0],J=K[1],G=Object(d.b)(),V=new C.a;V.is().min(8).has().not().spaces();var X=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"email":f(a),M(S.a.isEmail(a));break;case"password":v(a),W(V.validate(a));break;case"confirm-password":k(a),_(V.validate(a)&&a===g)}},Z=function(){var n=Object(x.a)(N.a.mark((function n(a){var r,i,o;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),r=I&&P,i=I&&P&&H,n.prev=3,J(!0),!s){n.next=15;break}if(!r){n.next=10;break}return n.next=9,t.signInWithEmailAndPassword(p,g);case 9:o=n.sent;case 10:J(!1),G(w(o.user)),e.history.push("/"),n.next=22;break;case 15:if(!i){n.next=19;break}return n.next=18,t.createUserWithEmailAndPassword(p,g);case 18:o=n.sent;case 19:J(!1),alert("You are now registered!"),l(!0);case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(3),J(!1),alert(n.t0.message);case 28:case"end":return n.stop()}}),n,null,[[3,24]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:n},r.a.createElement("form",{className:"login-form",onSubmit:Z},r.a.createElement("img",{className:"password-image",src:U.a,alt:"password_image"}),r.a.createElement("h2",{className:"login-msg"},s?"Login":"Register"),r.a.createElement("label",{htmlFor:"login-email-input"},"EMAIL"),r.a.createElement("div",{className:"input-row"},r.a.createElement("input",{id:"login-email-input",className:"text-input",name:"email",type:"email",placeholder:"EMAIL",value:p,onChange:X,required:!0}),r.a.createElement(T.a,{className:"check-icon",style:{color:I?"#28a745":"lightgray"}})),r.a.createElement("label",{htmlFor:"login-password-input"},"PASSWORD"),r.a.createElement("div",{className:"input-row"},r.a.createElement("input",{id:"login-password-input",className:"text-input",name:"password",type:"password",placeholder:"PASSWORD (AT LEAST 8 CHARACTERS)",value:g,onChange:X,required:!0}),r.a.createElement(T.a,{className:"check-icon",style:{color:P?"#28a745":"lightgray"}})),!s&&r.a.createElement("div",{className:"register-inputs"},r.a.createElement("label",{htmlFor:"confirm-password-input"},"CONFIRM PASSWORD"),r.a.createElement("div",{className:"input-row"},r.a.createElement("input",{id:"confirm-password-input",className:"text-input",name:"confirm-password",type:"password",placeholder:"CONFIRM PASSWORD",value:j,onChange:X,required:!0}),r.a.createElement(T.a,{className:"check-icon",style:{color:H?"#28a745":"lightgray"}}))),r.a.createElement("button",{type:"submit",className:"login-btn btn",disabled:s?!I||!P:!I||!P||!H},Y?r.a.createElement(z.ClipLoader,{size:"0.8em",color:"white"}):s?"Login":"Register"),r.a.createElement("div",{className:"btm-container"},r.a.createElement("span",{className:"register-label"},s?"Not registered?":"Already registered?"),r.a.createElement("span",{className:"register-btn btn",onClick:function(e){l(!s)}},s?"Register Now":"Back to Login"))))})))(I()),D=t(55),L=t.n(D),P=t(399),W=function(e,n){return L.a.AES.encrypt(e,n).toString()},q=function(e,n){return L.a.AES.decrypt(e,n).toString(L.a.enc.Utf8)},F=t(69),H=t.n(F);function _(){var e=Object(u.a)(['\n  position: relative;\n  font-family: "Montserrat", sans-serif;\n  .password-form {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 50%);\n    width: 70%;\n    max-width: 40rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    label {\n      width: 100%;\n      font-size: 1em;\n      margin-bottom: 0.5rem;\n    }\n    .text-input {\n      width: 100%;\n      font-size: 1em;\n      padding: 0.5rem;\n      margin-bottom: 1rem;\n      border: none;\n      border-bottom: 1px solid lightgray;\n      &:last-child {\n        margin-bottom: 0;\n      }\n      &:focus {\n        outline: none;\n      }\n    }\n    .secure-btn {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 0.5rem;\n      font-size: 1.2em;\n      border: none;\n      border-radius: 0.125rem;\n      background-color: #005ce6;\n      color: white;\n      margin-top: 1rem;\n      font-family: "Montserrat", sans-serif;\n\n      &:disabled {\n        background-color: gray;\n        &:hover {\n          cursor: not-allowed;\n        }\n      }\n      .converting-text {\n        margin-left: 0.5rem;\n        font-size: 0.8em;\n      }\n      .secure-icon {\n        color: white;\n        margin-right: 0.25rem;\n      }\n      .secure-text {\n        font-size: 0.8em;\n      }\n    }\n  }\n']);return _=function(){return e},e}var B=Object(m.b)((function(e){var n=e.className,t=Object(d.c)((function(e){return e.auth.msp})),i=g.currentUser,o=Object(a.useRef)(),s=Object(a.useState)(""),l=Object(c.a)(s,2),u=l[0],m=l[1],p=Object(a.useState)(""),f=Object(c.a)(p,2),b=f[0],h=f[1],E=Object(a.useState)(""),w=Object(c.a)(E,2),y=w[0],O=w[1],j=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"nickname":m(a);break;case"username":h(a);break;case"password":O(a)}};return r.a.createElement("div",{className:n},r.a.createElement("form",{className:"password-form",onSubmit:function(e){var n;e.preventDefault(),n={uuid:Object(P.a)(),nickname:W(u,t),username:W(b,t),password:W(y,t)},v.child(i.uid).child("locks").child(n.uuid).set(n),m(""),h(""),O(""),alert("Successfully stored to your vault!")}},r.a.createElement("label",{htmlFor:"private-email-input"},"NICKNAME (GOOGLE, YOUTUBE, FACEBOOK, etc.)"),r.a.createElement("input",{id:"private-nickname-input",className:"text-input",type:"text",name:"nickname",placeholder:"NICKNAME",onChange:j,value:u,required:!0}),r.a.createElement("label",{htmlFor:"private-email-input"},"USERNAME"),r.a.createElement("input",{id:"private-username-input",className:"text-input",type:"text",name:"username",placeholder:"USERNAME",onChange:j,value:b,required:!0}),r.a.createElement("label",{htmlFor:"private-password-input"},"PASSWORD"),r.a.createElement("input",{id:"private-password-input",className:"text-input",type:"password",name:"password",placeholder:"PASSWORD",onChange:j,value:y,required:!0}),r.a.createElement("button",{className:"secure-btn btn",type:"submit",ref:o,disabled:H()(u)||H()(b)||H()(y)},r.a.createElement("span",{className:"secure-text"},"Save"))))}))(_());function K(){var e=Object(u.a)([""]);return K=function(){return e},e}var Y=Object(m.b)((function(e){var n=e.className,t=g.currentUser,i=Object(a.useState)(""),o=Object(c.a)(i,2),s=(o[0],o[1],new C.a);s.is().min(8).has().not().spaces();return Object(a.useEffect)((function(){t&&v.child(t.uid).child("msp").on("value",(function(e){null===e.val()&&function(){for(var e=null,n=null,a=!1;!a;){for(;null===e;)e=prompt("You don't have a master password set. Please type in new master password (at least 8 characters):"),s.validate(e)||(e=null);null===(n=prompt("Please re-enter your master password to confirm:"))?e=null:n===e&&(a=!0)}v.child(t.uid).child("msp").set(W(e,e))}()}))}),[]),r.a.createElement("div",{className:n},r.a.createElement(B,null))}))(K());function J(){var e=Object(u.a)([""]);return J=function(){return e},e}Object(m.b)((function(e){var n=e.className;return r.a.createElement("div",{className:n},"Loading")}))(J());function G(){var e=Object(u.a)([""]);return G=function(){return e},e}var V=Object(m.b)((function(e){var n=e.className;return r.a.createElement("div",{className:n},r.a.createElement(Y,null))}))(G());function X(){var e=Object(u.a)(["\n  background-color: #f5f5f7;\n  width: 100%;\n  height: 100vh;\n"]);return X=function(){return e},e}var Z=Object(m.b)((function(e){var n=e.className;return r.a.createElement("div",{className:n},r.a.createElement(M,null))}))(X()),Q=t(99),$=t(162),ee=t.n($);function ne(){var e=Object(u.a)(['\n  padding: 1rem;\n  width: 80%;\n  max-width: 40rem;\n  margin: auto;\n  font-family: "Montserrat", sans-serif;\n  .auth-image {\n    width: 50%;\n    max-width: 20rem;\n    display: block;\n    margin: auto;\n    margin-top: 2rem;\n  }\n  .search-form {\n    width: 100%;\n    margin-top: 1rem;\n    input {\n      width: 100%;\n      font-size: 1em;\n      padding: 0.5rem;\n    }\n  }\n  .lock-list {\n    margin-top: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    .lock-item {\n      width: calc(50% - 1rem);\n      margin-right: 1rem;\n      margin-bottom: 1rem;\n      background-color: #f5f5f7;\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 1rem;\n      border-radius: 0.125rem;\n      overflow: hidden;\n      &:nth-child(even) {\n        width: 50%;\n        margin-right: 0;\n      }\n      .top-container {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        background-color: #005ce6;\n        color: white;\n        padding: 0.5rem 0.5rem 0.5rem 0.75rem;\n        .lock-nickname {\n          font-size: 1em;\n          font-weight: lighter;\n        }\n        .icons {\n          position: relative;\n          top: 0.125rem;\n          font-size: 1em;\n          .close-btn {\n            margin-left: 0.125rem;\n          }\n        }\n      }\n      .sensitive-data {\n        display: flex;\n        flex-direction: column;\n        padding: 0.75rem;\n        overflow: auto;\n        span {\n          color: gray;\n          font-size: 0.9em;\n          margin-bottom: 0.25rem;\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n      }\n    }\n  }\n']);return ne=function(){return e},e}var te=Object(m.b)((function(e){var n=e.className,t=g.currentUser,i=Object(d.c)((function(e){return e.auth.msp})),o=Object(d.c)((function(e){return e.auth.authenticated})),s=Object(a.useRef)(),l=Object(a.useState)(null),u=Object(c.a)(l,2),m=u[0],p=u[1],f=Object(a.useState)(null),b=Object(c.a)(f,2),h=b[0],w=b[1],y=function(){t&&v.child(t.uid).child("locks").once("value",(function(e){var n=[];e&&e.forEach((function(e){n.push({uuid:e.val().uuid,nickname:q(e.val().nickname,i),username:q(e.val().username,i),password:q(e.val().password,i)})})),p(n),w(n)}))},O=function(e){var n=e.currentTarget.dataset.id,t=document.getElementById("".concat(n,"-item")),a=t.children[0].children[1].children[0],r=t.children[0].children[1].children[1],i=t.children[1],o=e.currentTarget.id==="".concat(n,"-show");i.children[0].innerText=o?N(n).username:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf",i.children[1].innerText=o?N(n).password:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf",a.style.display=o?"none":"inline",r.style.display=o?"inline":"none"},j=function(e){var n=e.currentTarget.dataset.id,a=N(n).nickname;window.confirm("Are you sure you want to delete ".concat(a," from your vault?"))&&E.database().ref("".concat(t.uid,"/locks/").concat(n)).remove().then((function(){return y()}))},N=function(e){return m.filter((function(n){return n.uuid===e}))[0]};Object(a.useEffect)((function(){y()}),[]);var x=h&&r.a.createElement("ul",{className:"lock-list"},h.map((function(e){return e.uuid&&r.a.createElement("li",{key:e.uuid,id:"".concat(e.uuid,"-item"),className:"lock-item shadow"},r.a.createElement("div",{className:"top-container"},r.a.createElement("h3",{className:"lock-nickname"},e.nickname),r.a.createElement("div",{className:"icons"},r.a.createElement(Q.b,{className:"btn",id:"".concat(e.uuid,"-show"),"data-id":e.uuid,onClick:O}),r.a.createElement(Q.a,{className:"btn",id:"".concat(e.uuid,"-hide"),"data-id":e.uuid,style:{display:"none"},onClick:O}),r.a.createElement(T.b,{className:"close-btn btn",id:"".concat(e.uuid,"-close"),"data-id":e.uuid,onClick:j}))),r.a.createElement("ul",{className:"sensitive-data"},r.a.createElement("span",null,"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"),r.a.createElement("span",null,"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf")))})));return o?r.a.createElement("div",{className:n},r.a.createElement("img",{className:"auth-image",src:ee.a,alt:"authentication_iso_image",draggable:!1}),r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{type:"text",placeholder:"SEARCH",onChange:function(e){var n=m.filter((function(n){return n.nickname.toLowerCase().startsWith(e.target.value.toLowerCase())}));w(n)},ref:s})),x):null}))(ne()),ae=t(68),re=t(164),ie=t(163),oe=t.n(ie);function ce(){var e=Object(u.a)(["\n  .finger-print-image {\n    width: 50%;\n    max-width: 20rem;\n    display: block;\n    margin: auto;\n    margin-top: 2rem;\n    user-select: none;\n  }\n  .auth-form {\n    position: relative;\n    width: 50%;\n    margin: auto;\n    margin-top: 2rem;\n    .text-input {\n      width: 100%;\n      font-size: 1em;\n      padding: 0.5rem;\n      padding-right: 2rem;\n      margin-bottom: 1rem;\n      border: none;\n      border-bottom: 1px solid lightgray;\n      &:last-child {\n        margin-bottom: 0;\n      }\n      &:focus {\n        outline: none;\n      }\n    }\n    .login-btn {\n      position: absolute;\n      top: 0.25rem;\n      right: 0;\n      color: #005ce6;\n      background-color: transparent;\n      border: none;\n      font-size: 1.5em;\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n"]);return ce=function(){return e},e}var se=Object(m.b)((function(e){var n=e.className,t=Object(a.useState)(""),i=Object(c.a)(t,2),o=i[0],s=i[1],l=g.currentUser,u=Object(a.useRef)(),m=Object(d.b)();return Object(a.useEffect)((function(){u.current.focus()}),[]),r.a.createElement("div",{className:n},r.a.createElement("img",{className:"finger-print-image",src:oe.a,alt:"finger_print_image",draggable:!1}),r.a.createElement("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),null!=o&&v.child(l.uid).child("msp").on("value",(function(e){var n=q(e.val(),o);o===n?(m({type:"AUTHENTICATE",msp:o}),setTimeout((function(){m({type:"DEAUTHENTICATE"})}),18e4)):(alert("You are not authenticated."),m({type:"DEAUTHENTICATE"}))}))}},r.a.createElement("input",{className:"text-input",name:"password",type:"password",placeholder:"MASTER PASSWORD",value:o,onChange:function(e){s(e.target.value)},ref:u,required:!0}),r.a.createElement("button",{type:"submit",className:"login-btn btn"},r.a.createElement(re.a,{className:"login-icon"}))))}))(ce()),le=function(e){var n=e.component,t=(e.authRequired,Object(ae.a)(e,["component","authRequired"])),i=Object(d.c)((function(e){return e.auth.authenticated})),o=new C.a;o.is().min(8).has().not().spaces();var c=g.currentUser;return Object(a.useEffect)((function(){c&&v.child(c.uid).child("msp").on("value",(function(e){null===e.val()&&function(){for(var e=null,n=null,t=!1;!t;){for(;null===e;)e=prompt("You don't have a master password set. Please type in new master password (at least 8 characters):"),o.validate(e)||(e=null);null===(n=prompt("Please re-enter your master password to confirm:"))?e=null:n===e&&(t=!0)}v.child(c.uid).child("msp").set(W(e,e))}()}))}),[]),r.a.createElement(l.b,Object.assign({},t,{render:function(e){return g.currentUser?i?r.a.createElement(n,e):r.a.createElement(se,null):r.a.createElement(l.a,{to:"/login"})}}))};function ue(){var e=Object(u.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  ul {\n    list-style: none;\n    user-select: none;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  .section-header {\n    font-size: 2em;\n    font-weight: lighter;\n    text-align: center;\n  }\n  .btn {\n    &:hover {\n        cursor: pointer;\n    }\n  }\n  .shadow {\n    box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.2); \n  }\n"]);return ue=function(){return e},e}var me=Object(m.a)(ue());var de=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=(n[0],n[1]),i=Object(a.useState)(!1),o=Object(c.a)(i,2),u=o[0],m=o[1],d=Object(a.useState)(null),p=Object(c.a)(d,2),f=(p[0],p[1]);return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){e?(t(!0),f(e)):t(!1),m(!0)}))}),[]),r.a.createElement("div",{className:"App"},u?r.a.createElement(s.a,{basename:"/lockey"},r.a.createElement(O,null),r.a.createElement(l.d,null,r.a.createElement(le,{exact:!0,path:"/",component:V}),r.a.createElement(l.b,{path:"/login",component:Z}),r.a.createElement(le,{exact:!0,path:"/myvault",component:te})),r.a.createElement(me,null)):null)},pe=t(39),fe=t(165),be=Object(pe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USER":return n.user;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE":return Object(p.a)({},e,{authenticated:!0,msp:n.msp});case"DEAUTHENTICATE":return Object(p.a)({},e,{authenticated:!1,msp:""});default:return e}}}),he=Object(pe.createStore)(be,Object(fe.composeWithDevTools)());o.a.render(r.a.createElement(d.a,{store:he},r.a.createElement(de,null)),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.6282aea6.chunk.js.map