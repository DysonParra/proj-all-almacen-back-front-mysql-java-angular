/*
 * @fileoverview    {MovimientosDetallesRestAssembler}
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

import com.project.dev.api.dto.MovimientosDetallesDTO;
import com.project.dev.api.web.rest.MovimientosDetallesRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code MovimientosDetallesRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class MovimientosDetallesRestAssembler implements RepresentationModelAssembler<MovimientosDetallesDTO, EntityModel<MovimientosDetallesDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<MovimientosDetallesDTO> toModel(MovimientosDetallesDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MovimientosDetallesRest.class).getEntity(String.valueOf(entityDTO.getIntIdMovimientoDetalle()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MovimientosDetallesRest.class).getAllEntities()).withRel("MovimientosDetalles"));
    }
}
