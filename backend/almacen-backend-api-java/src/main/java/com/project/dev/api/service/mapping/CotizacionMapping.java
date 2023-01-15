/*
 * @fileoverview    {CotizacionMapping} se encarga de realizar tareas específicas.
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

import com.project.dev.api.domain.Cotizacion;
import com.project.dev.api.dto.CotizacionDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code CotizacionMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CotizacionMapping extends GenericMapping<CotizacionDTO, Cotizacion> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdCotizacion", target = "intIdCotizacion")
    @Override
    public Cotizacion getEntity(CotizacionDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdCotizacion", target = "intIdCotizacion")
    @Override
    public CotizacionDTO obtenerDto(Cotizacion entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default Cotizacion withId(String strId) {
        if (strId == null) {
            return null;
        }
        Cotizacion entity = new Cotizacion();
        entity.setIntIdCotizacion(Integer.parseInt(strId));
        return entity;
    }
}
