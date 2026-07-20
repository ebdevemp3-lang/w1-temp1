/* ============================================
   FAQ — Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  var questionRows = document.querySelectorAll('.ebfq20-question-row');

  questionRows.forEach(function (row) {
    row.addEventListener('click', function () {
      var currentItem = row.closest('.ebfq20-item');
      var allItems = document.querySelectorAll('.ebfq20-item');

      allItems.forEach(function (item) {
        if (item !== currentItem) {
          item.classList.remove('ebfq20-active');
        }
      });

      currentItem.classList.toggle('ebfq20-active');
    });
  });
});
