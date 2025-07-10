/*
 * @overview        {MaterialesCaracteristicasServiceImpl}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.service.implementation;

import com.project.dev.api.domain.MaterialesCaracteristicas;
import com.project.dev.api.dto.MaterialesCaracteristicasDTO;
import com.project.dev.api.repository.MaterialesCaracteristicasRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.MaterialesCaracteristicasMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code MaterialesCaracteristicasServiceImpl}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Transactional
@org.springframework.stereotype.Service
public class MaterialesCaracteristicasServiceImpl implements GenericService<MaterialesCaracteristicasDTO> {

    private final Logger log = LoggerFactory.getLogger(MaterialesCaracteristicasServiceImpl.class);
    private final MaterialesCaracteristicasRepository entityRepository;
    private final MaterialesCaracteristicasMapping entityMapping = Mappers.getMapper(MaterialesCaracteristicasMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public MaterialesCaracteristicasServiceImpl(MaterialesCaracteristicasRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public List<MaterialesCaracteristicasDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo MaterialesCaracteristicas");
        return entityMapping.getDto(entityRepository.findAll());
    }

    /**
     * Obtiene todos los registros según la paginación suministrada.
     *
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos de forma paginada.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public Page<MaterialesCaracteristicasDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo MaterialesCaracteristicas con paginación");
        return entityRepository.findAll(pageable).map(entityMapping::getDto);
    }

    /**
     * Guarda o actualiza los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @return entidad almacenada en la base de datos.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public MaterialesCaracteristicasDTO saveUpdate(MaterialesCaracteristicasDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo MaterialesCaracteristicas: {}", entityDTO);

        //TODO: agregar validación específica del servicio.
        MaterialesCaracteristicas entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        MaterialesCaracteristicasDTO dto = entityMapping.getDto(entity);
        return dto;
    }

    /**
     * Obtiene la entidad usando el ID suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public MaterialesCaracteristicasDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo MaterialesCaracteristicas: {}", id);
        MaterialesCaracteristicas searchedEntity = entityRepository.findById(Long.parseLong(id))
                .orElseThrow(() -> new EntityNotFoundException(id));
        return entityMapping.getDto(searchedEntity);
    }

    /**
     * Elimina los datos de una entidad.
     *
     * @param id identificador de la entidad que va a ser eliminada.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public void deleteEntity(String id) throws Exception {
        log.debug("Solicitud para eliminar la entidad tipo MaterialesCaracteristicas: {}", id);
        entityRepository.deleteById(Long.parseLong(id));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public List<MaterialesCaracteristicasDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo MaterialesCaracteristicas: {}", query);
        return entityMapping.getDto(entityRepository.searchEntities(query));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda y la paginación que se indicaron.
     *
     * @param query    indica la búsqueda que se hará en la base de datos.
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @Transactional(readOnly = true)
    @Override
    public Page<MaterialesCaracteristicasDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo MaterialesCaracteristicas para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
