<?php

include 'Db_conn.php';
if(!$conn)
    die(mysqli_connect_error());
$sql="SELECT box_index,box_name,box_image FROM nav_boxes";
$result=mysqli_query($conn,$sql);
$rows['heading']=array();
$rows['sub_menu']=array();
while($r=mysqli_fetch_assoc($result))
{
	array_push($rows['heading'],$r);
}

$sql="SELECT box_index,item_number,item_name,item_link,item_info,item_image FROM nav_list";
$result=mysqli_query($conn,$sql);
while($r=mysqli_fetch_assoc($result))
{
	array_push($rows['sub_menu'],$r);
}
$json = json_encode($rows);
echo $json;
mysqli_close($conn);
