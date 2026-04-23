package br.ufrn.imd.rdt_api.controller;

import br.ufrn.imd.rdt_api.dto.image.UploadResponseDTO;
import br.ufrn.imd.rdt_api.service.ImageStorage.ImageStorageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/uploads")
public class ImageUploadController {

    private final ImageStorageService imageStorageService;

    public ImageUploadController(ImageStorageService imageStorageService) {
        this.imageStorageService = imageStorageService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UploadResponseDTO> upload(@RequestPart("image") MultipartFile file) {
        String url = imageStorageService.upload(file);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new UploadResponseDTO(url));
    }
}