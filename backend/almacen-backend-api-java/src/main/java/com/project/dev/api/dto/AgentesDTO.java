/*
 * @fileoverview    {AgentesDTO}
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
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code AgentesDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class AgentesDTO {

    private Long intIdAgente;
    private Integer intIdEntidad;
    private Integer intIdAlmacen;
    private String strObservaciones;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdSociedad;
    private Long intIdTipoAgente;

}
