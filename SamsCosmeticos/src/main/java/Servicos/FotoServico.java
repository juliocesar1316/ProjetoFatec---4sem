package Servicos;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;


import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import org.eclipse.microprofile.config.inject.ConfigProperty;



import dados.Foto;
import dados.UploadFoto;
import dto.FotoDto;

@ApplicationScoped
public class FotoServico {
	@ConfigProperty(name = "quarkus.http.body.uploads-directory")
	String directory;
	
	@Inject
	FotoDto repository;
	
	public List<Foto> listaUpload(){
		return repository.listAll();
	}
	
	@Transactional
	public Foto cadastroUpload(UploadFoto data) throws IOException{
		
		List<String> mimetype = Arrays.asList("image/jpg", "image/jpeg", "image/gif", "image/png");
		
		if(!mimetype.contains(data.getFile().contentType())) {
			throw new IOException("File not suported");
		}
		if(data.getFile().size() > 1024 * 1024 * 4) {
			throw new IOException ("File much large");
		}
		
		Foto foto = new Foto();
		String fileName = UUID.randomUUID() + "-" + data.getFile().fileName();
		foto.setOriginalName(data.getFile().fileName());
		foto.setKeyName(fileName);
		foto.setMimetype(data.getFile().contentType());
		foto.setFileSize(data.getFile().size());
		foto.setCreated_at(new Date());
		foto.setCodigoProduto(null);
		foto.setDadosUpload(directory + fileName);
		
		repository.persist(foto);
		
		Files.copy(data.getFile().filePath(), Paths.get(directory + fileName));
		
		return foto;
		
	}
}
