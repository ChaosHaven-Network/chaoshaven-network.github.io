document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('copyButton');
  const tooltip = document.getElementById('myTooltip');

  copyButton.addEventListener('click', function () {
    const textToCopy = "play.chaoshaven.hs.vc";
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        tooltip.innerHTML = "Copied: " + textToCopy;
      } else {
        tooltip.innerHTML = "Failed to copy";
      }
    } catch (err) {
      tooltip.innerHTML = "Error: " + err;
    }
    document.body.removeChild(textarea);
    tooltip.classList.add("show");
    setTimeout(function () {
      tooltip.classList.remove("show");
    }, 2000);
  });
});