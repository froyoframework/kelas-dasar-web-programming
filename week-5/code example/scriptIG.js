//$("#gambar").append("<img src='arduino.jpg'></img>");
$.get("https://api.instagram.com/v1/users/self/media/recent?access_token=22675325.71ecec0.a5c6dcd8b01e41ecbdf6d14191548d9c", function(res){
	for (var i = 0; i < 6; i++) {
			$("#gambar-"+i).append("<img src='"+res.data[i].images.low_resolution.url+"'></img>");
		}
	}
);


