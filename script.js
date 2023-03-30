//your code here
let page=1;
let heading=document.getElementById('heading');
let issues=document.getElementById('issues');
function findIssues() {
	fetch("https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5").then((res) => res.json())
																											  .then((data) => console.log(data));
}

function showPrev() {
	if(page>1){
		page--;
		heading.innerText=`Page number ${page}`;
		findIssues();
	}
}

	function showNext() {
	page++;
	heading.innerText=`Page number ${page}`;
	findIssues();
}

