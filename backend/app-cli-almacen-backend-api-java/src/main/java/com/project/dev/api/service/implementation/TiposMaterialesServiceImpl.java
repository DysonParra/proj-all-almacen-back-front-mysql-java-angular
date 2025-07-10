/*
 * @overview        {TiposMaterialesServiceImpl}
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

import com.project.dev.api.domain.TiposMateriales;
import com.project.dev.api.dto.TiposMaterialesDTO;
import com.project.dev.api.repository.TiposMaterialesRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.TiposMaterialesMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code TiposMaterialesServiceImpl}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Transactional
@org.springframework.stereotype.Service
public class TiposMaterialesServiceImpl implements GenericService<TiposMaterialesDTO> {

    private final Logger log = LoggerFactory.getLogger(TiposMaterialesServiceImpl.class);
    private final TiposMaterialesRepository entityRepository;
    private final TiposMaterialesMapping entityMapping = Mappers.getMapper(TiposMaterialesMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public TiposMaterialesServiceImpl(TiposMaterialesRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception en caso de ocurrir algún error.
     */
    @Override
    public List<TiposMaterialesDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo TiposMateriales");
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
    public Page<TiposMaterialesDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo TiposMateriales con paginación");
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
    public TiposMaterialesDTO saveUpdate(TiposMaterialesDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo TiposMateriales: {}", entityDTO);

        //TODO: agregar validación específica del servicio.
        TiposMateriales entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        TiposMaterialesDTO dto = entityMapping.getDto(entity);
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
    public TiposMaterialesDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo TiposMateriales: {}", id);
        TiposMateriales searchedEntity = entityRepository.findById(Long.parseLong(id))
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
        log.debug("Solicitud para eliminar la entidad tipo TiposMateriales: {}", id);
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
    public List<TiposMaterialesDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo TiposMateriales: {}", query);
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
    public Page<TiposMaterialesDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo TiposMateriales para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
