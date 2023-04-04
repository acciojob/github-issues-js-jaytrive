//your code here
let page=1;
let heading=document.getElementById('heading');
let issues=document.getElementById('issues');
function findIssues() {
	fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
		.then((res) => res.json())	
		.then((data) => {
			issues.innerHTML="";
			data.forEach(issue => {
		        const issueItem = document.createElement('li');
		        issueItem.textContent = issue.title;
		        issues.appendChild(issueItem);
		    });
		});
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

