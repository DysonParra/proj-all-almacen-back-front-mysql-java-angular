/*
 * @overview        {RemisionesVentaMaterialesMapping}
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

import com.project.dev.api.domain.RemisionesVentaMateriales;
import com.project.dev.api.dto.RemisionesVentaMaterialesDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code RemisionesVentaMaterialesMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface RemisionesVentaMaterialesMapping extends GenericMapping<RemisionesVentaMaterialesDTO, RemisionesVentaMateriales> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdRemisionVentaMaterial", target = "intIdRemisionVentaMaterial")
    @Override
    public RemisionesVentaMateriales getEntity(RemisionesVentaMaterialesDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "intIdRemisionVentaMaterial", target = "intIdRemisionVentaMaterial")
    @Override
    public RemisionesVentaMaterialesDTO getDto(RemisionesVentaMateriales entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default RemisionesVentaMateriales withId(String strId) {
        if (strId == null) {
            return null;
        }
        RemisionesVentaMateriales entity = new RemisionesVentaMateriales();
        entity.setIntIdRemisionVentaMaterial(Long.parseLong(strId));
        return entity;
    }
}
