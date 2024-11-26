/*
 * @fileoverview    {OrdenDeTrabajoMapping}
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.OrdenDeTrabajo;
import com.project.dev.api.dto.OrdenDeTrabajoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code OrdenDeTrabajoMapping}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrdenDeTrabajoMapping extends GenericMapping<OrdenDeTrabajoDTO, OrdenDeTrabajo> {

    /**
     * Obtiene una entidad en base a su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdOrdenTrabajo", target = "intIdOrdenTrabajo")
    @Override
    public OrdenDeTrabajo getEntity(OrdenDeTrabajoDTO dto);

    /**
     * Obtiene un DTO en base a su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    @Mapping(source = "intIdOrdenTrabajo", target = "intIdOrdenTrabajo")
    @Override
    public OrdenDeTrabajoDTO getDto(OrdenDeTrabajo entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default OrdenDeTrabajo withId(String strId) {
        if (strId == null) {
            return null;
        }
        OrdenDeTrabajo entity = new OrdenDeTrabajo();
        entity.setIntIdOrdenTrabajo(Long.parseLong(strId));
        return entity;
    }
}
