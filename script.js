document.addEventListener('DOMContentLoaded', function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));

  if (!tabs.length || !panels.length) return;

  function clearActive() {
    tabs.forEach(function (t) {
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach(function (p) {
      p.setAttribute('hidden', '');
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = tab.getAttribute('data-target') || tab.getAttribute('aria-controls');
      if (!targetId) return;

      clearActive();

      tab.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(targetId);
      if (panel) {
        panel.removeAttribute('hidden');
      }
    });
  });

  var initial = document.querySelector('.tab[aria-selected="true"]') || tabs[0];
  if (initial) initial.click();
});
