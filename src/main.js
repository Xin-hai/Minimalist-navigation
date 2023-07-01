const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)


let currentUrl = 'https://www.baidu.com/s?wd='

$$('.search-panel >li').forEach($li => {
    $li.onclick = function () {
        $$('.search-panel >li').forEach($node => $node.classList.remove('active'))
        this.classList.add('active')
        let placeholder = this.dataset.holder
        $('.search-input').setAttribute('placeholder',placeholder)
        currentUrl = this.dataset.url
    }
})



$('.btn').onclick =  function(){
    let $link = document.createElement('a')
    $link.setAttribute('target', '_blank')
    $link.setAttribute('href',currentUrl+ $('.search-input').value)
    $link.click()
    // location.href = currentUrl + $('.search-input').value
}




document.addEventListener('keydown', function(e) {
    if (e.key =='Enter') {
        location.href = currentUrl + $('.search-input').value
    }
});