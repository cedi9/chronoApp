<?php
// Converting db values into json data
	heade('content-type: application/json');
	mysql_connect('localhost','chronosh_dbuser','TOmR)29.6pCq') or die(mysql_errno());
	mysql_select_db(chronosh_geolocal);

	$select = mysql_query('SELECT * FROM "promo"');
	$row=array();

	while($row=mysql_fetch_array($select)){
		$rows[] = $row;
	}


echo json_encode($rows);

//////////////
$(document).ready(function){
	$.ajax({
		type: "POST",
		data_Type: "json",
		url: "load.php",
		data: (page: link),
		success: function(returnpage){
			$("#content").html(returnpage);
		}
	});
};

////////////
?>

