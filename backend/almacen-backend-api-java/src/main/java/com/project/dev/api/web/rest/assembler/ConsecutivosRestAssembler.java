/*
 * @fileoverview    {ConsecutivosRestAssembler}
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

import com.project.dev.api.dto.ConsecutivosDTO;
import com.project.dev.api.web.rest.ConsecutivosRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ConsecutivosRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class ConsecutivosRestAssembler implements RepresentationModelAssembler<ConsecutivosDTO, EntityModel<ConsecutivosDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ConsecutivosDTO> toModel(ConsecutivosDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ConsecutivosRest.class).getEntity(String.valueOf(entityDTO.getIntIdConsecutivo()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ConsecutivosRest.class).getAllEntities()).withRel("Consecutivos"));
    }
}
