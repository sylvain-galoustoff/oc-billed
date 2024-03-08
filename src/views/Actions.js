import eyeBlueIcon from "../assets/svg/eye_blue.js"
import downloadBlueIcon from "../assets/svg/download_blue.js"

export default (billUrl, index) => {
  return (
    `<div class="icon-actions">
      <div id="eye-${index}" data-testid="icon-eye-${index}" data-bill-url=${billUrl}>
      ${eyeBlueIcon}
      </div>
    </div>`
  )
}