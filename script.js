var sum=0;
initiate();
function initite()
{
				document.getElementById('dice-1').style.opacity = "0";
				document.getElementById('text').textContent="0";
                timer();
}

	function work()
	{

				var dice=Math.floor(Math.random()*6)+1;
				document.getElementById('dice-1').style.opacity="1";
				document.getElementById('dice-1').src='dice-'+dice+'.jpg';
				sum=sum+dice;
				document.getElementById('text').textContent=sum;

			}
			
			function timer()
			{
				var x=20;
		 var y=setInterval(function(){
		 	document.getElementById("timer").innerHTML=x;
				x=x-1;
				if(x<0)
				{
					clearInterval(y);
					document.getElementById("timer").innerHTML="STOP";
					document.getElementById('button-2').disabled=true;
					alert("your score="+sum);
				}
				document.getElementById("timer").innerHTML=x;
			},1000);
		}