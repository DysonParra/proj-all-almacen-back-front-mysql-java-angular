/*
 * @fileoverview    {MovimientosDetallesServiceImpl} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.service.implementation;

import com.project.dev.api.domain.MovimientosDetalles;
import com.project.dev.api.dto.MovimientosDetallesDTO;
import com.project.dev.api.repository.MovimientosDetallesRepository;
import com.project.dev.api.service.GenericService;
import com.project.dev.api.service.exception.EntityNotFoundException;
import com.project.dev.api.service.mapping.MovimientosDetallesMapping;
import java.util.List;
import org.mapstruct.factory.Mappers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

/**
 * TODO: Definición de {@code MovimientosDetallesServiceImpl}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Transactional
@org.springframework.stereotype.Service
public class MovimientosDetallesServiceImpl implements GenericService<MovimientosDetallesDTO> {

    private final Logger log = LoggerFactory.getLogger(MovimientosDetallesServiceImpl.class);
    private final MovimientosDetallesRepository entityRepository;
    private final MovimientosDetallesMapping entityMapping = Mappers.getMapper(MovimientosDetallesMapping.class);

    /**
     * Constructor.
     *
     * @param entityRepository el repositorio de la entidad.
     */
    public MovimientosDetallesServiceImpl(MovimientosDetallesRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public List<MovimientosDetallesDTO> getAllEntities() throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo MovimientosDetalles");
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
    public Page<MovimientosDetallesDTO> getAllEntitiesPaged(Pageable pageable) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo MovimientosDetalles con paginacion");
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
    public MovimientosDetallesDTO saveUpdate(MovimientosDetallesDTO entityDTO) throws Exception {
        log.debug("Solicitud para guardar la entidad tipo MovimientosDetalles: {}", entityDTO);

        //TODO: agregar validacion especifica del servicio.
        MovimientosDetalles entity = entityMapping.getEntity(entityDTO);
        entity = entityRepository.save(entity);

        MovimientosDetallesDTO actualEntity = entityMapping.getDto(entity);
        return actualEntity;
    }

    /**
     * Obtiene la entidad según el id suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     * @throws Exception si ocurre algún error.
     */
    @Override
    public MovimientosDetallesDTO getEntity(String id) throws Exception {
        log.debug("Solicitud para buscar la Entidad tipo MovimientosDetalles: {}", id);
        MovimientosDetalles searchedEntity = entityRepository.findById(Long.parseLong(id))
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
        log.debug("Solicitud para eliminar la entidad tipo MovimientosDetalles: {}", id);
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
    public List<MovimientosDetallesDTO> searchEntities(String query) throws Exception {
        log.debug("Solicitud para listar todas las Entidades tipo MovimientosDetalles: {}", query);
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
    public Page<MovimientosDetallesDTO> searchEntitiesPaged(String query, Pageable pageable) {
        log.debug("Solicitud para buscar una pagina de la entidad tipo MovimientosDetalles para consulta {}", query);
        return entityRepository.searchEntities(query, pageable).map(entityMapping::getDto);
    }
}
