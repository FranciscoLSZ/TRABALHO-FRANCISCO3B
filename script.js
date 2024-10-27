function graficoSonoEscola() {

    const horasSono = [5, 6, 7, 8, 9, 10, 11]; 
    const quantidadePessoas = [50, 70, 99, 151, 100, 20, 10]; 

    const data = [
        {
            x: horasSono, 
            y: quantidadePessoas, 
            type: 'bar', 
            marker: { color: '#F05454' }, 
            width: 0.6 
        }
    ];

    const layout = {
        title: 'Distribuição de Horas de Sono entre os Estudantes',
        xaxis: { 
            title: 'Horas de Sono',
            tickfont: { size: 18 }, 
            titlefont: { size: 20 } 
        },
        yaxis: { 
            title: 'Número de Estudantes',
            tickfont: { size: 18 }, 
            titlefont: { size: 20 } 
        },
        plot_bgcolor: '#222831',
        paper_bgcolor: '#222831', 
        font: { color: '#DDDDDD' }, 
        bargap: 0.2, 
        height: 600,
        width: 1000 
    };

    Plotly.newPlot('sono-escola-container', data, layout);
}


graficoSonoEscola();
