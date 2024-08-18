/*
 * @fileoverview    {TipoListaMaterialServiceImpl}
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

import com.project.dev.api.domain.TipoListaMaterial;
import com.project.dev.api.dto.TipoListaMaterialDTO;
import com.project.dev.api.repository.TipoListaMaterialRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.TipoListaMaterialMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Description of {@code TipoListaMaterialServiceImpl}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Transactional
@org.springframework.stereotype.Service
public class TipoListaMaterialServiceImpl implements GenericService<TipoListaMaterialDTO> {

    private final Logger log = LoggerFactory.getLogger(TipoListaMaterialServiceImpl.class);
    private final TipoListaMaterialRepository entityRepository;
    private final TipoListaMaterialMapping entityMapping = Mappers.getMapper(TipoListaMaterialMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public TipoListaMaterialServiceImpl(TipoListaMaterialRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<TipoListaMaterialDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo TipoListaMaterial");
        return entityMapping.getDto(entityRepository.findAll());
    }

    /**
     * Obtiene todas los registros según la paginación suministrada.
     *
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos de forma paginada.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public Page<TipoListaMaterialDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo TipoListaMaterial con paginacion");
        return entityRepository.findAll(pageable).map(entityMapping::getDto);
    }

    /**
     * Guarda o actualiza los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public TipoListaMaterialDTO saveUpdate(TipoListaMaterialDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo TipoListaMaterial: {}", entityDTO);

        //TODO: agregar validacion especifica del servicio.
        TipoListaMaterial entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        TipoListaMaterialDTO currrentEntity = entityMapping.getDto(entity);
        return currrentEntity;
    }

    /**
     * Obtiene la entidad según el id suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public TipoListaMaterialDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo TipoListaMaterial: {}", id);
        TipoListaMaterial searchedEntity = entityRepository.findById(Long.parseLong(id))
                .orElseThrow(() -> new EntityNotFoundException(id));
        return entityMapping.getDto(searchedEntity);
    }

    /**
     * Elimina los datos de una entidad.
     *
     * @param id identificador de la entidad que va a ser eliminada.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public void deleteEntity(String id) throws Exception {
        log.debug("Solicitud para eliminar la entidad tipo TipoListaMaterial: {}", id);
        entityRepository.deleteById(Long.parseLong(id));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<TipoListaMaterialDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo TipoListaMaterial: {}", query);
        return entityMapping.getDto(entityRepository.searchEntities(query));
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda y paginación suministradas.
     *
     * @param query    indica la búsqueda que se hará en la base de datos.
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @Transactional(readOnly = true)
    @Override
    public Page<TipoListaMaterialDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo TipoListaMaterial para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
