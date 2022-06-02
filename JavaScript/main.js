let lastScrollTop = 0;
let navbar = document.querySelector('.header');
window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top='-80px';
  }
  else{
      navbar.style.top='0';
    }
  lastScrollTop = scrollTop;
  });


  // Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
	// Skills Offset Top
	let skillsOffsetTop = ourSkills.offsetTop;

	// Skills Outer Height
	let skillsOuterHeight = ourSkills.offsetHeight;

	// Window Height
	let windowHeight = this.innerHeight;

	// Window ScrollTop
	let windowScrollTop = this.pageYOffset;

	if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
		let allSkills = document.querySelectorAll(
			".skill-box .skill-progress span"
		);

		allSkills.forEach((skill) => {
			skill.style.width = skill.dataset.progress;
		});
	}
};
