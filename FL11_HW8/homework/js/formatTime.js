function formatTime(m){
	var d = 0;
	var h = 0;
	if(m<60){
		return d+" day(s) " + h + " hour(s) " + m + " minute(s)";
	}else if(m<1440){
		h = Math.floor(m/60);
		m = m - h*60;
		return d+" day(s) " + h + " hour(s) " + m + " minute(s)";
	}else{
		d = Math.floor(m/1440);
		h = Math.floor((m-d*1440)/60);
		m = m - d*1440 - h*60;
	return d+" day(s) " + h + " hour(s) " + m + " minute(s)";
		}
	}

formatTime(100);