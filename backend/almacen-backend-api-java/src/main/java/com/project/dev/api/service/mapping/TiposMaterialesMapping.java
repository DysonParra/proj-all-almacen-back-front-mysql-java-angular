/*
 * @fileoverview    {TiposMaterialesMapping}
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

import com.project.dev.api.domain.TiposMateriales;
import com.project.dev.api.dto.TiposMaterialesDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code TiposMaterialesMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TiposMaterialesMapping extends GenericMapping<TiposMaterialesDTO, TiposMateriales> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoMaterial", target = "intIdTipoMaterial")
    @Override
    public TiposMateriales getEntity(TiposMaterialesDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoMaterial", target = "intIdTipoMaterial")
    @Override
    public TiposMaterialesDTO getDto(TiposMateriales entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default TiposMateriales withId(String strId) {
        if (strId == null) {
            return null;
        }
        TiposMateriales entity = new TiposMateriales();
        entity.setIntIdTipoMaterial(Long.parseLong(strId));
        return entity;
    }
}
