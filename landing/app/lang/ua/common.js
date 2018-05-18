module.exports = {
    // url ========================================
    urlCss: '<link rel="stylesheet" href="../css/all.min.css">',
    urlJs: '<script src="../js/all.min.js"></script>',

    // localize ========================================
    localLang: "ua",

    // language button dropdown ========================================
    langBtn: '          <div class="btn-group">\n                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">${{common.localLang}}$ <span class="caret"></span></button>\n                <ul class="dropdown-menu" role="menu">\n                    <li><a href="/${{common.localLangTo}}$/">${{common.localLangTo}}$</a></li>\n                </ul>\n            </div>',

    localLangTo: 'ru',

    // titles ========================================
    h1: 'Красивою бути мо<span class="d_letter">d</span>но',

    // menu ========================================
    aboutLink: 'про нас',
    folioLink: 'галерея',
    priceLink: 'прайс',
    shopLink: 'магазин',
    reviewsLink: 'відгуки',
    contactsLink: 'контакти',

    // button send ========================================
    sendBtn: 'записатися',

    // form ========================================
    userNamePat: '[^а-яА-ЯїЇєЄіІёЁ\s]+${3,25}',
    userName: 'Ім\'я',
    userPhone: 'Номер',
    userMessage: 'Повідомлення',
    form: '<form action="" id="form">\n    <div class="user_name_bl">\n        <input type="text" placeholder="${{common.userName}}$" name="user_name" pattern="${{common.userNamePat}}$" required >\n        <label for="user_name">${{common.userName}}$</label>\n    </div>\n    <div class="user_phone_bl">\n        <input type="tel" class="user_phone" placeholder="${{common.userPhone}}$" name="user_phone" pattern="^[0-9-+\\s()]*$" required>\n        <label for="user_phone">${{common.userPhone}}$</label>\n    </div>\n    <div class="user_comment_bl">\n        <textarea name="user_comment" placeholder="${{common.userMessage}}$"></textarea>\n        <label for="user_comment">${{common.userMessage}}$</label>\n    </div>\n    <div class="button_bl">\n        <button class="data_send_btn">${{common.sendBtn}}$</button>\n    </div>\n</form>',

    // contacts ========================================
    adress: '<p>вул. Є. Чавдар, 12</p>\n                            <p>ст. м. Осокорки</p>\n                            <p>тел.: <a href="tel:+380503876351">+38(050) 387-63-51</a></p>',

    // top button ========================================
    topBtn: '<div class="top_btn_bl"><a class="scroll" href="#top">top</a></div>',

    // modal ========================================
    modal: '<div class="modal_bl">\n        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>\n                    </div>\n                    <div class="modal-body">\n                        <!-- FORM BLOCK -->\n                        <div class="form_block">${{common.form}}$</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>',
};