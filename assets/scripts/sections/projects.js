import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Project cards =====================

  // setup project filter buttons
  const projectCardHolder = document.getElementById('project-card-holder')
  if (projectCardHolder != null && projectCardHolder.children.length !== 0) {
    // eslint-disable-next-line no-new
    new Filterizr('.filtr-projects', {
      layout: 'sameWidth',
      controlsSelector: '.project-filtr-control',
      filter: 'all' // Set default filter to "all"
    })

    // Set "All" as active on load
    document.querySelectorAll('.project-filtr-control').forEach(btn => {
      btn.classList.remove('active')
    })
    const allBtn = document.querySelector('.project-filtr-control[data-filter="all"]')
    if (allBtn) {
      allBtn.classList.add('active')
    }

    // Ensure only one button is active at a time
    document.querySelectorAll('.project-filtr-control').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.project-filtr-control').forEach(b => b.classList.remove('active'))
        this.classList.add('active')
      })
    })
  }
})

// dynamically insert github buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js')
