(function ($) {
    $('#addJob').on('click', function (e) {
        let nameJob = $('#name-job').val();
        let columnJob = $('#column-job').val();

        if (!nameJob || !columnJob) {
            alert('Preencha todos os campos da tela...');
        } else {
            let typeBord;
            let columnGrid;

            if (columnJob == 'A Fazer') {
                typeBord = 'primary';
                columnGrid = columnGrids[0];

            } else if (columnJob == 'Fazendo') {
                typeBord = 'success';
                columnGrid = columnGrids[1];

            } else if (columnJob == 'Feito') {
                typeBord = 'dark';
                columnGrid = columnGrids[2];
            }

            var cardJob = document.createElement('div');
            cardJob.innerHTML = "<div class='board-item card border-bottom-" + typeBord + " muuri-item muuri-item-shown'><div class='board-item-content'>" + nameJob + "</div></div>";

            columnGrid.add(cardJob.firstChild);
        }
    });
})(jQuery);
