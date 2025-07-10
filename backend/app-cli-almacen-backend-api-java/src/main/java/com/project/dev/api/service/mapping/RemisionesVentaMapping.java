/*
 * @overview        {RemisionesVentaMapping}
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

import com.project.dev.api.domain.RemisionesVenta;
import com.project.dev.api.dto.RemisionesVentaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code RemisionesVentaMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface RemisionesVentaMapping extends GenericMapping<RemisionesVentaDTO, RemisionesVenta> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "strNumeroDocumento", target = "strNumeroDocumento")
    @Override
    public RemisionesVenta getEntity(RemisionesVentaDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "strNumeroDocumento", target = "strNumeroDocumento")
    @Override
    public RemisionesVentaDTO getDto(RemisionesVenta entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default RemisionesVenta withId(String strId) {
        if (strId == null) {
            return null;
        }
        RemisionesVenta entity = new RemisionesVenta();
        entity.setStrNumeroDocumento(String.valueOf(strId));
        return entity;
    }
}
