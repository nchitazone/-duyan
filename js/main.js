$(document).ready(function()
     {
    //const w_heigh = document.body.offsetHeight;
    let w_heigh = $('#container').outerHeight();
    $('#sidebar').css({"height":w_heigh});

      if (document.getElementById("sidebar_first") != null){
     $("#more").remove();
   }

});
$(function() { 
  // open link post in new tab
   $('#articleInner #content a').each(function () {
   	 $(this).attr('target', '_blank');
  	}); 



        // $path = '<h3 style="font-size:15px" id="URL"><a href="#URL" class="headerlink" title="URL Link"></a>URL Link</h3>'+
        // '<p style="font-size:15px;font-style: italic;color: #6594e0;"><a href="'+window.location.href+ '">'+window.location.href+'</a></p>'


        // $("#profile").before($path);


        // function getRandam(n, m){
        //   for (let i = 0 ; i < 5 ; i++){
        //     let num = Math.floor(Math.random() * (m + 1 - n)) + n;
        //     return num
        //   }
        // };
        // if(window.location.href !== 'https://laptrinhcanban.com/'){
        //     let ran = getRandam(1, $("h2").length);
        //     n = 0;
        //     $("h2").each(function () {
        //         n += 1;
        //         if (n==ran){
        //             $path = '<div style="color:white;margin-top: -30px;margin-bottom: -20px;">'+ '<a style="color:white;" href="' +   window.location.href+ '">Nguồn: '+window.location.href+  '</div>';
        //             $(this).after($path);
        //         }

        //     }); 
        // }


        // $path = '<div style="color:white;margin-top: -30px;margin-bottom: -20px;">'+window.location.href+'</div>';
        // $("#Tong-ket").after($path);
        // $("#Tong-ket-va-thuc-hanh").after($path);

// document.addEventListener('copy', (event) => {
//   const pagelink = `\n\nSource: ${document.location.href}`;
//   event.clipboardData.setData('text/plain', document.getSelection() + pagelink);
//   event.preventDefault();
// });

jQuery(':button').click(function (event) {
    //console.log("here");
    let text = $(this).siblings()[0].innerText ;
    let $textarea = $('<textarea></textarea>');
    $textarea.text(text);
    $(this).append($textarea);
    $textarea.select();
    document.execCommand('copy');
    $textarea.remove();


    $(this).text("Copied"); 

    setTimeout(function(){
      $('.code-copy-btn').text("Copy");
    },2000)
});

   //progress bar
//let $pagetop = $('.scroll-header');
let $pagetop = $('.progress-container');

$(window).on( 'scroll', function () {
    //スクロール位置を取得
      let scroll = $(this).scrollTop();
    if ( $(this).scrollTop() < 250 ) {
      $pagetop.removeClass('isActive');
    } else {
      $pagetop.addClass('isActive');
    }
  });

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight-1000;
  let scrolled = ((winScroll -300) / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  /*if (scrolled > 100){
    //$('#sidebar').css({"position":"fixed","top":"40px","-moz-transition": "top 0.1s linear"});

  }else{
    //$('#sidebar').css({"top":"-1485px"});
    //$('#sidebar').css({"position":"sticky","position": "-webkit-sticky"});
  }
  */
}


 
});

//sw
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
  // Registration was successful
  //console.log('Registered!');
  }, function(err) {
  // registration failed :(
  //console.log('ServiceWorker registration failed: ', err);
  }).catch(function(err) {
  //console.log(err);
  });
  });
  } else {
  //console.log('service worker is not supported');
  }

//change main url
$('.widget .category-list .category-list-item').each(function () {
    li_href= $(this)[0].firstChild.href;
    
    if(li_href =="https://laptrinhcanban.com/c/"){
        url ="https://laptrinhcanban.com/c/lap-trinh-c-co-ban/"
        $(this)[0].firstChild.setAttribute('href', url);

    }else if(li_href =="https://laptrinhcanban.com/cpp/"){
         url ="https://laptrinhcanban.com/cpp/lap-trinh-cpp-co-ban/"
        $(this)[0].firstChild.setAttribute('href', url); 
        //$(this)[0].innerText = 'C++';       
    }else if(li_href =="https://laptrinhcanban.com/java/"){
         url ="https://laptrinhcanban.com/java/java-co-ban-cho-nguoi-moi-bat-dau/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }else if(li_href =="https://laptrinhcanban.com/javascript/"){
         url ="https://laptrinhcanban.com/javascript/javascript-co-ban-den-nang-cao/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }else if(li_href =="https://laptrinhcanban.com/php/"){
         url ="https://laptrinhcanban.com/php/nhap-mon-lap-trinh-php/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }else if(li_href =="https://laptrinhcanban.com/python/"){
         url ="https://laptrinhcanban.com/python/nhap-mon-lap-trinh-python/"
        $(this)[0].firstChild.setAttribute('href', url);       
    }
 }); 

// Highlight current nav item
let hasCurrent = false;
$('#main-nav > li').each(function () {
	let url = window.location.href;
 

	// if(url.toUpperCase().indexOf($(this).text().trim().toUpperCase()) != -1){
  let tt= $(this).text();
  if (tt=="c++") tt="cpp";
  if(url.search( "\/"+ tt+"\/") != -1){
		$(this).addClass('current-menu-item current_page_item');
		hasCurrent = true;

  // console.log(url.indexOf("\/"+$(this).text()+"\/" ));
  //  console.log("text", "\/"+$(this).text()+"\/"  );

	} else {
		$(this).removeClass('current-menu-item current_page_item');
	}
});

if (!hasCurrent) {
	$('#main-nav > li:first').addClass('current-menu-item current_page_item');
}




$('.widget .category-list ul > li').each(function () {




	url = window.location.href;
	li_href= $(this)[0].firstElementChild.href;
	url_arr = url.split("/")[5]
	li_href_arr=li_href.split("/")[5]


	

	if( url.split("/")[3] != li_href.split("/")[3] ){
    //console.log(url.split("/")[3]);
		$(this)[0].style.display ="none";

	}



	if(url_arr == li_href_arr && url_arr !="" & li_href_arr!=""){
		$(this).addClass('current_page_item');
	} else {
		$(this).removeClass('current_page_item');
	}
});


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });


