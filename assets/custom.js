const res = {};
function result(qName, qValue) {

    qName !== undefined && qValue !== undefined ? res["'" + qName + "'"] = qValue : true;

    return res;
}

$(document).ready(function () {
    $(".bq1").click(function (e) {
        result($(e.target).parent().prop('id'), $(e.target).prop('dataset').bq);
    }), $(".bq2").click(function (e) {
        result($(e.target).parent().prop('id'), $(e.target).prop('dataset').bq);
    }), $(".bq3").click(function (e) {
        result($(e.target).parent().prop('id'), $(e.target).prop('dataset').bq);
    }), $(".bq4").click(function (e) {
        result($(e.target).parent().prop('id'), $(e.target).prop('dataset').bq);
    }), $(".boxes").click(function (e) {
        result($(e.target).parent().parent().parent().prop('class') + $(e.target).closest('[id]').prop('id'), $(e.target).closest('[id]').prop('id'));
    }), $("#p_modal_button3").on("click", function (e) {
        e.preventDefault();
        console.log(result());
    })
    
})

function isGuest() {
    return true
}

function addComment(e) {
    e.preventDefault();
    const form = document.querySelector('form').elements;
    const inputs = document.querySelectorAll('form input');
    const lastComment = document.querySelector('.comments_face').childNodes[1];
    console.log(lastComment);
    let commentsLength = document.querySelectorAll('.comments').length - 1;

    if( form[0].value == '' ){
        inputs.forEach(e => {
            e.required = true;
        });
    }else{
        if(isGuest()){
            commentsLength++;
            const newCard = new Card({
                id : 'comment'+ commentsLength,
                name : 'anonymous',
                photo : './assets/img/anonymous.jpg',
                text : form[0].value,
            });
            lastComment.insertAdjacentHTML('afterend', newCard.getTemplate())
        }
    }
    console.log(form[0].value);
}

class Card {
    constructor({
        id,
        name,
        photo,
        text,
    })  {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.text = text;
    }
  
    getTemplate() {
        return `<div class="comments" id="${this.id}" style="display:block">
                    <div class="profile">
                        <img src="${this.photo}">
                    </div>
                    <div class="comment-content">
                        <p class="name">
                            <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">${this.name}</font>
                            </font>
                        </p>
                        <p>
                            <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">${this.text}</font>
                            </font>
                        </p>
                    </div>
                    <div class="clr"></div>
                    <div class="comment-status">
                    <span>
                        <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Curte·comente</font>
                        </font>
                        <img src="./assets/img/like.png" width="15px" height="15px">
                        <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">29</font>
                        </font>
                    </span>
                    <font style="vertical-align: inherit;">
                        <small>
                        <font style="vertical-align: inherit;">·</font>
                        </small>
                        <small>
                        <u>
                            <font style="vertical-align: inherit;">4 minutos antes</font>
                        </u>
                        </small>
                    </font>
                    <small>
                        <font style="vertical-align: inherit;"></font>
                        <u>
                        <font style="vertical-align: inherit;"></font>
                        </u>
                    </small>
                    </div>
                </div>`;
    }
}

document.querySelector('.comments_face form').addEventListener('submit', addComment);