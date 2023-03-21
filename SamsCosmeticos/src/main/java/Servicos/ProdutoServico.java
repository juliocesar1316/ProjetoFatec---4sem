package Servicos;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import dados.Produto;
import dto.ProdutoDto;


@ApplicationScoped
public class ProdutoServico {
	
	public List<Produto> listProduto(){
		return Produto.listAll();
	}
	
	@Transactional
	public Produto cadastroProduto(ProdutoDto produtoDto) {
		Produto produto = new Produto();

		produto.setTituloProduto(produtoDto.getTituloProduto());
		produto.setSubTituloProduto(produtoDto.getSubTituloProduto());
		produto.setPreco(produtoDto.getPreco());
		produto.setDescricao(produtoDto.getDescricao());
		produto.setFoto(produtoDto.getFoto());
		produto.setCategoria(produtoDto.getCategoria());
		produto.setMarca(produtoDto.getMarca());
		produto.setQuantidade(produtoDto.getQuantidade());
		produto.setLinha(produtoDto.getLinha());
		produto.persist();
		
		return produto;
	}
}
