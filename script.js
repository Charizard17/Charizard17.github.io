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
    const viewSourceLink = this.dataset.source
    const viewCodebaseLink = this.dataset.codebase
    const projectImage = this.closest(".project").querySelector("img").src

    // Create the project details dialog
    const dialog = createProjectDetailsDialog(
      projectTitle,
      projectImage,
      projectInfo,
      technologies,
      viewSourceLink,
      viewCodebaseLink
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
    imageSrc,
    projectInfo,
    technologies,
    viewSourceLink,
    viewCodebaseLink
  ) {
    // Create the dialog element
    const dialog = document.createElement("dialog")
    dialog.classList.add("project-details-dialog")

    // Set the maximum width of the dialog
    dialog.style.maxWidth = "600px"

    // Create the dialog content
    const content = `
          <img src="${imageSrc}" alt="Project Image" class="project-details-dialog-image" style="padding: 0;">
          <h3 class="project-details-dialog-title">${title}</h3>
          <p class="project-details-dialog-text">${projectInfo}</p>
          <p class="project-details-dialog-tech"><strong>Tech Stack:</strong> ${technologies}</p>
          <div class="project-details-dialog-links">
            <a href="${viewSourceLink}" target="_blank" class="dialog-button">View Source</a>
            <a href="${viewCodebaseLink}" target="_blank" class="dialog-button">View Codebase</a>
          </div>
          <button class="dialog-close-button" ><i class="fa-regular fa-x"></i></button>
        `

    // Set the content of the dialog
    dialog.innerHTML = content

    return dialog
  }
})
