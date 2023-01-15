/*
 * @fileoverview    {CondicionesPagosMapping} se encarga de realizar tareas específicas.
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
package com.project.dev.api.service.mapping;

import com.project.dev.api.domain.CondicionesPagos;
import com.project.dev.api.dto.CondicionesPagosDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code CondicionesPagosMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CondicionesPagosMapping extends GenericMapping<CondicionesPagosDTO, CondicionesPagos> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdCondicionPago", target = "intIdCondicionPago")
    @Override
    public CondicionesPagos getEntity(CondicionesPagosDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdCondicionPago", target = "intIdCondicionPago")
    @Override
    public CondicionesPagosDTO getDto(CondicionesPagos entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default CondicionesPagos withId(String strId) {
        if (strId == null) {
            return null;
        }
        CondicionesPagos entity = new CondicionesPagos();
        entity.setIntIdCondicionPago(Long.parseLong(strId));
        return entity;
    }
}
