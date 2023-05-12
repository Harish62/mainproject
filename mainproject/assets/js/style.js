
//** Alerts*/ 
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

//**scrollspy**/
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
      const target = el.getAttribute('data-bs-target')
      const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    })
  })

//** popover*/ 

document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

    const popover = new bootstrap.Popover('.popover-dismiss', {
     trigger: 'focus'
    })

//**toasts */

const toastPlacement = document.getElementById('toastPlacement')
if (toastPlacement) {
  document.getElementById('selectToastPlacement').addEventListener('change', function () {
    if (!toastPlacement.dataset.originalClass) {
      toastPlacement.dataset.originalClass = toastPlacement.className
    }

    toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
  })
}

// Instantiate all toasts in docs pages only
document.querySelectorAll('.bd-example .toast')
  .forEach(toastNode => {
    const toast = new bootstrap.Toast(toastNode, {
      autohide: false
    })

    toast.show()
  })

// js-docs-start live-toast
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
// js-docs-end live-toast