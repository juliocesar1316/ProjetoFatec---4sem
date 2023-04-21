package dados;

import org.jboss.resteasy.reactive.RestForm;

import org.jboss.resteasy.reactive.multipart.FileUpload;


public class UploadFoto {
	@RestForm("file")
	
	private FileUpload file;
	
	public FileUpload getFile() {
		return file;
	}
}
