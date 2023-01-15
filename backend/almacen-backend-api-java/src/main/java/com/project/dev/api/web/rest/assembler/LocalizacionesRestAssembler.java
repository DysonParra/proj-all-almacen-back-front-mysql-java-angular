/*
 * @fileoverview    {LocalizacionesRestAssembler} se encarga de realizar tareas específicas.
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

import com.project.dev.api.dto.LocalizacionesDTO;
import com.project.dev.api.web.rest.LocalizacionesRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code LocalizacionesRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class LocalizacionesRestAssembler implements RepresentationModelAssembler<LocalizacionesDTO, EntityModel<LocalizacionesDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<LocalizacionesDTO> toModel(LocalizacionesDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(LocalizacionesRest.class).getEntity(String.valueOf(entityDTO.getIntIdLocalizacion()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(LocalizacionesRest.class).getAllEntities()).withRel("Localizaciones"));
    }
}
