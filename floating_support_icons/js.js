if(type == "whatsapp"){
	photo = "https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png";
	Link = "https://api.whatsapp.com/send?phone="+id;
}

if(type == "facebook"){
	photo = "https://icons.iconarchive.com/icons/sicons/basic-round-social/512/facebook-icon.png";
	Link = "https://facebook.com/"+id;
}

if(type == "snapchat"){
	photo = "https://www.freedomforuminstitute.org/wp-content/uploads/2016/10/snapchat-icon1.png";
	Link = "https://www.snapchat.com/add/"+id;
}


if(type == "number"){
	photo = "https://www.freeiconspng.com/thumbs/telephone-icon/mobile-phone-icon-phone-telephone-icon-22.png";
	Link = "tel:"+id;
}
document.getElementById("btn").innerHTML = '<link rel="stylesheet" type="text/css" href="style.css"><div class="open-button"><a class="link" href="#whatsapp"><img width="60px" class="img" src="'+photo+'"><br></a><center><a class="title" href="https://www.example.com">test</a></center></div>';
$('.link').attr("href", Link);