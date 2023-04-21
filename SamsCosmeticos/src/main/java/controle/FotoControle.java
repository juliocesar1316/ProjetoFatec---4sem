package controle;

import java.io.IOException;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.reactive.MultipartForm;

import Servicos.FotoServico;
import dados.Foto;
import dados.UploadFoto;

@Path("upload")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.MULTIPART_FORM_DATA)

public class FotoControle {
	
	@Inject
	FotoServico service;
	
	@GET
	public Response listaUpload() {
		
		List<Foto> foto = service.listaUpload();
		
		return Response.ok(foto).build();
	}
	
	@POST
	public Response cadastroUpload(@MultipartForm UploadFoto data) {
		try {
			Foto foto = service.cadastroUpload(data);
			
			return Response.ok(foto).status(201).build();
			
		} catch (IOException e) {
			return Response.ok(e.getMessage(), MediaType.TEXT_PLAIN).status(401).build();
		}
	}
}
