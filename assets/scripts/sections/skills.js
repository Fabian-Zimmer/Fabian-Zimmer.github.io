// The following script is altered from the original, such that the first filter button is selected by default and highlightsed in the highlights color.
import Filterizr from 'filterizr'

document.addEventListener('DOMContentLoaded', () => {
  const skillCardHolder = document.getElementById('skill-card-holder')
  if (skillCardHolder != null && skillCardHolder.children.length !== 0) {
    new Filterizr('.filtr-skills', {
      layout: 'sameWidth',
      controlsSelector: '.skill-filtr-control',
      filter: 'highlights'
    })

    // Set Highlights as active on load
    document.querySelectorAll('.skill-filtr-control').forEach(btn => {
      btn.classList.remove('active')
    })
    const highlightsBtn = document.querySelector('.skill-filtr-control[data-filter="highlights"]')
    if (highlightsBtn) {
      highlightsBtn.classList.add('active')
    }

    // Ensure only one button is active at a time
    document.querySelectorAll('.skill-filtr-control').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.skill-filtr-control').forEach(b => b.classList.remove('active'))
        this.classList.add('active')
      })
    })
  }
})