$.ajax({
		// function getLocation(); ---- not working -------
		// When trying to run the function via button click, information fils to display
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
                $('#country').html(location.country_name);
                $('#state').html(location.state);
                $('#city').html(location.city); 
         
            }
        });