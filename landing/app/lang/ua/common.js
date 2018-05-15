module.exports = {
    // url ========================================
    urlCss: '<link rel="stylesheet" href="../css/all.min.css">',
    urlJs: '<script src="../js/all.min.js"></script>',

    // localize ========================================
    localLang: "ua",

    // language button dropdown ========================================
    langBtn: '          <div class="btn-group">\n                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">${{common.localLang}}$ <span class="caret"></span></button>\n                <ul class="dropdown-menu" role="menu">\n                    <li><a href="/${{common.localLangTo}}$/">${{common.localLangTo}}$</a></li>\n                </ul>\n            </div>',

    localLangTo: 'ru',

    // menu ========================================
    aboutLink: 'про нас',
    folioLink: 'галерея',
    priceLink: 'прайс-лист',
    shopLink: 'магазин',
    reviewsLink: 'відгуки',
    contactsLink: 'контакти',

    // form ========================================
    userName: '[^а-яА-ЯїЇєЄіІёЁ\s]+${3,25}',
    form: '<form action="" id="form">\n    <div class="user_name_bl">\n        <input type="text" placeholder="Name" name="user_name" pattern="${{common.userName}}$" required >\n        <label for="user_name">Name</label>\n    </div>\n    <div class="user_phone_bl">\n        <input type="tel" class="user_phone" placeholder="Phone" name="user_phone" pattern="^[0-9-+s()\s]*$" required>\n        <label for="user_phone">Phone</label>\n    </div>\n    <div class="user_comment_bl">\n        <textarea name="user_comment" placeholder="Comment"></textarea>\n        <label for="user_comment">Comment</label>\n    </div>\n    <div class="button_bl">\n        <button class="btn-lg light_btn">Lorem</button>\n    </div>\n</form>',

    // contacts ========================================
    adress: '<p>вул. Є. Чавдар, 12</p>\n                            <p>ст. м. Осокорки</p>\n                            <p>тел.: <a href="tel:+380503876351">+38(050) 387-63-51</a></p>',

    // top button ========================================
    topBtn: '<div class="top_btn_bl"><a class="scroll" href="#top">top</a></div>',
};
