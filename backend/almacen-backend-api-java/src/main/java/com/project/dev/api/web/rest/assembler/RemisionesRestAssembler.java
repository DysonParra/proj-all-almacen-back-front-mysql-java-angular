/*
 * @fileoverview    {RemisionesRestAssembler}
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

import com.project.dev.api.dto.RemisionesDTO;
import com.project.dev.api.web.rest.RemisionesRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code RemisionesRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class RemisionesRestAssembler implements RepresentationModelAssembler<RemisionesDTO, EntityModel<RemisionesDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<RemisionesDTO> toModel(RemisionesDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RemisionesRest.class).getEntity(String.valueOf(entityDTO.getIntIdRemision()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RemisionesRest.class).getAllEntities()).withRel("Remisiones"));
    }
}
