/* Created by Tivotal */

let filterItems = document.querySelector(".items");
let filterImg = document.querySelectorAll(".gallery .image");
let prevBox = document.querySelector(".preview-box");
let categoryName = prevBox.querySelector(".title p");
let closeIcon = prevBox.querySelector(".icon");
let prevImg = prevBox.querySelector("img");
let shadow = document.querySelector(".shadow");

//once window loaded
window.onload = () => {
  //if user clicks the items div
  filterItems.onclick = (selectedItem) => {
    //if user clicks the item which has item class name
    if (selectedItem.target.classList.contains("item")) {
      //removing active class from item which has active class
      filterItems.querySelector(".active").classList.remove("active");

      //adding active class to selected item
      selectedItem.target.classList.add("active");

      //getting filter data from the selected item
      let filterVal = selectedItem.target.getAttribute("data-name");

      filterImg.forEach((image) => {
        //getting filter value for all images
        let imgFilter = image.getAttribute("data-name");

        //if the filter value and image attribute are same
        //or the filter value is equal to all
        if (imgFilter == filterVal || filterVal == "all") {
          //removing hide class from the images
          image.classList.remove("hide");

          //adding show class to images
          image.classList.add("show");
        } else {
          //if the filert value is not equal to filter name or all
          //adding hide class from the images
          image.classList.add("hide");

          //removing show class to images
          image.classList.remove("show");
        }
      });
    }
  };

  //adding on click attribute to images
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};

//previw function
function preview(element) {
  //making body not scrollable
  document.querySelector("body").style.overflow = "hidden";

  //getting selected image source
  let selectedPrevImage = element.querySelector("img").src;

  //getting selected category name
  let selectedPrevCat = element.getAttribute("data-name");

  //showing the preview
  prevBox.classList.add("show");

  //showing shadow
  shadow.classList.add("show");

  //adding category name
  categoryName.textContent = selectedPrevCat;

  //displaying the image
  prevImg.src = selectedPrevImage;

  //making close icon functional
  closeIcon.onclick = () => {
    //hiding the preview
    prevBox.classList.remove("show");

    //hiding shadow
    shadow.classList.remove("show");

    //making body scrollable
    document.querySelector("body").style.overflow = "auto";
  };
}
