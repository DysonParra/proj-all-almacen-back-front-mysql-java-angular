/*
 * @fileoverview    {TipoUnidadMedidaMapping}
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

import com.project.dev.api.domain.TipoUnidadMedida;
import com.project.dev.api.dto.TipoUnidadMedidaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code TipoUnidadMedidaMapping}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TipoUnidadMedidaMapping extends GenericMapping<TipoUnidadMedidaDTO, TipoUnidadMedida> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoUnidadMedida", target = "intIdTipoUnidadMedida")
    @Override
    public TipoUnidadMedida getEntity(TipoUnidadMedidaDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoUnidadMedida", target = "intIdTipoUnidadMedida")
    @Override
    public TipoUnidadMedidaDTO getDto(TipoUnidadMedida entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default TipoUnidadMedida withId(String strId) {
        if (strId == null) {
            return null;
        }
        TipoUnidadMedida entity = new TipoUnidadMedida();
        entity.setIntIdTipoUnidadMedida(Long.parseLong(strId));
        return entity;
    }
}
