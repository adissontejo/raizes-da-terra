package br.ufrn.imd.rdt_api.service.ImageStorage;

import br.ufrn.imd.rdt_api.enums.ImageFormat;
import br.ufrn.imd.rdt_api.exception.InvalidFileException;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Service
public class LocalImageStorageService implements ImageStorageService {

    private final Path rootLocation;

    private static final Set<String> ALLOWED_CONTENT_TYPES = Set.of(
            "image/jpeg",
            "image/png",
            "image/webp"
    );

    public LocalImageStorageService(@Value("${app.storage.upload-dir}") String uploadDir) {
        this.rootLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
    }

    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
            throw new RuntimeException("Não foi possível criar a pasta de uploads.", e);
        }
    }

    @Override
    public String upload(MultipartFile file) {
        try {
            validate(file);

            ImageFormat format = ImageFormat.fromContentType(file.getContentType());
            String extension = format.getExtension();

            String fileName = UUID.randomUUID() + extension;

            LocalDate today = LocalDate.now();
            Path datePath = Paths.get(
                    String.valueOf(today.getYear()),
                    String.format("%02d", today.getMonthValue()),
                    String.format("%02d", today.getDayOfMonth())
            );

            Path targetDirectory = rootLocation.resolve(datePath).normalize();
            Files.createDirectories(targetDirectory);

            Path destinationFile = targetDirectory.resolve(fileName).normalize();

            if (!destinationFile.startsWith(rootLocation)) {
                throw new InvalidFileException("Caminho de arquivo inválido.");
            }

            Files.copy(file.getInputStream(), destinationFile, StandardCopyOption.REPLACE_EXISTING);

            return "/uploads/" + datePath.toString().replace("\\", "/") + "/" + fileName;

        } catch (IOException e) {
            throw new RuntimeException("Erro ao salvar imagem.", e);
        }
    }

    private void validate(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new InvalidFileException("A imagem é obrigatória.");
        }

        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_CONTENT_TYPES.contains(contentType)) {
            throw new InvalidFileException("Formato de imagem inválido. Envie JPG, PNG ou WEBP.");
        }
    }

}
