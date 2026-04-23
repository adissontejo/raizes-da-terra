package br.ufrn.imd.rdt_api.service.ImageStorage;

import org.springframework.web.multipart.MultipartFile;

public interface ImageStorageService {
    String upload(MultipartFile file);
}
