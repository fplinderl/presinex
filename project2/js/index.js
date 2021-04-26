document.querySelector('.ti-menu').onclick = function() {
    if (document.querySelector('.header>ul').style.top == '-1000px')
        document.querySelector('.header>ul').style.top = ''
    else document.querySelector('.header>ul').style.top = '-1000px'
}
var lis = document.querySelectorAll('.header>ul>li')
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        if (screen.width < 1025) {
            if (this.querySelector('ul').style.display == 'block') {
                this.querySelector('ul').style = 'display:none'

            } else {
                var opened_li = document.querySelectorAll('.header>ul>li>ul[style*="block"]')
                if (opened_li.length > 0) {
                    for (var li of opened_li) {
                        li.style = 'display:none'
                    }
                }
                this.querySelector('ul').style = 'display:block'
            }
        }
    }
}
var first_slice = 0
var slice_img = ["./img/logo-1.png", "./img/logo-2.png", "./img/logo-1.png", "./img/logo-3.png", "./img/logo-2.png", "./img/logo-1.png", "./img/logo-2.png", ]
var job = ['Graduate Inside Sales Executive Job', 'Senior Rolling Stock Technician Required', 'Operational Manager Part Time Job', 'Website Information Officer Required', 'Computer Operator and Information Tech', 'Graduate Inside Sales Representatives', 'Java Developer Scala Spring Linux Java Dev']
var year = ['1 year ago', '1 year ago', '1 year ago', '1 year ago', '1 year ago', '1 year ago', '2 year ago']
var three_slice = document.querySelectorAll('.slice_bar .slice_pages .slice_page')
document.querySelector('.slice .slice_bar button:first-child').onclick = function() {
    if (first_slice > 0) {
        first_slice--
        for (var i = 0; i < three_slice.length; i++) {
            if (first_slice + i >= job.length) {
                three_slice[i].innerHTML = ''
                three_slice[i].style = 'background-color: #1D73BE;'
            } else {
                three_slice[i].innerHTML = `<p><i class=\"ti-star button\"></i></p>
                                            <img src=\"${slice_img[first_slice+i]}" alt=\"\">
                                            <p>${job[first_slice+i]}</p>
                                            <p>${year[first_slice+i]} <i class=\"ti-heart button\"></i></p>`
                three_slice[i].style = ''
            }
        }
    }
}
document.querySelector('.slice .slice_bar button:last-child').onclick = function() {
    if (first_slice + 1 < job.length) {
        first_slice++
        for (var i = 0; i < three_slice.length; i++) {
            if (first_slice + i >= job.length) {
                three_slice[i].innerHTML = ''
                three_slice[i].style = 'background-color: #1D73BE;'
            } else {
                three_slice[i].innerHTML = `<p><i class=\"ti-star button\"></i></p>
                                            <img src=\"${slice_img[first_slice+i]}" alt=\"\">
                                            <p>${job[first_slice+i]}</p>
                                            <p>${year[first_slice+i]} <i class=\"ti-heart button\"></i></p>`
            }
        }
    }
}