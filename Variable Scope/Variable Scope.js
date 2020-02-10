<!DOCTYPE html>
<html>
<head>
<title>Variable Scope</title>
</head>

<body>
<script>

var theSum = 5;

function addNumbers() {
	var theSum = 2 + 2;
	alert("Local scope: " + theSum);
}

addNumbers();
alert("Global scope: " + theSum);


</script>

</body>
</html>