const faq = document.querySelectorAll(".each_faq")

faq.forEach(faq => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active")
	})
})