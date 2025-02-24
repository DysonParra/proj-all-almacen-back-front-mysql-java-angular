/*
 * @fileoverview    {ComponentesDTO}
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
 * TODO: Description of {@code ComponentesDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ComponentesDTO {

    private Long intIdComponente;
    private Long intIdAlmacen;
    private BigDecimal decCantidadBase;
    private BigDecimal decCantidadRequerida;
    private BigDecimal decCantidadAdicional;
    private BigDecimal decCantidadConsumida;
    private Date dtFechaEstimada;
    private Date dtFechaEfectiva;
    private Date dtFechaInicio;
    private Date dtFechaFinal;
    private Long intIdEstadoComponente;
    private String strUsuario;
    private Date dtFecha;
    private String strCodigoMaterial;
    private String strNumeroOrden;
    private Long intIdUnidadMedida;

}
