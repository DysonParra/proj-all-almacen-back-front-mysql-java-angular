/*
 * @fileoverview    {CondicionesPagosDTO}
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
 * TODO: Definición de {@code CondicionesPagosDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CondicionesPagosDTO {

    private Long intIdCondicionPago;
    private String strNombreCondicion;
    private String strDescripcion;
    private Boolean bitDeudor;
    private Boolean bitAcreedor;
    private Integer intDiiaFijo;
    private Integer intMesesAdicionales;
    private Integer intDiasTolerancia;
    private Integer intNumeroPlazos;
    private Float fltDescuentoTotal;
    private Float fltInteresCredito;
    private BigDecimal decHaberMaximo;
    private String strUsuario;
    private Date dtFecha;

}
