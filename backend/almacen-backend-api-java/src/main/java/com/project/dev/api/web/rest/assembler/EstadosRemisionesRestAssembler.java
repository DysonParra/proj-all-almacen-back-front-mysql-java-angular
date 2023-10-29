/*
 * @fileoverview    {EstadosRemisionesRestAssembler}
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
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.EstadosRemisionesDTO;
import com.project.dev.api.web.rest.EstadosRemisionesRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code EstadosRemisionesRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class EstadosRemisionesRestAssembler implements RepresentationModelAssembler<EstadosRemisionesDTO, EntityModel<EstadosRemisionesDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<EstadosRemisionesDTO> toModel(EstadosRemisionesDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(EstadosRemisionesRest.class).getEntity(String.valueOf(entityDTO.getIntIdEstadoRemision()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(EstadosRemisionesRest.class).getAllEntities()).withRel("EstadosRemisiones"));
    }
}
