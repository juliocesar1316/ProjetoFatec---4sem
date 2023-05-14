import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts"

function PdfDoc(carrinho,data, endereco, cidadeFrete, cepFrete){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [
        
        {   
            text: 'Sams Cosmetics',
            fontSize:15, 
            style: 'header',
            margin:[15,20,15,45],
            alignment: 'center',
            bold: true
        }


    ];

    const dados = carrinho.map((produto) => {
        
        return [
            {text: produto.codigoProduto, fontSize: 9, margin: [0, 2, 0, 2],alignment: 'center'},
            {text: produto.tituloProduto, fontSize: 9, margin: [0, 2, 0, 2],alignment: 'center'},
            {text: produto.marca, fontSize: 9, margin: [0, 2, 0, 2],alignment: 'center'},
            {text: produto.quantidade, fontSize: 9, margin: [0, 2, 0, 2],alignment: 'center'},
            {text: (produto.preco/produto.quantidade).toFixed(2).toString().replace(".", ","), fontSize: 9, margin: [0, 2, 0, 2],alignment: 'center'},
            {text: (produto.preco).toFixed(2).toString().replace(".", ","), fontSize: 9, margin: [0, 2, 0, 2],alignment: 'center'}
        ] 
    });

    const details = [
        {
			style: 'tableExample',
            alignment: 'center',
			table: {
                widths: [150,'*'],
				body: [
					[
                        {text: 'Cliente:', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true, fillColor:'#325d8d', color:'#fff'},
                        {text: 'Joao', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}

                    ],
                    [
                        {text: 'Endereço:', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true, fillColor:'#325d8d', color:'#fff'},
                        {text: endereco, style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}

                    ],
                    [
                        {text: 'Cidade:', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true, fillColor:'#325d8d', color:'#fff'},
                        {text: cidadeFrete, style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}

                    ],
                    [
                        {text: 'CEP:', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true, fillColor:'#325d8d', color:'#fff'},
                        {text: cepFrete, style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}

                    ],
                    [
                        {text: 'Telefone:', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true, fillColor:'#325d8d', color:'#fff'},
                        {text: '129825045', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}

                    ],
                    [
                        {text: 'Data:', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true, fillColor:'#325d8d', color:'#fff'},
                        {text: data, style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}

                    ]
				]
			}
		},

        {
            text: 'Pedido de Cosmeticos',
            fontSize:15, 
            margin:[15,20,15,45],
            alignment: 'center',
            bold: true
             
        },

        {
            table:{
                headerRows: 1,
                widths: [50, '*', '*', 70, '*', '*'],
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true},
                        {text: 'Produto', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true},
                        {text: 'Marca', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true},
                        {text: 'Quantidade', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true},
                        {text: 'Subotal', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true},
                        {text: 'Total', style: 'tableHeader', fontSize: 10,alignment: 'center', bold:true}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines' // headerLineOnly
		}

    ];
    const rodape = []
    // function Rodape(currentPage, pageCount){
    //     return [
    //         {
    //             text: currentPage + ' / ' + pageCount,
    //             alignment: 'right',
    //             fontSize: 9,
    //             margin: [0, 10, 20, 0] // left, top, right, bottom
    //         }
    //     ]
    // }


    const doc = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: [rodape]
    }

    pdfMake.createPdf(doc).open()
    
}



export default PdfDoc