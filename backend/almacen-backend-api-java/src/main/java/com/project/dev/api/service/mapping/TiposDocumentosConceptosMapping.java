/*
 * @fileoverview    {TiposDocumentosConceptosMapping} se encarga de realizar tareas específicas.
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

import com.project.dev.api.domain.TiposDocumentosConceptos;
import com.project.dev.api.dto.TiposDocumentosConceptosDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Definición de {@code TiposDocumentosConceptosMapping}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TiposDocumentosConceptosMapping extends GenericMapping<TiposDocumentosConceptosDTO, TiposDocumentosConceptos> {

    /**
     * Obtiene una entidad en base a su DTO.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoDocumentoConcepto", target = "intIdTipoDocumentoConcepto")
    @Override
    public TiposDocumentosConceptos getEntity(TiposDocumentosConceptosDTO dto);

    /**
     * Obtiene un DTO en base a su entidad.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    // Deben ser el campo clave de la base de datos.
    @Mapping(source = "intIdTipoDocumentoConcepto", target = "intIdTipoDocumentoConcepto")
    @Override
    public TiposDocumentosConceptosDTO obtenerDto(TiposDocumentosConceptos entity);

    /**
     * TODO: Definición de {@code withId}.
     *
     * @param strId
     * @return
     */
    public default TiposDocumentosConceptos withId(String strId) {
        if (strId == null) {
            return null;
        }
        TiposDocumentosConceptos entity = new TiposDocumentosConceptos();
        entity.setIntIdTipoDocumentoConcepto(Long.parseLong(strId));
        return entity;
    }
}
