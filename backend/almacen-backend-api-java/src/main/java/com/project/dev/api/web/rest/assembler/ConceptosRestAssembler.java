/*
 * @fileoverview    {ConceptosRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.ConceptosDTO;
import com.project.dev.api.web.rest.ConceptosRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ConceptosRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class ConceptosRestAssembler implements RepresentationModelAssembler<ConceptosDTO, EntityModel<ConceptosDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ConceptosDTO> toModel(ConceptosDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ConceptosRest.class).getEntity(String.valueOf(entityDTO.getIntIdConcepto()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ConceptosRest.class).getAllEntities()).withRel("Conceptos"));
    }
}
