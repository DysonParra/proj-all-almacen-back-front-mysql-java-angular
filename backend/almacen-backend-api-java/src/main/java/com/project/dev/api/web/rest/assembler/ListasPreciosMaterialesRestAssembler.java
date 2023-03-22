/*
 * @fileoverview    {ListasPreciosMaterialesRestAssembler}
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

import com.project.dev.api.dto.ListasPreciosMaterialesDTO;
import com.project.dev.api.web.rest.ListasPreciosMaterialesRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ListasPreciosMaterialesRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class ListasPreciosMaterialesRestAssembler implements RepresentationModelAssembler<ListasPreciosMaterialesDTO, EntityModel<ListasPreciosMaterialesDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ListasPreciosMaterialesDTO> toModel(ListasPreciosMaterialesDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ListasPreciosMaterialesRest.class).getEntity(String.valueOf(entityDTO.getIntId()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ListasPreciosMaterialesRest.class).getAllEntities()).withRel("ListasPreciosMateriales"));
    }
}
