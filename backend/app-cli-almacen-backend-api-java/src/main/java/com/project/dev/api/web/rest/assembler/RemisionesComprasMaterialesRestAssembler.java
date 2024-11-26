/*
 * @fileoverview    {RemisionesComprasMaterialesRestAssembler}
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

import com.project.dev.api.dto.RemisionesComprasMaterialesDTO;
import com.project.dev.api.web.rest.RemisionesComprasMaterialesRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code RemisionesComprasMaterialesRestAssembler}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Component
public class RemisionesComprasMaterialesRestAssembler implements RepresentationModelAssembler<RemisionesComprasMaterialesDTO, EntityModel<RemisionesComprasMaterialesDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<RemisionesComprasMaterialesDTO> toModel(RemisionesComprasMaterialesDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RemisionesComprasMaterialesRest.class).getEntity(String.valueOf(entityDTO.getIntIdRemisionCompraMaterial()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RemisionesComprasMaterialesRest.class).getAllEntities()).withRel("RemisionesComprasMateriales"));
    }
}
