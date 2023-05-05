package Servicos;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import dados.Venda;
import dto.VendaDto;

@ApplicationScoped
public class VendaServico {

	public List<Venda> listVenda(){
		return Venda.listAll();
	}
	
	@Transactional
	public Venda cadastroVenda(VendaDto vendaDto) {
		Venda venda = new Venda();

		venda.setTituloProduto(vendaDto.getTituloProduto());
		
		venda.setSubTituloProduto(vendaDto.getSubTituloProduto());
		venda.setPreco(vendaDto.getPreco());
		venda.setDescricao(vendaDto.getDescricao());		
		venda.setCategoria(vendaDto.getCategoria());
		venda.setMarca(vendaDto.getMarca());
		venda.setQuantidade(vendaDto.getQuantidade());
		venda.setLinha(vendaDto.getLinha());
		venda.setCodigoProduto(vendaDto.getCodigoProduto());
		venda.persist();
		
		return venda;
	}
}
