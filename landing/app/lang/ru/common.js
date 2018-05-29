module.exports = {
    // url
    urlCss: '<link rel="stylesheet" href="../css/all.min.css">',
    urlJs: '<script src="../js/all.min.js"></script>',

    // localize
    localLang: "ru",

    localLangTo: 'ua',

    // titles ========================================
    h1: 'Красивой быть модно',

    // menu
    aboutLink: 'о нас',
    folioLink: 'галерея',
    priceLink: 'прайс',
    shopLink: 'магазин',
    reviewsLink: 'отзывы',
    contactsLink: 'контакты',

    // button send ========================================
    sendBtn: 'записаться',

    // form ========================================

    userNamePat: '^[А-Яа-яЁё\s]+${3,25}',
    userName: 'Имя',
    userPhone: 'Номер',
    userMessage: 'Сообщение',
    form: '<form action="" id="form">\n    <div class="user_name_bl">\n        <input type="text" placeholder="${{common.userName}}$" name="user_name" pattern="${{common.userNamePat}}$" required >\n        <label for="user_name">${{common.userName}}$</label>\n    </div>\n    <div class="user_phone_bl">\n        <input type="tel" class="user_phone" placeholder="${{common.userPhone}}$" name="user_phone" pattern="^[0-9-+\\s()]*$" required>\n        <label for="user_phone">${{common.userPhone}}$</label>\n    </div>\n    <div class="user_comment_bl">\n        <textarea name="user_comment" placeholder="${{common.userMessage}}$"></textarea>\n        <label for="user_comment">${{common.userMessage}}$</label>\n    </div>\n    <div class="button_bl">\n        <button class="data_send_btn">${{common.sendBtn}}$</button>\n    </div>\n</form>',

    // contacts ========================================
    adress: '<p>ул. Е. Чавдар, 12</p>\n                            <p>ст. м. Осокорки</p>\n                            <p>тел.: <a href="tel:+380503876351">+38(050) 387-63-51</a></p>',

    // top button ========================================
    topBtn: '<div class="top_btn_bl"><a class="scroll" href="#top">top</a></div>',

    // modal ========================================
    modal: '<div class="modal_bl">\n        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>\n                    </div>\n                    <div class="modal-body">\n                        <!-- FORM BLOCK -->\n                        <div class="form_block">${{common.form}}$</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>',

};