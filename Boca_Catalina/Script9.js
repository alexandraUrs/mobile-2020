
var vid=document.getElementById("vdisk");
var nr_apasari_next=0;
var nr_apasari_previous=0;
document.getElementById("btn_previous").addEventListener("click",go_back);
document.getElementById("btn_next").addEventListener("click",go_next);
function go_next()
{
	btn_previous.disabled=false;
	if(nr_apasari_next==0)
	{
		vid.src="sisec2.mp4";
		nr_apasari_next=nr_apasari_next+1;
		nr_apasari_previous=nr_apasari_previous-1;
	}
	
	else if(nr_apasari_next>=2)
	{
		btn_next.disabled=true;
	}
}
function go_back()
{
	btn_next.disabled=false;
    nr_apasari_previous=nr_apasari_previous+1;
	if((nr_apasari_next==0))
	{
		btn_previous.disabled=true;
	}
	else if(((nr_apasari_previous==1)&&(nr_apasari_next>=1)))
	{
		vid.src="sisec1.mp4";
		//nr_apasari_previous=nr_apasari_previous+1;
		nr_apasari_next=nr_apasari_next-1;
	}

}
