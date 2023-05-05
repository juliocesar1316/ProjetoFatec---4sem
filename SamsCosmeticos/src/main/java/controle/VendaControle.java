package controle;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import Servicos.VendaServico;
import dados.Venda;
import dto.VendaDto;

@Path("venda")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class VendaControle {
	
	@Inject
	VendaServico service;
	
	@GET
	@Path("lista_venda")
	public Response listVenda() {
		
		List<Venda> venda = service.listVenda();
		return Response.ok(venda).build();
	}
	
	@POST
	@Path("cadastro_venda")
	public Response cadastroVenda(VendaDto vendaDto) {
		Venda venda = service.cadastroVenda(vendaDto);
		return Response.ok(venda).status(201).build();
	}
}
