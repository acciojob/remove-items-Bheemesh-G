//your JS code here. If required.

const button = document.getElementsByTagName('input');

button[0].addEventListener('click',(event)=>{

	const colorSelect = document.getElementById("colorSelect");

	const selectedIndex = colorSelect.selectedIndex;

	if(selectedIndex!==-1)
	{
		colorSelect.remove(selectedIndex);
	}
});
