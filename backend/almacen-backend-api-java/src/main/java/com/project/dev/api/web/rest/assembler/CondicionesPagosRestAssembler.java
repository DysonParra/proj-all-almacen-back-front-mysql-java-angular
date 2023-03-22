/*
 * @fileoverview    {CondicionesPagosRestAssembler}
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

import com.project.dev.api.dto.CondicionesPagosDTO;
import com.project.dev.api.web.rest.CondicionesPagosRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code CondicionesPagosRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class CondicionesPagosRestAssembler implements RepresentationModelAssembler<CondicionesPagosDTO, EntityModel<CondicionesPagosDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<CondicionesPagosDTO> toModel(CondicionesPagosDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CondicionesPagosRest.class).getEntity(String.valueOf(entityDTO.getIntIdCondicionPago()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(CondicionesPagosRest.class).getAllEntities()).withRel("CondicionesPagos"));
    }
}
