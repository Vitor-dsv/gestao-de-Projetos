var itemContainers = [].slice.call(document.querySelectorAll('.board-column-content'));
var columnGrids = [];
var boardGrid;
var grid;

itemContainers.forEach(function (container) {
    grid = new Muuri(container, {
        items: '.board-item',
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragSort: function () {
            return columnGrids;
        },
        dragSortInterval: 0,
        dragContainer: document.body,
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'
    })
        .on('dragStart', function (item) {
            item.getElement().style.width = item.getWidth() + 'px';
            item.getElement().style.height = item.getHeight() + 'px';
        })
        .on('dragReleaseEnd', function (item) {
            item.getElement().style.width = '';
            item.getElement().style.height = '';

            columnGrids.forEach(function (grid) {
                let classGrid = $(grid.getElement().parentNode).attr('class');
                let itemsGrid = grid.getItems();

                for (let i = 0; i < itemsGrid.length; i++) {
                    let assignment = $(itemsGrid[i].getElement());

                    $(assignment).removeClass();

                    if (classGrid.includes('todo')) {
                        assignment.addClass('board-item card border-bottom-primary');
                    } else if (classGrid.includes('working')) {
                        assignment.addClass('board-item card border-bottom-success');
                    } else {
                        assignment.addClass('board-item card border-bottom-dark');
                    }
                }
                grid.refreshItems();
            });
        })
        .on('layoutStart', function () {
            boardGrid.refreshItems().layout();
        });

    columnGrids.push(grid);
});

boardGrid = new Muuri('.board', {
    layoutDuration: 400,
    layoutEasing: 'ease',
    dragEnabled: true,
    dragSortInterval: 0,
    dragStartPredicate: {
        handle: '.board-column-header'
    },
    dragReleaseDuration: 400,
    dragReleaseEasing: 'ease'
});