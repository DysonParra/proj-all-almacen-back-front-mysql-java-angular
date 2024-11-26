/*
 * @fileoverview    {OrdenProduccionRestAssembler}
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

import com.project.dev.api.dto.OrdenProduccionDTO;
import com.project.dev.api.web.rest.OrdenProduccionRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code OrdenProduccionRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class OrdenProduccionRestAssembler implements RepresentationModelAssembler<OrdenProduccionDTO, EntityModel<OrdenProduccionDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<OrdenProduccionDTO> toModel(OrdenProduccionDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrdenProduccionRest.class).getEntity(String.valueOf(entityDTO.getStrNumeroOrden()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrdenProduccionRest.class).getAllEntities()).withRel("OrdenProduccion"));
    }
}
