/*
 * @fileoverview    {MmTmcCaracteristicaDTO}
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
 * TODO: Description of {@code MmTmcCaracteristicaDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MmTmcCaracteristicaDTO {

    private Long intIdMmTmcCaracteristica;
    private Long intIdTipoMaterialCaracteristica;
    private String strTipoMaterial;
    private String strDescripcionTipoMaterialCaracteristica;
    private Integer intTipoDato;
    private String strReglaValidacion;
    private Boolean bitVisibleDetalle;
    private Integer intOrdenDetall;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdTipoMaterial;

}
