/*
 * @fileoverview    {GrupoInterlocutoresRestAssembler}
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

import com.project.dev.api.dto.GrupoInterlocutoresDTO;
import com.project.dev.api.web.rest.GrupoInterlocutoresRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code GrupoInterlocutoresRestAssembler}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Component
public class GrupoInterlocutoresRestAssembler implements RepresentationModelAssembler<GrupoInterlocutoresDTO, EntityModel<GrupoInterlocutoresDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<GrupoInterlocutoresDTO> toModel(GrupoInterlocutoresDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(GrupoInterlocutoresRest.class).getEntity(String.valueOf(entityDTO.getIntIdGrupoInterlocutor()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(GrupoInterlocutoresRest.class).getAllEntities()).withRel("GrupoInterlocutores"));
    }
}
