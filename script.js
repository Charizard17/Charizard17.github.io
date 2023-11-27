document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the details buttons
  const detailsButtons = document.querySelectorAll(".project-details")

  // Add click event listener to each details button
  detailsButtons.forEach(function (button) {
    button.addEventListener("click", showProjectDetails)
  })

  // Function to show project details
  function showProjectDetails() {
    // Retrieve project information from data attributes
    const projectTitle = this.dataset.title
    const projectInfo = this.dataset.info
    const technologies = this.dataset.technologies
    const projectLogo = this.dataset.logo
    const projectImages = this.dataset.images
    const websiteLink = this.dataset.website
    const codebaseLink = this.dataset.codebase
    const appstoreLink = this.dataset.appstore
    const playstoreLink = this.dataset.playstore

    // Check if the images attribute is defined and not empty
    const imageSources =
      projectImages && projectImages !== "" ? projectImages.split(",") : []

    // Create the project details dialog
    const dialog = createProjectDetailsDialog(
      projectTitle,
      imageSources,
      projectInfo,
      technologies,
      projectLogo,
      websiteLink,
      codebaseLink,
      appstoreLink,
      playstoreLink
    )

    // Append the dialog to the document body
    document.body.appendChild(dialog)

    // Show the dialog
    dialog.showModal()

    // Close the dialog when the close button is clicked
    const closeButton = dialog.querySelector(".dialog-close-button")
    closeButton.addEventListener("click", function () {
      dialog.close()
    })

    // Close the dialog when clicking outside of it
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close()
      }
    })
  }

  // Function to create the project details dialog
  function createProjectDetailsDialog(
    title,
    imageSources,
    projectInfo,
    technologies,
    projectLogo,
    websiteLink,
    codebaseLink,
    appstoreLink,
    playstoreLink
  ) {
    // Create the dialog element
    const dialog = document.createElement("dialog")
    dialog.classList.add("project-details-dialog")

    // Create the dialog content
    const content = `
      <div class="project-details-dialog-slider">
        <button class="prev-button"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next-button"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div class="project-details-dialog-title-logo-container">
      ${
        projectLogo
          ? `<img src="${projectLogo}" alt="${title} Logo" class="project-details-dialog-app-logo">`
          : ""
      }
        <h3 class="project-details-dialog-title">${title}</h3>
      </div>
      <p class="project-details-dialog-text">${projectInfo}</p>
      <p class="project-details-dialog-tech"><strong>Tech Stack:</strong> ${technologies}</p>
      <div class="project-details-dialog-links">
        ${
          appstoreLink
            ? `<a href="${appstoreLink}" target="_blank">App Store <i class="fa-brands fa-app-store-ios"></i></a>`
            : ""
        }
        ${
          playstoreLink
            ? `<a href="${playstoreLink}" target="_blank">Play Store <i class="fa-brands fa-google-play"></i></a>`
            : ""
        }
        ${
          websiteLink
            ? `<a href="${websiteLink}" target="_blank">Website <i class="fa-solid fa-globe"></i></a>`
            : ""
        }
        ${
          codebaseLink
            ? `<a href="${codebaseLink}" target="_blank">GitHub <i class="fab fa-github"></i></a>`
            : ""
        }
      </div>
      <button class="dialog-close-button"><i class="fa-sharp fa-solid fa-xmark"></i></button>
    `

    // Set the content of the dialog
    dialog.innerHTML = content

    // Get the slider container
    const sliderContainer = dialog.querySelector(
      ".project-details-dialog-slider"
    )

    // Create the image slider
    imageSources.forEach((src) => {
      const img = document.createElement("img")
      img.src = src
      img.alt = "Project Image"
      img.classList.add("slider-image")
      sliderContainer.appendChild(img)
    })

    // Show the first image initially
    const sliderImages = dialog.querySelectorAll(".slider-image")
    sliderImages[0].classList.add("active")

    // Function to show the current image
    function showImage(index) {
      sliderImages.forEach((img) => img.classList.remove("active"))
      sliderImages[index].classList.add("active")
    }

    let currentIndex = 0

    // Add event listener for previous button click
    const prevButton = dialog.querySelector(".prev-button")
    prevButton.addEventListener("click", function () {
      currentIndex =
        (currentIndex - 1 + sliderImages.length) % sliderImages.length
      showImage(currentIndex)
    })

    // Add event listener for next button click
    const nextButton = dialog.querySelector(".next-button")
    nextButton.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % sliderImages.length
      showImage(currentIndex)
    })

    return dialog
  }
})
