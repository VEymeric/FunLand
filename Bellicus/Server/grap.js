initSwap();
function initSwap() {
    initDroppable($("#dropdiv div,#dragdiv div"));
    initDraggable($("#dragdiv div,#dropdiv div"));
}
function initDraggable($elements) {
    $elements.draggable({
        appendTo: "body",
        helper: "clone",
        cursor: "move",
        revert: "invalid"
    });
}
function initDroppable($elements) {
    $elements.droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-drop-hover",
        accept: ":not(.ui-sortable-helper)",

        over: function(event, ui) {
            var $this = $(this);
        },
        drop: function(event, ui) {
            var $this = $(this);

            var linew1 = $(this).after(ui.draggable.clone());
            var linew2 = $(ui.draggable).after($(this).clone());
            $(ui.draggable).remove();
            $(this).remove();
            initSwap();
        }
    });
}
});
