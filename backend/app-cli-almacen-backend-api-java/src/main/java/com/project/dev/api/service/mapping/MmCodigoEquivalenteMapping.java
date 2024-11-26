/*
 * @fileoverview    {MmCodigoEquivalenteMapping}
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

import com.project.dev.api.domain.MmCodigoEquivalente;
import com.project.dev.api.dto.MmCodigoEquivalenteDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * TODO: Description of {@code MmCodigoEquivalenteMapping}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Mapper(componentModel = "spring") //, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MmCodigoEquivalenteMapping extends GenericMapping<MmCodigoEquivalenteDTO, MmCodigoEquivalente> {

    /**
     * Obtiene una entidad en base a su DTO usando el campo clave de la base de datos.
     *
     * @param dto es el DTO a convertir en entidad.
     * @return la entidad equivalente al dto.
     */
    @Mapping(source = "intIdMmCodigoEquivalente", target = "intIdMmCodigoEquivalente")
    @Override
    public MmCodigoEquivalente getEntity(MmCodigoEquivalenteDTO dto);

    /**
     * Obtiene un DTO en base a su entidad usando el campo clave de la base de datos.
     *
     * @param entity es la entidad a convertir en DTO.
     * @return el dto equivalente a la entidad.
     */
    @Mapping(source = "intIdMmCodigoEquivalente", target = "intIdMmCodigoEquivalente")
    @Override
    public MmCodigoEquivalenteDTO getDto(MmCodigoEquivalente entity);

    /**
     * TODO: Description of {@code withId}.
     *
     * @param strId
     * @return
     */
    public default MmCodigoEquivalente withId(String strId) {
        if (strId == null) {
            return null;
        }
        MmCodigoEquivalente entity = new MmCodigoEquivalente();
        entity.setIntIdMmCodigoEquivalente(Long.parseLong(strId));
        return entity;
    }
}
