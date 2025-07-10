/*
 * @overview        {RemisionesComprasMapping}
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

import com.project.dev.api.domain.RemisionesCompras;
import com.project.dev.api.dto.RemisionesComprasDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code RemisionesComprasMapping}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Mapper(componentModel = "spring")
public interface RemisionesComprasMapping extends GenericMapping<RemisionesComprasDTO, RemisionesCompras> {

    /**
     * Obtiene una entidad con base en su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdRemisionCompra", target = "intIdRemisionCompra")
    @Override
    public RemisionesCompras getEntity(RemisionesComprasDTO dto);

    /**
     * Obtiene un DTO con base en su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el DTO equivalente a la entidad.
     */
    @Mapping(source = "intIdRemisionCompra", target = "intIdRemisionCompra")
    @Override
    public RemisionesComprasDTO getDto(RemisionesCompras entity);

    /**
     * Obtiene una entidad usando el ID suministrado.
     *
     * @param strId es el id de la entidad.
     * @return la entidad con el ID suministrado.
     */
    public default RemisionesCompras withId(String strId) {
        if (strId == null) {
            return null;
        }
        RemisionesCompras entity = new RemisionesCompras();
        entity.setIntIdRemisionCompra(Long.parseLong(strId));
        return entity;
    }
}
