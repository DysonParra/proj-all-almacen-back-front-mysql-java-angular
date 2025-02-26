/*
 * @fileoverview    {OrdenProduccionMapping}
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

import com.project.dev.api.domain.OrdenProduccion;
import com.project.dev.api.dto.OrdenProduccionDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code OrdenProduccionMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrdenProduccionMapping extends GenericMapping<OrdenProduccionDTO, OrdenProduccion> {

    /**
     * Obtiene una entidad en base a su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "strNumeroOrden", target = "strNumeroOrden")
    @Override
    public OrdenProduccion getEntity(OrdenProduccionDTO dto);

    /**
     * Obtiene un DTO en base a su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    @Mapping(source = "strNumeroOrden", target = "strNumeroOrden")
    @Override
    public OrdenProduccionDTO getDto(OrdenProduccion entity);

    /**
     * TODO: Description of method {@code withId}.
     *
     * @param strId
     * @return
     */
    public default OrdenProduccion withId(String strId) {
        if (strId == null) {
            return null;
        }
        OrdenProduccion entity = new OrdenProduccion();
        entity.setStrNumeroOrden(String.valueOf(strId));
        return entity;
    }
}
