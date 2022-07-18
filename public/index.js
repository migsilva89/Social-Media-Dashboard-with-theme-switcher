var html = document.querySelector('html');
var toggler = document.getElementById('default-toggle')

toggler.addEventListener('click', function(){
    html.classList.toggle('dark');
})
