const colapse = document.querySelectorAll(".colage-custom-title");
const popupBtnTitle = document.querySelector(".popup-btn");
const popup = document.querySelector("#popup");
const popupClose = document.querySelector(".popup-btn-close");
const popupBtnClose = document.querySelector(".popup-btn-close-cus");
const popupBtn = document.querySelector(".popup-small");
const searchBtnClose = document.querySelector(".search-close");
const searchOverlay = document.querySelector(".search-box-overlay");
const searchBox = document.querySelector(".search-box-custom");
const searchContent = document.querySelector(".search-box-content");
const searchBtnHead = document.querySelector(".btn-search-head");

if (colapse) {
	colapse.forEach((col) => {
		col.addEventListener("click", () => {
			col.classList.toggle("active");
			if (col.classList.contains("active")) {
				col.children[1].innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
				col.nextElementSibling.style.display = "block";
			} else {
				col.children[1].innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
				col.nextElementSibling.style.display = "none";
			}
		});
	});
}

if (popup) {
	popupBtnTitle.addEventListener("click", () => {
		popup.style.display = "flex";
	});

	popupClose.addEventListener("click", () => {
		popup.style.display = "none";
	});

	popupBtnClose.addEventListener("click", () => {
		popupBtn.style.display = "none";
	});
}

if (searchBox) {
	searchOverlay.addEventListener("click", () => {
		searchBox.style.visibility = "hidden";
		searchContent.classList.remove("active");
	});
	searchBtnHead.addEventListener("click", () => {
		searchBox.style.visibility = "visible";
		searchContent.classList.add("active");
	});

	searchBtnClose.addEventListener("click", () => {
		searchBox.style.visibility = "hidden";
		searchContent.classList.remove("active");
	});
}

const qytMinus = document.querySelector(".checkout-minus");
const qytPlus = document.querySelector(".checkout-plus");
const qtyCart = document.querySelector("#qtyCart");

if (qtyCart) {
	function changeQtyCart(quanlity, callback) {
		let isOk = Number(qtyCart.value) + Number(quanlity) >= 0;
		if (isOk) {
			qtyCart.value = Number(qtyCart.value) + Number(quanlity);
			if (typeof callback === "function") {
				callback();
			}
		}
	}
	qytMinus.addEventListener("click", () => {
		changeQtyCart(-1);
	});
	qytPlus.addEventListener("click", () => {
		changeQtyCart(1);
	});
}
